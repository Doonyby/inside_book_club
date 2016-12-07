exports.DATABASE_URL = process.env.DATABASE_URL || 
						global.DATABASE_URL ||
						(process.env.NODE_ENV === 'production' ?
							'mongodb://localhost/iside_book_club' :
							'mongodb://localhost/inside_book_club-dev');
exports.PORT = process.env.PORT || 8080;