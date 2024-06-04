import {Router} from "express";


import {getOrders,createOrder,deleteOrder,editOrder,startOrders,finishOrder} from "../controllers/orders.controller.js"




const ordersRoute = Router();



ordersRoute.get('/',getOrders);
ordersRoute.post('/create',createOrder);
ordersRoute.delete('/delete/:id',deleteOrder);
ordersRoute.put('/edit/:id',editOrder)
ordersRoute.post('/start/:id',startOrders);
ordersRoute.post('/finish/:id',finishOrder)

export default ordersRoute;