import {Router} from "express";
import {getInventory ,fetchInventory , createItemInventory,deleteItemInventory,editItemInventory ,updateWeightInventory} from "../controllers/inventory.controller.js";
import {limiterPerUser} from "../middleware/limiter.js";


const inventoryRoute = Router();

inventoryRoute.get('/',getInventory);
inventoryRoute.get('/fetch',fetchInventory)
inventoryRoute.post('/addItem',createItemInventory);
inventoryRoute.put('/edit/:id',editItemInventory)
inventoryRoute.delete('/delete/:id',deleteItemInventory);
inventoryRoute.post('/update-weight',updateWeightInventory)


export default inventoryRoute;