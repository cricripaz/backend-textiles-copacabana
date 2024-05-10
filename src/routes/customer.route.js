import {Router} from "express";

import {fetchCustomers, createCustomer, editCustomer, deleteCustomer} from "../controllers/customer.controller.js"


const customerRoute = Router();



customerRoute.get('/',fetchCustomers);
customerRoute.post('/create',createCustomer);
customerRoute.put('/update/:id',editCustomer)
customerRoute.patch('/delete/:id',deleteCustomer)


export default customerRoute;