exports.DATABASE_URL = process.env.DATABASE_URL || 
						global.DATABASE_URL ||
						(process.env.NODE_ENV === 'production' ?
							'mongodb://heroku_nb6plj6g:guj2a2crviqj5ioqpmboufrt0f@ds151108.mlab.com:51108/heroku_nb6plj6g' :
							'mongodb://localhost/inside_book_club-dev');
exports.PORT = process.env.PORT || 8080;