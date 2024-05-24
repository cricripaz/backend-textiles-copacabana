import {Router} from "express";


import {getOrders,createOrder,deleteOrder,editOrder} from "../controllers/orders.controller.js"



const ordersRoute = Router();



ordersRoute.get('/',getOrders);
ordersRoute.post('/create',createOrder);
ordersRoute.delete('/delete/:id',deleteOrder);
ordersRoute.put('/edit/:id',editOrder)

export default ordersRoute;