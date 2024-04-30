import {Router} from "express";

import {fetchCustomers,createCustomer} from "../controllers/customer.controller.js"


const customerRoute = Router();



customerRoute.get('/',fetchCustomers);
customerRoute.post('/create',createCustomer);



export default customerRoute;