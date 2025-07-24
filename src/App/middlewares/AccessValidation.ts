import { NextFunction, Request, Response } from "express";
import CatchAsync from "../utils/CatchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { UserModule } from "../modules/users/User.model";
import { AdminModule } from "../modules/admin/Admin.model";

export const AccessValidation = ( ...roles: string[] ) =>{
    return CatchAsync( async (req: Request, res: Response, next: NextFunction ) => {
        const authHeader  = req.headers.authorization;
        // console.log(authHeader);

        if( !authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error("You are not authorized to access this route 1");
        }

        const accessToken = authHeader.split(' ')[1];

        if (!config.jwt_access_token) {
            throw new Error("JWT configuration is missing");
        }

        let verifiedToken: JwtPayload;
        try {
            verifiedToken = jwt.verify(accessToken, config.jwt_access_token) as JwtPayload;
        } 
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        catch (error) {
            throw new Error("Invalid token");
        }

        const { role, email, } = verifiedToken;

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