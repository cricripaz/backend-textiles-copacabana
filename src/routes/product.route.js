import { Router} from "express";
import userRoute from "./user.route.js";

import * as  controllerProduct from '../controllers/product.controller.js'
const productRoute = Router();


productRoute.get('/',controllerProduct.getProducts);
productRoute.get('/find/:product',controllerProduct.findProduct);

export default productRoute;