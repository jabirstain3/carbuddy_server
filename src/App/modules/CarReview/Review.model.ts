import { model, Schema } from "mongoose";
import { TReview, TReviewer } from "./Review.interface";

const ReviewerSchema = new Schema<TReviewer>  ({
    userEmail: {
        type: String,
        required: [true, "User email is required"],
    },
    image: {
        type: String,
        required: [true, "Image url is required"],
    },
    city:{
        type: String,
        required: [true, "City is required"],
    },
})

const ReviewSchema = new Schema<TReview> ({
    carId: {
        type: String,
        required: [true, "Care id is required"],
    },
    rate: {
        type: Number,
        required: [true, "Rating is required"],
    },
    comment: {
        type: String,
        required: [true, "Comment is required"],
    },
    revirwer: {
        type: ReviewerSchema,
        required: [true, "Rewiewers info is required"],
    },
})

export const ReviewModule = model<TReview>('reviews', ReviewSchema); 





