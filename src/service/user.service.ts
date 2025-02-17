import { } from 'mongoose';
import UserModel, { UserDocument, UserInput } from '../models/user.model';
import { generateToken } from '../utils/jwt.utils';

interface LoginResponse {
  user: UserDocument['_id']; 
  token: string;
}

export async function createUser(input: UserInput): Promise<UserDocument> {
  try{
      return await UserModel.create(input)
  }catch(e:any){
      throw new Error(e);
  }
}

export async function validatePassword({
    email,
    password
}: {
    email: string;
    password: string;
}): Promise<LoginResponse> {
    const user = await UserModel.findOne({ email });
  
    if (!user) {
      console.log('User not found in database');
      throw new Error('User not found');
    }
  
    const isValid = await user.comparePassword(password);
  
    if (!isValid) throw new Error('User not found');

    const token = generateToken({ userId: user._id, email: user.email });
  
    return {user, token};
}