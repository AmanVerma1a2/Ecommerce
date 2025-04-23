import express from 'express'
import authUser from '../middleware/authUser.js'
import {placeOrder,placeOrderRazorpay,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'


const orderRouter= express.Router()


//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

//payment feature

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//user feature

orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter