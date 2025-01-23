import { CatchAsync } from "../../utils/CatchAsync";
import { ReviewServices, } from "./Review.service";

// add review to a care
const addReview = CatchAsync ( async ( req, res ) => {
    const result = await ReviewServices.addReviewToDb(req.body);

    res.status(200).json({
        success: true,
        message: 'Review registered  successfully!',
        data: result,
    });
});


const getAllReviews = CatchAsync ( async ( req, res ) => {
    const result = await ReviewServices.getAllReviewsFromDb();

    res.status(200).json({
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

// // single Cars review
const getReviewsOfCar = CatchAsync ( async ( req, res ) => {
    const { id } = req.params
    const result = await ReviewServices.getReviewsByCaridFromDb(id);

    res.status(200).json({
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

const updateReview = CatchAsync ( async ( req, res ) => {
    const { id } = req.params
    const result = await ReviewServices.updateReview(id);

    res.status(200).json({
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

const deleteReview = CatchAsync ( async ( req, res ) => {
    const { id } = req.params
    const result = await ReviewServices.deleteReview(id);

    res.status(200).json({
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});



export const ReviewControlers = {
    addReview,
    getAllReviews,
    getReviewsOfCar,
    updateReview,
    deleteReview
};