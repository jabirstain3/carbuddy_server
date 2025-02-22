import config from "../../config";
import { CatchAsync } from "../../utils/CatchAsync";
import { UserServices } from "./User.service";

const registerUser = CatchAsync ( async ( req, res ) => {
    const result = await UserServices.registerUserToDb( req.body );

    res.status(200).json({
        success: true,
        message: 'User registered  successfully!',
        data: result,
    });
});

const logInUser = CatchAsync ( async ( req, res ) => {
    const { accessToken, refreshToken } = await UserServices.logInUserToDb( req.body );
    res.cookie( "refreshToken", refreshToken, {
        httpOnly: true,
        secure: config.NODE_ENV === "production",

    } )

    res.status(200).json({
        success: true,
        message: 'User loged in  successfully!',
        data: accessToken,
    });
});

const getSingleUser = CatchAsync ( async ( req, res ) => {
    const { user_id } = req.params
    const result = await UserServices.getSingleUserFromDb( user_id );
    res.status(200).json({
        success: true,
        message: 'users Retrive successfully!',
        data: result,
    });
});

const getAllUser = CatchAsync ( async ( req, res ) => {
    const result = await UserServices.getAllUserFromDb();

    res.status(200).json({
        success: true,
        message: 'users Retrive successfully!',
        data: result,
    });
});

const updateUser = CatchAsync ( async ( req, res ) => {
    const { user_id } = req.params
    const result = await UserServices.updateUseronDb( user_id, req.body );

    res.status(200).json({
        success: true,
        message: 'User Updated successfully!',
        data: result,
    });
});

export const userControlers = {
    registerUser,
    logInUser,
    getSingleUser, 
    getAllUser,
    updateUser,
};