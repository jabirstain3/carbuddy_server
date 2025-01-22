import { Router } from "express";
import { userControlers } from "./User.controller";

const router = Router();

router.post('/create_user', userControlers.registerUser);
router.get('/', userControlers.getAllUser);

export const UserRoutes = router;