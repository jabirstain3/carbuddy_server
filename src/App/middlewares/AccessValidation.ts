import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../utils/CatchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { UserModule } from "../modules/users/User.model";
import { AdminModule } from "../modules/admin/Admin.model";

export const AccessValidation = () => {
    return CatchAsync( async (req: Request, res: Response, next: NextFunction ) => {
        const authHeader  = req.headers.authorization;
        
        if( !authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error("You are not authorized to access this route");
        }
        
        const accessToken = authHeader.split(' ')[1];

        let verifiedToken: JwtPayload;
        try {
            verifiedToken = jwt.verify(accessToken, config.jwt_access_token) as JwtPayload;
        } 
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        catch (error) {
            throw new Error("Invalid token");
        }

        const { email, role } = verifiedToken;

        if( role === "User") {
            const { user_id:id } = req.params;

            const user = await UserModule.findOne({ _id: id });
    
            if( !user ){
                throw new Error("User not found");
            }
    
            if( user.status === "Blocked" ){
                throw new Error("User is Blocked");
            }

            if( email !== user.email || role !== user.role ){
                throw new Error("You are not authorized to access this route");
            }
        }
        else {
            const { admin_id:id } = req.params;
            const admin = await AdminModule.findOne({ _id: id });
    
            if( !admin ){
                throw new Error("Admin not found");
            }
    
            if( admin.status === "Blocked"){
                throw new Error("Admin is Blocked");
            }

            if( email !== admin.email || role !== admin.role ){
                throw new Error("You are not authorized to access this route");
            }
        }
        next();
    });
} 