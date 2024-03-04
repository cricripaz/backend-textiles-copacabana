import {Router} from "express";
import {getDyes} from "../controllers/dye.controller.js";


const dyeRoute = Router();


dyeRoute.get('/',getDyes);




export default dyeRoute ;