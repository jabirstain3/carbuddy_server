import { Router } from "express";
import { userControlers } from "./User.controller";
import { AdminValidation } from "../../middlewares/AdminAccessVatidator";

const router = Router();

router.post('/register', userControlers.registerUser);
router.post('/login', userControlers.logInUser);
router.put('/:user_id', userControlers.updateUser);
router.get('/', AdminValidation('Admin', 'SuperAdmin') , userControlers.getAllUser);

export const UserRoutes = router;