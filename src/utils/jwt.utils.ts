import jwt from "jsonwebtoken";
import config from 'config';

const JWT_SECRET: jwt.Secret = config.get("JWT_SECRET");
const JWT_EXPIRES_IN: number = parseInt(config.get("JWT_EXPIRES_IN"));

export const generateToken = (payload: object): string => {
    // const options: jwt.SignOptions = { expiresIn: JWT_EXPIRES_IN };
    return jwt.sign(payload, JWT_SECRET);
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};