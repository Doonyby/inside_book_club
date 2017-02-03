import mongoose from "mongoose";

let ClubSchema = new mongoose.Schema({
	clubName: {
		type: String,
		required: true,
		unique: true
	},
	organizer: {
		type: String,
		required: true
	},
	memberCap: {
		type: Number,
		required: true
	},
	members: {
		type: Array
	},
 	currentBook: {
		type: String
	},
	meetupDate: {
		type: String
	},
	commentFeed: [
		{
		    username: {type: String},
		    comment: {type: String},
		    date: {type: Date},
		    clubId: {type: String},
	    }
	],
});

export const Club = mongoose.model('Club', ClubSchema);