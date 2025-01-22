import express, { Application, Request, Response }  from "express";
import cors from 'cors';
import { UserRoutes } from "./App/modules/users/User.route";

const app: Application = express()

//  Perser
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', UserRoutes);

app.get('/', ( req: Request, res: Response ) => {
    res.send('Product server is running perfectly')
})

export default app