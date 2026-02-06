import express from 'express';
import { getListe, postSalutation, getListeParLangue } from '../controllers/salutations.controller.js';

const router = express.Router();

router.get('/liste', getListe);
router.get('/liste_pour_langue/:code_langue', getListeParLangue);
router.post('/', postSalutation);

export default router;