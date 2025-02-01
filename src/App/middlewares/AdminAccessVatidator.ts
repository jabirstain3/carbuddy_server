import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../utils/CatchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { UserModule } from "../modules/users/User.model";

export const AdminValidation = ( ...roles: string[] ) =>{
    return CatchAsync( async (req: Request, res: Response, next: NextFunction ) => {
        const accessToken  = req.headers.authorization;

        if( !accessToken ) {
            throw new Error("You are not authorized to access this route");
        }

        const varifiedToken =jwt.verify(
            accessToken as string,
            config.jwt_access_token as string
        );

        const { email, role } = varifiedToken as JwtPayload;

        const user = await UserModule.findOne({ email });

        if(!user){
            throw new Error("User not found");
        }

        if(user.status === "Blocked"){
            throw new Error("User is Blocked");
        }

        if(!roles.includes(role)){
            throw new Error("You are not authorized to access this route");
        }

        next()
    });
};