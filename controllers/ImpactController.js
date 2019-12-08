import Impact from '../models/Impact';

class ImpactController {
	name = "Impact"

	async getAll(req, res) {
		await Impact.find({}, (err, result) => {
			if (err) res.status(500).send(err);
			
			res.status(200).send(result);
		});
	}

	async getOne(req, res) {
		const id = req.params.id;
		
		if (!id) {
			res.status(400).send({message: 'id was null'});
		}

		await Impact.findOne({_id: id}, (err, result) => {
			if (err) res.status(500).send(err);
			
			res.status(200).send(result);
		});
	}

	async create(req, res) {
		const impact = new Impact({
			department: req.body.department,
			description: req.body.description,
			company_values: req.body.company_values,
			submission_month: req.body.submission_month,
			submission_date: req.body.submission_date,
			user_id: req.body.user_id
		});

		await impact.save((err, response) => {
			if (err) res.status(500).send(err);

			res.status(200).send(response);
		});
	}

	async update(req, res) {
		const id = req.body.id;

		if (!id)
			res.status(500).send('provided id was null.');

		const updateObj = {
			department: req.body.department,
			description: req.body.description,
			company_values: req.body.company_values,
			submission_month: req.body.submission_month,
			submission_date: req.body.submission_date,
			user_id: req.body.user_id
		}

		await Impact.findOneAndUpdate({_id: id}, updateObj, function (err, result) {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}

	async delete(req, res) {
		const id = req.body.id;

		if(!id) res.status(400).send({message: 'user id not supplied.'});

		await Impact.deleteOne({_id: id}, (err, result) => {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}
}

export default new ImpactController();