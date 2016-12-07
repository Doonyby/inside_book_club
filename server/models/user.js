import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

let UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
});

UserSchema.methods.validatePassword = function(password, callback) {
	var that = this;
	bcrypt.compare(password, that.password, function(err, isValid) {
		if(err) {
			callback(err);
			return;
		}
		callback(null, isValid);
	})
}

export const User = mongoose.model('User', UserSchema);
