import { Request, Response } from 'express';
import User, { IUser } from "../models/User";
import jwt from 'jsonwebtoken';

/* Register a new user */
export const register = async (req: Request, res: Response) => {
    //Saving new user
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = await user.encryptPass(user.password);
    const savedUser = await user.save();

    //Adding token
    const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'tokentest');

    //Sending response Header/Body
    res.header('auth-token', token).json({savedUser, token});
};

/* Login with existing user */
export const login = async (req: Request, res: Response) => {
    const currentUser = await User.findOne({email: req.body.email});
    
    if (!currentUser) {
        return res.status(404).json('User doesn´t exist or is wrong');
    } else {

        const isValid: boolean = await currentUser.validatePass(req.body.password);
        if (!isValid) {
            return res.status(404).json('Invalid password! Please try again.');
        } else {
            const token: string = jwt.sign({_id: currentUser._id}, process.env.TOKEN_SECRET || 'tokentest', {expiresIn: 60 * 60 * 24});
            return res.header('auth-token', token).json({currentUser, token});
        }
    }
};

/* Get user profile */
export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.userID, { password: 0 })
    if (!user) {
        return res.status(404).json('No user found');
    } else {
        return res.json(user);
    }
};