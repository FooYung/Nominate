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
		return res.status(400).send({
			message: 'no current implementation'
		});
	}

	async createProfile(req, res) {
		const profile = new Profile({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			avatarSrc: req.body.avatar
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

		let profile = Profile.findOne({_id: req.body.id}, function (err, result) {
			if (err) res.status(500).send(err);

			//profile.firstname = req.body.firstname;
			//profile.lastname = req.body.lastname;
			//profile.avatarSrc = req.body.avatarSrc;

			console.log(result);
		});

		console.log(profile);

		
	}

	deleteProfile(req, res) {
		return res.status(400).send({
			message: 'no current implementation'
		});
	}
}

export default new ProfileController();