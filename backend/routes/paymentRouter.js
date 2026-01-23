import express from 'express';
import { createCheckoutSession, confirmPayment } from '../controllers/paymentController.js';


const paymentRouter = express.Router();

paymentRouter.post('/create-payment-intent', createCheckoutSession);
paymentRouter.get('/confirm', confirmPayment);

export default paymentRouter;