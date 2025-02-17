import { Request, Response } from 'express';
import { validatePassword } from '../service/user.service';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await validatePassword({email, password});
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};