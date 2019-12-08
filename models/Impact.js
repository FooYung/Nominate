import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const impactSchema = new Schema({
	department: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	company_values: {
		type: String,
		required: true
	},
	submission_month: {
		type: Number,
		required: true
	},
	submission_date: {
		type: Date,
		required: true
	},
	user_id: {
		type: String,
		required: true
	}
});

const Impact = mongoose.model('Impact', impactSchema);
export default Impact;