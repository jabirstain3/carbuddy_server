import { TUser } from "./User.interface";
import { UserModule } from "./User.model";

const registerUserToDb = async ( user: TUser ) => {
    const responce = await UserModule.create(user);
    return responce;
}

const getAllUserFromDb = async () => {
    const responce = await UserModule.find();
    return responce;
}


export const UserServices = {
    registerUserToDb,
    getAllUserFromDb,
}