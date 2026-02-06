import express from 'express';
import { getListe, getHasard, postSalutation } from '../controllers/salutations.controller.js';

const router = express.Router();

router.get('/liste', getListe);
router.get('/hasard', getHasard);
router.post('/', postSalutation);

export default router;