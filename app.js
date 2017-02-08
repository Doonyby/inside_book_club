import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import passport from "passport";
import LocalStrategy from "passport-local";
import configServer from "./config";
import axios from "axios";
import { User } from "./models/user";
import { Club } from "./models/club";
const Serve = require('./server.js');
const app = Serve.app();
let router = express.Router();
let jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use('/client', express.static(path.join(__dirname, '/client')));
app.use('/home/client/css/home.css', express.static(path.join(__dirname, './client/css/home.css')));
const server = require('http').Server(app);
const io = require('socket.io')(server);

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

var runServer = function(callback) {
    console.log('database_url: ' + configServer.DATABASE_URL);
    console.log('port: ' + configServer.PORT);
    mongoose.connect(configServer.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }
        server.listen(configServer.PORT, function() {
            console.log('Listening on localhost:' + configServer.PORT);
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};

var usersInClub = [];
var usersInChat = [];
var userObjInChat = [];

function getUserName(id) {
    for (var i=0; i<usersInChat.length; i++) {
        if (users[i].id == id) {
            return users[i].name;
        }
    }
}  

var nsp = io.of('/insideBookClubChat');
nsp.on('connection', (socket) => {
    let clubRoom = '';
    let userDisplay = {}
    socket.on('room', (room, username, totalUsers) => {
        socket.join(room);
        clubRoom = room;
        if (usersInChat.length == 0) {
            usersInClub = totalUsers;
        }
        for (var i=0; i<usersInClub.length; i++) {
            if (usersInClub[i] == username) {
                usersInClub.splice(i, 1);
            }
        }
        var newUser = {};
        newUser.username = username;
        newUser.id = socket.id;
        usersInChat.push(username);
        userObjInChat.push(newUser);
        userDisplay.usersInClub = usersInClub;
        userDisplay.usersInChat = usersInChat;
        nsp.in(clubRoom).emit('userDisplay', userDisplay);
    });

    socket.on('messageObj', (currentComment) => {
        let username = currentComment.username.toUpperCase();
        let comment = currentComment.comment;
        let messageDisplay = username + ": " + comment;
        nsp.in(clubRoom).emit('message', messageDisplay);
    })

    socket.on('disconnect', () => {
        for (var i=0; i<usersInChat.length; i++) {
            if (userObjInChat[i].id == socket.id) {
                usersInClub.push(userObjInChat[i].username);
                usersInChat.splice(i, 1);
                userObjInChat.splice(i, 1);
            }
        }
        userDisplay.usersInClub = usersInClub;
        userDisplay.usersInChat = usersInChat;
        nsp.in(clubRoom).emit('userDisplay', userDisplay);
    });
});

passport.use(new LocalStrategy(function(username, password, callback) {
    User.findOne({username: username}, function(err, user) {
        if(err) {
            callback(err);
            return;
        }
        if(!user) {
            return callback(null, false, {
                message: "Incorrect username"
            });
        }
        user.validatePassword(password, function(err, isValid) {
            if (err) {
                return callback(err);
            }
            if (!isValid) {
                return callback(null, false, {
                    message: "Incorrect password"
                });
            }
            return callback(null, user);
        });
    });
}));

app.use(passport.initialize());

app.post('/api/login', passport.authenticate('local', {session: false}), function(req, res) {
    res.json(req.user);
});

app.put('/api/shelfFutureBook', function(req,res) {
    User.findById(req.body.userId, function(err, item) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.futureBookShelf.push(req.body);
        item.save(function(err) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);
        });       
    });
});

app.put('/api/shelfPastBook', function(req,res) {
    User.findById(req.body.userId, function(err, item) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.pastBookShelf.push(req.body);
        item.save(function(err) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);
        });       
    });
});

app.get('/api/getClubList', function(req, res) {
    Club.find({}, function(err, clubs) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        var clubMap = [];
        clubs.forEach(function(club) {
            var clubSpec = {};
            var positionsLeft = club.memberCap - club.members.length;
            if (positionsLeft > 0) {
                clubSpec.clubName = club.clubName;
                clubSpec.memberCap = club.memberCap;
                clubSpec.openings = positionsLeft;
                clubSpec.currentBook = club.currentBook;
                clubSpec.meetupDate = club.meetupDate;
                clubMap.push(clubSpec);
            } else {
                return
            }
        });
        res.send(clubMap);
    })
});

app.get('/api/getMyClubData/:clubName', function(req, res) {
    Club.findOne({clubName: req.params.clubName}, function(err, item) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
    });
});

app.get('/api/getJoinClubData/:clubName', function(req, res) {
    Club.findOne({clubName: req.params.clubName}, function(err, item) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
    });
});


app.get('/api/getBookReview/:bookTitle', function(req, res) {
    axios.get('https://www.goodreads.com/book/title.json?key=RXCGpZJiLibgDpDcsr6tA&title=' + req.params.bookTitle)
        .then(function(response) {
            res.send(response.data);
        })
        .catch(function(error) {
            console.log('error', error);
            return res.status(500).json({
                message: 'Internal Server Error'
            });            
        });
})

app.put('/api/removeFutureBook', function(req, res) {
    User.findById(req.body.currentValue.userId, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.futureBookShelf.pull({_id: req.body.currentValue._id});
        item.save(function(err) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);
        });       
                
    })
})

app.put('/api/removePastBook', function(req, res) {
    User.findById(req.body.currentValue.userId, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.pastBookShelf.pull({_id: req.body.currentValue._id});
        item.save(function(err) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);
        });                
    });
});

app.delete('/api/deleteClub/:clubName', function(req, res) {
    Club.findOneAndRemove({clubName: req.params.clubName}, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
    });
});

app.put('/api/enterComment', function(req, res) {
    Club.findById(req.body.clubId, function(err, item) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (item.commentFeed.length == 70) {
            item.commentFeed.pop();
        }
        item.commentFeed.unshift(req.body);
        item.save(function(err) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);
        });       
    })
})

app.put('/api/removeMyClub', function(req, res) {
    User.findOne({myClub: req.body.clubName}, function(err, item) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.myClub = "";
        item.save(function(err) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);
        });
    })
})

app.put('/api/submitEditClub', function(req, res) {
    Club.findOne({clubName: req.body.clubName}, function(err, item) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.currentBook = req.body.currentBook;
        item.meetupDate = req.body.meetupDate;
        item.save(function(err) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);
        });
    });
});

app.put('/api/deleteJoinedClub', function(req, res) {
    User.findById(req.body.userId, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.joinedClub = '';
        item.save(function(err) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);           
        });          
    });
});

app.put('/api/leaveJoinedClub', function(req, res) {
    Club.findById(req.body.id, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.members.pull(req.body.username);
        item.save(function(err) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);           
        });          
    });
});

app.put('/api/updateClubMembers', function(req, res) {
    Club.findOne({clubName: req.body.clubName}, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        item.members.push(req.body.username);
        item.save(function(err) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);           
        });          
    });
});

app.put('/api/joinClub', function(req, res) {
    User.findById(req.body.userId, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        else if (item.myClub == req.body.clubName) {
            return res.status(500).json({
                message: 'You cannot join your own club...you own it. Choose another option to join a club.'
            });
        }
        item.joinedClub = req.body.clubName;
        item.save(function(err) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(201).json(item);           
        });
    });
});

app.put('/api/submitNewMyClub', function(req, res) {
    Club.findOne({clubName: req.body.clubName}, function(err, item) {
        if (item) {
            console.log('item was found....not original');
            return res.status(500).json({
                message: 'Club name already exists. Please choose another club name.'
            });
        }
        User.findById({_id: req.body.organizerId}, function(err, item){
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            item.myClub = req.body.clubName;
            item.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                return res.status(201).json(item);
            });
        });
    });
});

app.post('/api/createNewMyClub', function(req, res) {
    var club = {};
    club.clubName = req.body.clubName;
    club.currentBook = req.body.currentBook;
    club.meetupDate = req.body.meetupDate;
    club.memberCap = req.body.memberCap;
    club.organizer = req.body.organizer;
    Club.create(club, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Serer Error'
            });
        }
        return res.status(201).json(item);
    });
});

app.post('/api/signup', jsonParser, function(req, res) {
    if (!req.body) {
        return res.status(400).json({
            message: "No request body"
        });
    }
    if (!('username' in req.body)) {
        return res.status(422).json({
            message: "Missing field: username"
        });
    }
    var username = req.body.username;
    if (typeof username !== 'string') {
        return res.status(422).json({
            message: "Incorrect field type: username"
        });
    }
    username = username.trim();
    if (username == '') {
        return res.status(422).json({
            message: "Incorrect field length: username"
        });
    }
    if (!('password' in req.body)) {
        return res.status(422).json({
            message: "Missing field: password"
        });
    }
    var password = req.body.password;
    if (typeof password !== 'string') {
        return res.status(422).json({
            message: "Incorrect field type: password"
        });
    }
    password = password.trim();
    if (password == '') {
        return res.status(422).json({
            message: "Incorrect field length: password"
        });
    }
    var name = req.body.name;
    name = name.trim();
    if (name == '') {
        return res.status(422).json({
            message: "Missing field: name"
        });
    }
    var email = req.body.email;
    email = email.trim();
    if (email == '') {
    	return res.status(422).json({
    		message: "Missing field: email"
    	});
    }
    var passwordConfirm = req.body.passwordConfirm;
    passwordConfirm = passwordConfirm.trim();
    if (passwordConfirm != password) {
        return res.status(422).json({
            message: "Passwords do not match"
        });
    }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            var user = new User({
                name: name,
                username: username,
                password: hash,
                email: email
            });
            user.save(function(err) {
            if (err && err.code == 11000) {
                return res.status(500).json({
                        message: 'Username already exists'
                    });
                }
                else if (err) {
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                return res.status(201).json(user);
            });
        });
    });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

exports.app = app;
exports.runServer = runServer;





