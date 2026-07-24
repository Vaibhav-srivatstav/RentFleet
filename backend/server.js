import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import path from 'path'
import helmet from 'helmet'
import { fileURLToPath } from 'url'

import connectDB from './config/db.js';
import userRouter from './routes/userRouters.js';
import carRouter from './routes/carRoutes.js'
import bookingRouter from './routes/bookingRoutes.js'
import paymentRouter from './routes/paymentRouter.js';

dotenv.config(); 

const app = express();
const Port = process.env.PORT;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//database
connectDB();

//MIDLEFRAMWORK
app.use(cors({
    origin:[
        process.env.FRONTEND_URL,
        process.env.ADMIN_URL
    ],
    credentials: true
}));
app.use(
    helmet({
        crossOriginResourcePolicy:{ policy: 'cross-origin'},
    })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//statics
app.use(
    '/uploads',(req, res, next )=>{
        res.setHeader('Access-Control-Allow-Origin', '*')
        next(); 
    },
    express.static(path.join(process.cwd() ,'uploads',))
)

//ROUTES
app.use('/api/auth', userRouter);
app.use('/api/vehicle', carRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/payments', paymentRouter);

app.get('/api/ping', (req, res) => res.json({
    ok: true,
    time: Date.now()
}))

//LISTEN
app.get('/', (req, res) => {
    res.send('API WORKING')
    
})

app.listen(Port, () => {
    console.log(`server started on http://localhost:${Port}`)
})