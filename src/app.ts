import express, { Application, Request, Response }  from "express";
import cors from 'cors';
import globalErrorHandler from "./App/middlewares/globalErrorHandler";
import notFound from "./App/middlewares/notFound";
import router from "./App/routes";

const app: Application = express()

const allOrigins = [
    'https://carbuddy.vercel.app',
    'http://localhost:5173'
]

//  Perser
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    }));

// routes
app.use('/api', router);
// app.use('/api/admin', AdminRoutes);
// app.use('/api/users', UserRoutes);
// app.use('/api/cars', CarRoutes);

app.get('/', ( req: Request, res: Response ) => {
    res.send('Server is running perfectly')
})

// Global Error Handler
app.use(globalErrorHandler);
// Not Found Handler
app.use(notFound);

export default app