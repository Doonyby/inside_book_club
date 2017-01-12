import express from "express";
import path from "path";
import bodyParser from "body-parser";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import passport from "passport";
import LocalStrategy from "passport-local";
import config from "../config";
import { User } from "./models/user";
import { Club } from "./models/club";

var runServer = function(callback) {
    console.log('database_url: ' + config.DATABASE_URL);
    console.log('port: ' + config.PORT);
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
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

let app = express();
let router = express.Router();
let jsonParser = bodyParser.json();
app.use(bodyParser.json());

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true  //eliminates noise from webpack
}));
app.use(webpackHotMiddleware(compiler));

app.use('/client', express.static(path.join(__dirname, '../client')));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
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

app.put('/api/submitNewMyClub', function(req, res) {
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
                return res.status(500).send(err);
            } else {
                res.status(201).json(item);
            }
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
	console.log("server", req.body)
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


exports.app = app;
exports.runServer = runServer;





