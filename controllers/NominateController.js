import Nomination from '../models/Nomination';

class NominateController {
	name = "nomination"

	async getAllNominations(req, res) {
		await Nomination.find({}, (err, result) => {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}

	async getNominationById(req, res) {
		const id = req.params.id;

		if(!id) res.status(500).send({message: "invalid id supplied"});

		await Nomination.findOne({_id: id}, (err, result) => {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}

	async createNomination(req, res) {
		const nom = new Nomination({
			reason: req.body.reason,
			nominee: req.body.nominee,
			nominated_by: req.body.by,
			nomination_month: req.body.month,
			submission_date: new Date(),
			is_editted: false
		});
		
		await nom.save((err, result) => {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		})
	}

	async updateNomination(req, res) {
		const id = req.body.id;

		if (!id)
			res.status(500).send('provided id was null.');

		// ToDo: Only edit the attributes that have been changed.
		const updateObj = {
			reason: req.body.reason,
			nominee: req.body.nominee,
			nominated_by: req.body.by,
			nomination_month: req.body.month,
			submission_date: new Date(), // ToDo: Don't reset the date when the submission is updated.
			is_editted: true
		}

		await Profile.findOneAndUpdate({_id: id}, updateObj, function (err, result) {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}

	async deleteNomination(req, res) {
		const id = req.body.id;

		if (!id) return res.status(400).send({message: "id doesn't exist"});

		await Nomination.deleteOne({_id: id}, (err, result) => {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}
}

export default new NominateController();