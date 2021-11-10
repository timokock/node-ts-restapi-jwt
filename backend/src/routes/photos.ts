import { Router } from 'express';
import { getPhotos, createPhoto, getPhoto, deletePhoto } from '../controllers/photo.controller'
import multer from '../libs/multer'
import { TokenValidation } from "../libs/verifyToken";


const router: Router = Router();

router.get('/photos', TokenValidation, getPhotos);
router.get('/photos/:id', TokenValidation, getPhoto);

router.post('/photos', multer.single('image'), TokenValidation, createPhoto);

router.delete('/photos/:id', TokenValidation, deletePhoto);

export default router;