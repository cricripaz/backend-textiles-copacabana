import {Router} from "express";

import {fetchCustomers} from "../controllers/customer.controller.js"


const customerRoute = Router();



customerRoute.get('/',fetchCustomers);



export default customerRoute;