import { Router } from "express";
import { adminControlers } from "./Admin.controller";
import { AccessValidation } from "../../middlewares/AccessValidation";

const router = Router();

router.post('/create_admin', adminControlers.registerAdmin);
router.post('/admin_login', adminControlers.logInAdmin);
router.put('/:admin_id', AccessValidation( 'Admin', 'SuperAdmin', ), adminControlers.updateAdmin);
router.get('/', AccessValidation( 'Admin', 'SuperAdmin' ) , adminControlers.getAllAdmin);

export const AdminRoutes = router;