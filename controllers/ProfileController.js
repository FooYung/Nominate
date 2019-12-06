import Profile from '../models/Profile';

class ProfileController {
	name = "profile"

	async getAllProfiles(req, res) {
		await Profile.find({}, (err, profiles) => {
			if (err) res.status(500).send(err);

			res.status(200).send(profiles);
		});
	}

	async getProfile(req, res) {
		const id = req.params.id;
		console.log(id);
		
		if (!id) {
			res.status(400).send({message: 'id was null'});
		}

		await Profile.findOne({_id: id}, (err, result) => {
			if (err) res.status(500).send(err);
			
			res.status(200).send(result);
		});
	}

	async createProfile(req, res) {
		const profile = new Profile({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			avatarSrc: req.body.avatarSrc
		});

		await profile.save((err, response) => {
			if (err) res.status(500).send(err);

			res.status(200).send(response);
		});
	}

	async updateProfile(req, res) {
		const id = req.body.id;

		if (!id)
			res.status(500).send('provided id was null.');

		const updateObj = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			avatarSrc: req.body.avatarSrc
		}

		await Profile.findOneAndUpdate({_id: id}, updateObj, function (err, result) {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}

	async deleteProfile(req, res) {
		const id = req.body.id;

		if(!id) res.status(400).send({message: 'profile not supplied.'});

		await Profile.deleteOne({_id: id}, (err, result) => {
			if (err) res.status(500).send(err);

			res.status(200).send(result);
		});
	}
}

// Added comments for change acknowledgement because git is dogshit

export default new ProfileController();