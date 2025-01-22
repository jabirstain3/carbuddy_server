import { model, Schema } from "mongoose";
import { TUser } from "./User.interface";

const userSchema = new Schema<TUser> ({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: ['SuperAdmin', 'Admin', 'User'],
    },
    status: {
        type: String,
        required: [true, "Status is required"],
        enum: ['Active', 'Blocked'],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
})

export const UserModule = model<TUser>('users', userSchema) 





