import {Router} from "express";

import {getRecipes,createRecipe} from "../controllers/recipe.controller.js";



const recipeRoute = Router();



recipeRoute.get("/",getRecipes);
recipeRoute.post('/create',createRecipe);



export default recipeRoute;