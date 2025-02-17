import { Request, Response } from 'express';
import logger from "../utils/logger";
import { createUser } from '../service/user.service';
import { CreateUserInput } from '../schema/user.schema';
import UserModel from '../models/user.model';


export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response){
    try{
        const user = await createUser(req.body);
        res.status(201).json(user);
    }
    catch(e:any){
        logger.error(e);
        res.status(409).send(e.message);
    }
}

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.userId;
        //   console.log(userId);

        const user = await UserModel.findById(userId).select('-password');
        if (!user) {
            res.status(404).json({ message: 'User not found' }); 
        }

        res.status(200).json({ message: 'User profile fetched successfully', user }); 
        } catch (error: any) {
        res.status(500).json({ message: 'Failed to fetch user profile', error: error.message });
    }
};


export const getUserById = async (req: Request, res: Response) => {
try {
    const userId = req.params.id.toString(); 

    console.log(userId);

    const user = await UserModel.findById(userId).select('-password'); 
    if (!user) {
    res.status(404).json({ message: 'User not found' });

    }
    else
    res.status(200).json({ message: 'User details fetched successfully', user });
} catch (error: any) {
    console.error('Error fetching user details:', error.message);
    res.status(500).json({ message: 'Failed to fetch user details', error: error.message });
}
};