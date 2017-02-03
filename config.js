exports.DATABASE_URL = process.env.DATABASE_URL || 
						global.DATABASE_URL ||
						(process.env.NODE_ENV === 'production' ?
							'mongodb://heroku_4gjj95h5:s75qckb2s73bgs9etknbkl53rf@ds139959.mlab.com:39959/heroku_4gjj95h5' :
							'mongodb://localhost/inside_book_club-dev');
exports.PORT = process.env.PORT || 8080;