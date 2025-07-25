import status from "http-status";
import config from "../../config";
import CatchAsync from "../../utils/CatchAsync";
import { UserServices } from "./User.service";
import responseDelivery from "../../utils/responseDelevery";

// register user
const registerUser = CatchAsync ( async ( req, res ) => {
    const result = await UserServices.registerUserToDb( req.body );

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'User registered  successfully!',
        data: result,
    });
});

// login user
const logInUser = CatchAsync ( async ( req, res ) => {
    const { accessToken, refreshToken } = await UserServices.logInUserToDb( req.body );
    res.cookie( "refreshToken", refreshToken, {
        httpOnly: true,
        secure: config.NODE_ENV === "production",
    } )

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'User loged in  successfully!',
        data: accessToken,
    });
});

// get single user
const getSingleUser = CatchAsync ( async ( req, res ) => {
    const { user_id } = req.params
    const result = await UserServices.getSingleUserFromDb( user_id );
    
    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'users Retrive successfully!',
        data: result,
    });
});

// get all user
const getAllUser = CatchAsync ( async ( req, res ) => {
    const result = await UserServices.getAllUserFromDb();

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'users Retrive successfully!',
        data: result,
    });
});

// update user
const updateUser = CatchAsync ( async ( req, res ) => {
    const { user_id } = req.params
    const result = await UserServices.updateUseronDb( user_id, req.body );

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'User Updated successfully!',
        data: result,
    });
});

//delete user
const deleteUser = CatchAsync ( async ( req, res ) => {
    const { user_id } = req.params
    await UserServices.deleteUserFromDb( user_id );

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'User Deleted successfully!',
    });
})

// export all user controlers
export const userControlers = {
    registerUser,
    logInUser,
    getSingleUser, 
    getAllUser,
    updateUser,
    deleteUser,
};