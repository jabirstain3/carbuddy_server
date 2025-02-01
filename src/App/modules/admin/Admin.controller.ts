import config from "../../config";
import { CatchAsync } from "../../utils/CatchAsync";
import { AdminServices } from "./Admin.service";

const registerAdmin = CatchAsync ( async ( req, res ) => {
    const result = await AdminServices.registerAdminToDb( req.body );

    res.status(200).json({
        success: true,
        message: 'Admin registered  successfully!',
        data: result,
    });
});

const logInAdmin = CatchAsync ( async ( req, res ) => {
    const { accessToken, refreshToken } = await AdminServices.logInAdminToDb( req.body );
    res.cookie( "refreshToken", refreshToken, {
        httpOnly: true,
        secure: config.NODE_ENV === "production",

    } )

    res.status(200).json({
        success: true,
        message: 'Admin loged in  successfully!',
        data: accessToken,
    });
});


const updateAdmin = CatchAsync ( async ( req, res ) => {
    const { admin_id } = req.params
    const result = await AdminServices.updateAdminonDb( admin_id, req.body );

    res.status(200).json({
        success: true,
        message: 'Admin Updated successfully!',
        data: result,
    });
});

const getAllAdmin = CatchAsync ( async ( req, res ) => {
    const result = await AdminServices.getAllAdminFromDb();

    res.status(200).json({
        success: true,
        message: 'admins Retrive successfully!',
        data: result,
    });
});



export const adminControlers = {
    registerAdmin,
    logInAdmin,
    getAllAdmin,
    updateAdmin,
};