import { Router } from 'express';
import { register, login, profile } from '../controllers/auth.controller'
import { TokenValidation } from "../libs/verifyToken";

const router: Router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/profile', TokenValidation, profile);


export default router;