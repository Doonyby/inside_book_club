exports.DATABASE_URL = process.env.DATABASE_URL || 
						global.DATABASE_URL ||
						(process.env.NODE_ENV === 'production' ?
							'mongodb://heroku_xbqsvps2:6a94vd4ljbjn52367e33m4f2vs@ds139979.mlab.com:39979/heroku_xbqsvps2' :
							'mongodb://localhost/inside_book_club-dev');
exports.PORT = process.env.PORT || 8080;