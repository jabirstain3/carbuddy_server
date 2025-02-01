import { model, Schema } from "mongoose";
import { TFullName, TUser } from "./User.interface";
import bcryptjs from 'bcryptjs';
import config from "../../config";

const fullNameSchema = new Schema<TFullName>({
    firstName: String,
    lastName: String,
}) 

const userSchema = new Schema<TUser> ({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        default: 'User',
    },
    status: {
        type: String,
        required: [true, "Status is required"],
        enum: ['Active', 'Blocked'],
        default: 'Active',
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    number: {
        type: String,
        required: [true, "Phone number is required"],
    },
    fullname: {
        type: fullNameSchema
    }
})

userSchema.pre("save", async function ( next ) {
    this.password = await bcryptjs.hash(this.password, Number(config.salt_round))

    next();
})

userSchema.post("save", async function ( docs, next ) {
    docs.password = '***';

    next();
})

export const UserModule = model<TUser>('Users', userSchema) 





