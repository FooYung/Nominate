import express from 'express';
import ProfileController from '../controllers/ProfileController';

const router = express.Router();

const API_ROUTE = '/api/v1/';

router.get('/', (req, res) => {
	return res.status(200).send({
		message: 'Welcome, you made it. So glad to see you!'
	});
});



export default router;