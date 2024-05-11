import {Router} from "express";


import {getOrders,createOrder,deleteOrder} from "../controllers/orders.controller.js"



const ordersRoute = Router();



ordersRoute.get('/',getOrders);
ordersRoute.post('/create',createOrder);
ordersRoute.delete('/delete/:id',deleteOrder)

export default ordersRoute;