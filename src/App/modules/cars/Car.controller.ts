import  CatchAsync from "../../utils/CatchAsync";
import responseDelivery from "../../utils/responseDelevery";
import status from "http-status";
import { CarServices, } from "./Car.service";

const registerCar = CatchAsync( async ( req, res ) => {
    const result = await CarServices.registerCarToDb(req.body);

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'Car registered  successfully!',
        data: result,
    });
});


const getAllCar = CatchAsync ( async ( req, res ) => {
    const result = await CarServices.getAllCarsFromDb();

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

const getCarById = CatchAsync ( async ( req, res ) => {
    const { id } = req.params
    const result = await CarServices.getCarByIdFromDb(id);

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

export const carControlers = {
    registerCar,
    getAllCar,
    getCarById,
};