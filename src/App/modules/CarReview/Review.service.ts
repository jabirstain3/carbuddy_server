import { TReview } from "./Review.interface";
import { ReviewModule } from "./Review.model";

// add review
const addReviewToDb = async ( review: TReview ) => {
    const responce = await ReviewModule.create(review);
    return responce;
}
// all review
const getAllReviewsFromDb = async () => {
    const responce = await ReviewModule.find();
    return responce;
}
// single review
const getReviewByIdFromDb = async ( id: string ) => {
    const responce = await ReviewModule.findById(id);
    return responce;
}
// single Cars review
const getReviewsByCaridFromDb = async ( id: string ) => {
    const responce = await ReviewModule.find({carId: id});
    return responce;
}
// update review
const updateReview = async ( id: string ) => {
    const responce = await ReviewModule.findById(id);
    return responce;
}

const deleteReview = async ( id: string ) => {
    const responce = await ReviewModule.deleteOne({_id:id});
    return responce;
}

export const ReviewServices = {
    addReviewToDb,
    getAllReviewsFromDb,
    getReviewByIdFromDb,
    getReviewsByCaridFromDb,
    updateReview,
    deleteReview,
}