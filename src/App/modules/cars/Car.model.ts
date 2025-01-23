import { model, Schema } from "mongoose";
import { TArea, TCar, } from "./Car.interface";

const AreaSchema = new Schema<TArea> ({
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    city: {
        type: String,
        required: [true, "Cityw is required"],
    },
})

const CarSchema = new Schema<TCar> ({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    doors: {
        type: Number,
        required: [true, "Doors is required"],
    },
    catagory: {
        type: String,
        required: [true, "Catagory is required"],
    },
    passengers: {
        type: Number,
        required: [true, "Passenger is required"],
    },
    transmission: {
        type: String,
        required: [true, "Transmission is required"],
    },
    area: {
        type: AreaSchema,
        required: [true, "Address area is required"],
    },
    luggage: {
        type: Number,
        required: [true, "Luggage is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    model:  {
        type: String,
        required: [true, "Model is required"],
    },
    drive:  {
        type: String,
        required: [true, "Drive is required"],
    },
    engine:  {
        type: String,
        required: [true, "Engine Type is required"],
    },
    power:  {
        type: String,
        required: [true, "Power of Engine is required"],
    },
    fuel: {
        type: String,
        required: [true, "Fuel Type is required"],
    },
    mileage:  {
        type: String,
        required: [true, "Password is required"],
    },
    features: {
        type: [String],
        required: [true, "Basic feature is required"],
    },
    addfeatures: {
        type: [String],
        required: [true, "Additional feature is required"],
    },
    isDeleted: {
        type: Boolean
    }
})

export const CarModule = model<TCar>('Cars', CarSchema) 





