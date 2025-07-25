import { Router } from 'express';  
import { AdminRoutes } from '../modules/admin/Admin.route';
import { UserRoutes } from '../modules/users/User.route';
import { CarRoutes } from '../modules/cars/Car.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/admin',
        route: AdminRoutes,
    },
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/cars',
        route: CarRoutes,
    },
];

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;