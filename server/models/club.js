import mongoose from "mongoose";

let ClubSchema = new mongoose.Schema({
	clubName: {
		type: String,
		required: true
	},
	organizer: {
		type: String,
		required: true
	},
	memberCap: {
		type: Number,
		required: true
	}
	members: {
		type: Array
	},
	requestingMembers: {
		type: Array
	},
	invitedMembers: {
		type: Array
	},
 	currentBook: {
		type: String
	},
	meetupDate: {
		type: String
	},
	commentFeed: {
		type: Array
	},
});

export const Club = mongoose.model('Club', ClubSchema);