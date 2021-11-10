import { Router } from 'express';
import { index } from '../controllers/index.controller'
import { TokenValidation } from "../libs/verifyToken";

const router: Router = Router();

router.get('/', index);

export default router;