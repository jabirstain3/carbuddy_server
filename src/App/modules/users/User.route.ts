import { Router } from "express";
import { userControlers } from "./User.controller";
import { AdminValidation } from "../../middlewares/AdminAccessValidator";
import { AccessValidation } from "../../middlewares/AccessValidation";

const router = Router();

router.post('/register', userControlers.registerUser);
router.post('/login', userControlers.logInUser);
router.get('/:user_id', AccessValidation(), userControlers.getSingleUser);
router.put('/:user_id', AccessValidation(), AccessValidation() , userControlers.updateUser);
router.get('/', AdminValidation('Admin', 'SuperAdmin') , userControlers.getAllUser);

export const UserRoutes = router;