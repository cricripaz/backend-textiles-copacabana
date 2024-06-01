import { Router} from "express";


import {createMaterial, getMaterials,updateMaterial,deleteMaterial} from "../controllers/material.controller.js";


const materialRoute = Router();



materialRoute.get('/',getMaterials)
materialRoute.post('/create',createMaterial)
materialRoute.put('/edit/:id',updateMaterial)
materialRoute.put('/delete/:id',deleteMaterial)


export default materialRoute;