import express from 'express';
import profileController from '../controllers/ProfileController';
import nominateController from '../controllers/NominateController';
import impactController from '../controllers/ImpactController';

const router = express.Router();

const API_ROUTE = '/api/v1/';

router.get('/', (req, res) => {
	return res.status(200).send({
		message: 'Welcome, you made it. So glad to see you!'
	});
});

// Profile routes
router.get(API_ROUTE + 'profiles/', profileController.getAllProfiles); // ToDo: Requires auth - lock behind wall
router.get(API_ROUTE + 'profiles/:id', profileController.getProfileById);
router.post(API_ROUTE + 'profiles/', profileController.createProfile);
router.put(API_ROUTE + 'profiles/', profileController.updateProfile);
router.delete(API_ROUTE + 'profiles/', profileController.deleteProfile);

// Nomination routes
router.get(API_ROUTE + 'nominate/', nominateController.getAllNominations);
router.get(API_ROUTE + 'nominate/:id', nominateController.getNominationById);
router.post(API_ROUTE + 'nominate/', nominateController.createNomination);
router.delete(API_ROUTE + 'nominate/', nominateController.deleteNomination);

// Impact routes
router.get(API_ROUTE + 'impact/', impactController.getAll);
router.get(API_ROUTE + 'impact/:id', impactController.getOne);
router.post(API_ROUTE + 'impact/', impactController.create);
router.put(API_ROUTE + 'impact/', impactController.update);
router.delete(API_ROUTE + 'impact/', impactController.delete);

export default router;