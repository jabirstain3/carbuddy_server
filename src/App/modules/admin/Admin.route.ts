import { Router } from "express";
import { adminControlers } from "./Admin.controller";
import { AdminValidation } from "../../middlewares/AdminAccessValidator";
import { AccessValidation } from "../../middlewares/AccessValidation";

const router = Router();

router.post('/create_admin', adminControlers.registerAdmin);
router.post('/admin_login', adminControlers.logInAdmin);
router.put('/:admin_id', AdminValidation( 'Admin', 'SuperAdmin', ), AccessValidation() , adminControlers.updateAdmin);
router.get('/', AdminValidation( 'Admin', 'SuperAdmin' ) , adminControlers.getAllAdmin);

export const AdminRoutes = router;