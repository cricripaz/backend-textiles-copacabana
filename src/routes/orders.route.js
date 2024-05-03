import {Router} from "express";


import {getOrders,createOrder} from "../controllers/orders.controller.js"



const ordersRoute = Router();



ordersRoute.get('/',getOrders);
ordersRoute.post('/create',createOrder)

export default ordersRoute;