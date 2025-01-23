import { TCar } from "./Car.interface";
import { CarModule } from "./Car.model";

const registerCarToDb = async ( car: TCar ) => {
    const responce = await CarModule.create(car);
    return responce;
}

const getAllCarsFromDb = async () => {
    const responce = await CarModule.find();
    return responce;
}

const getCarByIdFromDb = async (id: string) => {
    const responce = await CarModule.findById({_id: id});
    return responce;
}

export const CarServices = {
    registerCarToDb,
    getAllCarsFromDb,
    getCarByIdFromDb,
}