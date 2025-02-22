import config from "../../config";
import { isComnfirmed } from "../../utils/Confirmation";
import { TUser } from "./User.interface";
import { UserModule } from "./User.model";
import jwt from 'jsonwebtoken';

const registerUserToDb = async ( user: TUser ) => {
    // user exixtence
    if ( await UserModule.findOne({ email: user.email})) {
        throw new Error("This e-mail is linked to an existing user");
    }

    const responce = await UserModule.create( user );
    return responce;
}

const logInUserToDb = async ( user: TUser ) => {
    const registeredUser = await UserModule.findOne({ email: user.email})

    // user existence
    if ( ! registeredUser ) {
        throw new Error("User is not registered");
    }

    if ( registeredUser.role != "User") {
        throw new Error("User is not registered");
    }

    // user active status 
    if(user.status === "Blocked") {
        throw new Error("User is blocked");
    }

    // match passwords
    const registered = isComnfirmed( user.password, registeredUser.password );

    // Acecess
    if (! registered) {
        throw new Error("password dosent matched");
    }

    //jwt
    const jwtpayload = {
        userName: registeredUser.username,
        email: registeredUser.email,
        role: registeredUser.role,
        id: registeredUser._id,

    }

    const accessToken = jwt.sign( jwtpayload, config.jwt_access_token as string, { expiresIn: config.jwt_access_expires as string })

    const refreshToken = jwt.sign( jwtpayload, config.jwt_refresh_token as string, { expiresIn: config.jwt_refresh_expires as string })

    return { accessToken, refreshToken, }
}

const getSingleUserFromDb = async ( id: string) => {
    const responce = await UserModule.findOne({ _id: id});
    return responce;
}

const getAllUserFromDb = async () => {
    const responce = await UserModule.find();
    return responce;
}

const updateUseronDb = async ( id: string, user: TUser ) => {
    const responce = await UserModule.findByIdAndUpdate( id, user );
    return responce;
}

export const UserServices = {
    registerUserToDb,
    logInUserToDb,
    getSingleUserFromDb,
    getAllUserFromDb,
    updateUseronDb,
}