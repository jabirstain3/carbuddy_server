import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../utils/CatchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { UserModule } from "../modules/users/User.model";
import { AdminModule } from "../modules/admin/Admin.model";

export const AccessValidation = () => {
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

        if( role === "User") {
            const {user_id:id} = req.params;

            const user = await UserModule.findOne({_id: id});
    
            if(!user){
                throw new Error("User not found");
            }
    
            if(user.status === "Blocked"){
                throw new Error("User is Blocked");
            }

            if( email !== user.email || role !== user.role ){
                throw new Error("You are not authorized to access this route");
            }
        }
        else {
            const {admin_id:id} = req.params;
            const admin = await AdminModule.findOne({_id: id});
    
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