import { Router} from "express";


import {getOrdersByYear,getOrdersByCity,getOrderByDateRange,getOrdersByState,getInventoryTop10} from "../controllers/dashboard.controller.js";


const dashboardRoute = Router();


dashboardRoute.get("/orders-by-year/:year",getOrdersByYear);
dashboardRoute.get("/orders-by-city",getOrdersByCity);
dashboardRoute.get("/orders-by-date-range",getOrderByDateRange);
dashboardRoute.get("/orders-by-status",getOrdersByState);
dashboardRoute.get("/inventory-dyes-top10",getInventoryTop10)



export default dashboardRoute;