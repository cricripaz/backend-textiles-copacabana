import {Router} from "express";
import {getInventory ,fetchInventory , createItemInventory} from "../controllers/inventory.controller.js";



const inventoryRoute = Router();

inventoryRoute.get('/',getInventory);
inventoryRoute.get('/fetch',fetchInventory)
inventoryRoute.post('/addItem',createItemInventory);


export default inventoryRoute;