import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../utils/CatchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { UserModule } from "../modules/users/User.model";
import { AdminModule } from "../modules/admin/Admin.model";

export const AdminValidation = ( ...roles: string[] ) =>{
    return CatchAsync( async (req: Request, res: Response, next: NextFunction ) => {
        const accessToken  = req.headers.authorization;
        if( !accessToken ) {
            throw new Error("You are not authorized to access this route (Token)");
        }

        const varifiedToken =jwt.verify(
            accessToken as string,
            config.jwt_access_token as string
        );

        const {  role, email, } = varifiedToken as JwtPayload;

        if( role === "User") {
            const user = await UserModule.findOne({ email });
    
            if(!user){
                throw new Error("User not found");
            }
    
            if(user.status === "Blocked"){
                throw new Error("User is Blocked");
            }
        }
        else {
            const admin = await AdminModule.findOne({ email });
    
            if( !admin ){
                throw new Error("Admin not found");
            }
    
            if( admin.status === "Blocked"){
                throw new Error("Admin is Blocked");
            }
        }

        if(!roles.includes(role)){
            throw new Error("You are not authorized to access this route (role)");
        }

        next()
    });
};