import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const profileSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	avatarSrc: {
		type: String
	}
});

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;