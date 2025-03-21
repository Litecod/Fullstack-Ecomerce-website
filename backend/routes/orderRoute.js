import express from "express";
import {
  allOrders,
  updateStatus,
  placeOrder,
  placeOrderStripe,
  placeOrderPaystack,
  UserOrders,
  verifyStripe,
  verifyPaystack
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/paystack", authUser, placeOrderPaystack);

//User features
orderRouter.post("/userorders", authUser, UserOrders);

//Verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe)
orderRouter.post("/verifyPaystack", authUser, verifyPaystack)

export default orderRouter;

