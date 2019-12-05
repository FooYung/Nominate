import express from 'express';
import profileController from '../controllers/ProfileController';

const router = express.Router();

const API_ROUTE = '/api/v1/';

router.get('/', (req, res) => {
	return res.status(200).send({
		message: 'Welcome, you made it. So glad to see you!'
	});
});

// Profile routes
router.get(API_ROUTE + 'profiles/', profileController.getAllProfiles);
router.post(API_ROUTE + 'profile/create', profileController.createProfile);
router.post(API_ROUTE + 'profile/update', profileController.updateProfile);

export default router;