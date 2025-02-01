import config from "../../config";
import { isComnfirmed } from "../../utils/Confirmation";
import jwt from 'jsonwebtoken';
import { TAdmin } from "./Admin.interface";
import { AdminModule } from "./Admin.model";

const registerAdminToDb = async ( admin: TAdmin ) => {
    // admin exixtence
    if ( await AdminModule.findOne({ email: admin.email}) ) {
        throw new Error("This e-mail is linked to an existing admin");
    }

    const responce = await AdminModule.create( admin );
    return responce;
}

const logInAdminToDb = async ( admin: TAdmin ) => {
    const registeredAdmin = await AdminModule.findOne({ email: admin.email})

    // admin exixtence
    if ( ! registeredAdmin ) {
        throw new Error("Admin is not registered");
    }


    // admin active status 
    if(admin.status === "Blocked") {
        throw new Error("Admin is blocked");
    }

    // match passwords
    const registered = isComnfirmed( admin.password, registeredAdmin.password );

    // Acecess
    if ( !registered ) {
        throw new Error("password dosent matched");
    }

    //jwt
    const jwtpayload = {
        email: registeredAdmin.email,
        role: registeredAdmin.role,
    }

    const accessToken = jwt.sign( jwtpayload, config.jwt_access_token as string, { expiresIn: config.jwt_access_expires as string })

    const refreshToken = jwt.sign( jwtpayload, config.jwt_refresh_token as string, { expiresIn: config.jwt_refresh_expires as string })

    return { accessToken, refreshToken, }
}

const updateAdminonDb = async ( id: string, admin: TAdmin ) => {
    const responce = await AdminModule.findByIdAndUpdate( id, admin );
    return responce;
}

const getAllAdminFromDb = async () => {
    const responce = await AdminModule.find();
    return responce;
}


export const AdminServices = {
    registerAdminToDb,
    logInAdminToDb,
    getAllAdminFromDb,
    updateAdminonDb,
}