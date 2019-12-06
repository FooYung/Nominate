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
router.get(API_ROUTE + 'profiles/:id', profileController.getProfile);
router.post(API_ROUTE + 'profiles/', profileController.createProfile);
router.put(API_ROUTE + 'profiles/', profileController.updateProfile);
router.delete(API_ROUTE + 'profiles/', profileController.deleteProfile);

export default router;