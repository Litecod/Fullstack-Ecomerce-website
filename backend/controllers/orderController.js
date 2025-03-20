import { response } from "express";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using COD method

const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, adress} = req.body;

        const orderData = {
            userId,
            items,
            adress,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()

        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData: {}})

        res.json({success:true,message: "Order Placed"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// placing orders using stripe method
const placeOrderStripe = async (req, res) => {

}

// placing orders using 
const placeOrderRazorpay = async (req, res) => {

}

//All orders data for the admin panel
const allOrders = async (req, res) => {

}

// User Order Data For Frontend
const UserOrders = async (req, res) => {

}

//update order Status 
const updateStatus = async (req, res) => {

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, UserOrders, updateStatus}