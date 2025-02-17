import { Express, Request, Response } from "express";
import { createUserHandler, getUserById, getUserProfile } from "./controller/user.controller";
import validate from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
import { authenticate } from "./middleware/authMiddleware";
import { login } from "./controller/auth.controller";

function routes(app: Express){
    app.get('/profile', authenticate, getUserProfile);
    app.post('/api/users', validate(createUserSchema), createUserHandler);
    app.post('/login', login);
    app.get('/api/user:id', authenticate, getUserById);
};

export default routes;