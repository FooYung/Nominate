import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const nominationSchema = new Schema({
	reason: {
		type:String,
		required: true
	},
	nominee: {
		type: String,
		required: true
	},
	nominated_by: {
		type: String,
		required: true
	},
	nomination_month: {
		type: Date,
		required: true
	},
	submission_date: {
		type: Date
	},
	is_editted: {
		type: Boolean
	}
});

const Nomination = mongoose.model('Nomination', nominationSchema);
export default Nomination;