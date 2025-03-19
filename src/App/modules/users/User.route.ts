import { Router } from "express";
import { userControlers } from "./User.controller";
import { AccessValidation } from "../../middlewares/AccessValidation";

const router = Router();

router.post('/register', userControlers.registerUser); // 1
router.post('/login', userControlers.logInUser); 
router.get('/:user_id', AccessValidation('Admin', 'SuperAdmin', 'User'), userControlers.getSingleUser); // 2
router.put('/:user_id', AccessValidation('Admin', 'SuperAdmin', 'User') , userControlers.updateUser); // 3
router.delete('/:user_id', AccessValidation('Admin', 'SuperAdmin', 'User'), userControlers.deleteUser); // 4

router.get('/', AccessValidation('Admin', 'SuperAdmin', ) , userControlers.getAllUser); //5

export const UserRoutes = router;