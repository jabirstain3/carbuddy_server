import express, { Application, Request, Response }  from "express";
import cors from 'cors';
import { UserRoutes } from "./App/modules/users/User.route";
import { CarRoutes } from "./App/modules/cars/Car.route";
import { AdminRoutes } from "./App/modules/admin/Admin.route";

const app: Application = express()

//  Perser
app.use(express.json());
app.use(cors());

// routes
app.use('/api/admin', AdminRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/cars', CarRoutes);

app.get('/', ( req: Request, res: Response ) => {
    res.send('Server is running perfectly')
})

export default app