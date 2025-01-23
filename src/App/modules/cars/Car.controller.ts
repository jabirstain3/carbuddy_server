import { CatchAsync } from "../../utils/CatchAsync";
import { CarServices, } from "./Car.service";

const registerCar = CatchAsync ( async ( req, res ) => {
    const result = await CarServices.registerCarToDb(req.body);

    res.status(200).json({
        success: true,
        message: 'Car registered  successfully!',
        data: result,
    });
});


const getAllCar = CatchAsync ( async ( req, res ) => {
    const result = await CarServices.getAllCarsFromDb();

    res.status(200).json({
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

const getCarById = CatchAsync ( async ( req, res ) => {
    const { id } = req.params
    const result = await CarServices.getCarByIdFromDb(id);

    res.status(200).json({
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