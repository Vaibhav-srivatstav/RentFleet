import express from "express";
import { createBooking, deleteBooking, getBookings, getMyBookings, updateBooking, updateBookingStatus } from "../controllers/bookingcontroller.js";
import { uploads } from "../middleware/uploads.js";
import authMiddleware from "../middleware/auth.js";

const bookingRouter = express.Router();

bookingRouter.post("/", authMiddleware, uploads.single('carImage'), createBooking);
bookingRouter.get("/", getBookings);

bookingRouter.get("/mybooking", authMiddleware, getMyBookings);
bookingRouter.put("/:id", uploads.single('carImage'), updateBooking);
bookingRouter.patch("/:id/status", updateBookingStatus);
bookingRouter.delete("/:id", deleteBooking);

export default bookingRouter;