import { Request, Response } from 'express';


export function index(req: Request, res: Response): Response {
    return res.send('Hello from Index');
};


