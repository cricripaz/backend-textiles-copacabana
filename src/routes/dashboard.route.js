import { Router} from "express";


import {getOrdersByYear,getOrdersByCity,getOrderByDateRange} from "../controllers/dashboard.controller.js";


const dashboardRoute = Router();


dashboardRoute.get("/orders-by-year/:year",getOrdersByYear);
dashboardRoute.get("/orders-by-city",getOrdersByCity);
dashboardRoute.get("/orders-by-date-range",getOrderByDateRange);


export default dashboardRoute;