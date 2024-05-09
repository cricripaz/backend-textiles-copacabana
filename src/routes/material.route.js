import { Router} from "express";


import {createMaterial, getMaterials} from "../controllers/material.controller.js";


const materialRoute = Router();



materialRoute.get('/',getMaterials)
materialRoute.post('/create',createMaterial)



export default materialRoute;