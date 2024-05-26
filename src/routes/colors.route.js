import { Router} from "express";
import {createColor, getColors,editColor,deleteColor} from "../controllers/colors.controller.js";


const colorsRoute = Router();


colorsRoute.get("/",getColors);
colorsRoute.post("/create",createColor);
colorsRoute.put("/edit/:id",editColor);
colorsRoute.put("/delete/:id",deleteColor);


export default colorsRoute;