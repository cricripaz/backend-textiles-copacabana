import { Router} from "express";
import {createColor, getColors} from "../controllers/colors.controller.js";


const colorsRoute = Router();


colorsRoute.get("/",getColors);
colorsRoute.post("/create",createColor)


export default colorsRoute;