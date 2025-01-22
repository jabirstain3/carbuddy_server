import { CatchAsync } from "../../utils/CatchAsync";
import { UserServices } from "./User.service";

const registerUser = CatchAsync ( async ( req, res ) => {
    const result = await UserServices.registerUserToDb(req.body);

    res.status(200).json({
        success: true,
        message: 'user registered  successfully!',
        data: result,
    });
});


const getAllUser = CatchAsync ( async ( req, res ) => {
    const result = await UserServices.getAllUserFromDb();

    res.status(200).json({
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});



export const userControlers = {
    registerUser,
    getAllUser,
};