import {Router} from "express";
import {getInventory ,fetchInventory , createItemInventory,deleteItemInventory} from "../controllers/inventory.controller.js";



const inventoryRoute = Router();

inventoryRoute.get('/',getInventory);
inventoryRoute.get('/fetch',fetchInventory)
inventoryRoute.post('/addItem',createItemInventory);
inventoryRoute.delete('/delete/:id',deleteItemInventory);


export default inventoryRoute;