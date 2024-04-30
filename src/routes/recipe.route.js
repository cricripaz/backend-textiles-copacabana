import {Router} from "express";

import {getRecipes,createRecipe, deleteRecipe,updateRecipe} from "../controllers/recipe.controller.js";



const recipeRoute = Router();



recipeRoute.get("/",getRecipes);
recipeRoute.post('/create',createRecipe);
recipeRoute.delete('/delete/:id',deleteRecipe);
recipeRoute.put('/update/:id',updateRecipe);


export default recipeRoute;