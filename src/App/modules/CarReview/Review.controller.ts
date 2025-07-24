import CatchAsync from "../../utils/CatchAsync";
import { ReviewServices, } from "./Review.service";
import responseDelivery from "../../utils/responseDelevery";
import status from "http-status";

// add review to a care
const addReview = CatchAsync ( async ( req, res ) => {
    const result = await ReviewServices.addReviewToDb(req.body);

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'Review registered  successfully!',
        data: result,
    });
});


const getAllReviews = CatchAsync ( async ( req, res ) => {
    const result = await ReviewServices.getAllReviewsFromDb();

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

// // single Cars review
const getReviewsOfCar = CatchAsync ( async ( req, res ) => {
    const { id } = req.params
    const result = await ReviewServices.getReviewsByCaridFromDb(id);

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

const updateReview = CatchAsync ( async ( req, res ) => {
    const { id } = req.params
    const result = await ReviewServices.updateReview(id);

    responseDelivery(res, {
        statusCode: status.OK,
        success: true,
        message: 'Users Retrive successfully!',
        data: result,
    });
});

const deleteReview = CatchAsync ( async ( req, res ) => {
    const { id } = req.params
    const result = await ReviewServices.deleteReview(id);

    responseDelivery(res, {
        statusCode: status.OK,
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