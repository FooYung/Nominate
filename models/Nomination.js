import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const nominationSchema = new Schema({
	reason: String,
	profile_id: String,
	nominated_by: String,
	nominated_on: { type: Date }
});

const Nomination = mongoose.model('Nomination', nominationSchema);
export default Nomination;