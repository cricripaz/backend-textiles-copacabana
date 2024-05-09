import { Router} from "express";
import {getColors} from "../controllers/colors.controller.js";


const colorsRoute = Router();


colorsRoute.get("/",getColors);


export default colorsRoute;