import { Router } from "express";
import { carControlers } from "./Car.controller";
import { ReviewControlers } from "../CarReview/Review.controller";
import { AccessValidation } from "../../middlewares/AccessValidation";

const router = Router();


router.post('/registerCar', AccessValidation('Admin', 'SuperAdmin', 'User'), carControlers.registerCar); //  1
router.get('/', carControlers.getAllCar); // 5
router.get('/:id', carControlers.getCarById);  // 2

router.post('/:id/review', AccessValidation('Admin', 'SuperAdmin', 'User'), ReviewControlers.addReview);
router.get('/:id/review', ReviewControlers.getReviewsOfCar);


export const CarRoutes = router;