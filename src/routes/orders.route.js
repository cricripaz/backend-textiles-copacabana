import {Router} from "express";


import {getOrders} from "../controllers/orders.controller.js"



const ordersRoute = Router();



ordersRoute.get('/',getOrders);

export default ordersRoute;