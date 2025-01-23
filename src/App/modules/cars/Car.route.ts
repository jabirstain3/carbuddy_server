import { Router } from "express";
import { carControlers } from "./Car.controller";
import { ReviewControlers } from "../CarReview/Review.controller";

const router = Router();


router.post('/registerCar', carControlers.registerCar);
router.get('/', carControlers.getAllCar);
router.get('/:id', carControlers.getCarById);

router.post('/:id/review', ReviewControlers.addReview);
router.get('/:id/review', ReviewControlers.getReviewsOfCar);


export const CarRoutes = router;