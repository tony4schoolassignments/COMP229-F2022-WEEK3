import { Router } from 'express';
import { byeWorld, helloWorld } from '../controllers/index.controller.server.js';

const router = Router();

router.get('/hello', helloWorld);
router.get('/bye', byeWorld);

export default router;