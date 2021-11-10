import { Request, Response } from 'express';
import Photo from'../models/Photo'

export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const allPhotos = await Photo.find();
    return res.json(allPhotos);
};

export async function getPhoto(req: Request, res: Response): Promise<Response> {
    const photo = await Photo.findById(req.params.id);
    return res.json(photo);
};

export async function createPhoto(req: Request, res: Response): Promise<Response> {

    const { title, description } = req.body;
    const imgPath = 'http://localhost:4000/' + req.file.path.replace(/\\/g,"/");
    
    
    const newPhoto = {
        title: title,
        description: description,
        imagePath: imgPath
    };

    const photo = new Photo(newPhoto);
    await photo.save();

    return res.json({
        message: 'Photo successfully saved',
        photo
    });
};

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const photo = await Photo.findOneAndRemove(req.params.id);
    return res.json({
        message: 'Photo deleted',
        photo
    });
};