class BaseController {
	constructor (name, model) {
		this.name = name;
		this.model = model;
	}

	async getOneAsync(req, res) {
		const id = req.params.id;
		
		if (!id) {
			res.status(500).send({message: 'id was null'});
		}

		await this.model.findOne({_id: id}, (err, result) => {
			if (err) res.status(500).send(err);
			
			res.status(200).send(result);
		});
	}

	async getAllAsync(req, res) {
		await this.model.find({}, (err, result) => {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}

	async createAsync(req, res) {
		const model = new this.model({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			avatarSrc: req.body.avatarSrc
		});

		await model.save((err, result) => {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}

	async deleteAsync(req, res) {

	}

	async updateAsync(req, res) {

	}
}

export default BaseController;