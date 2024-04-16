import { Router } from "express";
import userRouter from "./user.route.js"
import dyeRoute from "./dye.route.js";
import inventoryRoute from "./inventory.route.js";
import customerRoute from "./customer.route.js";
import recipeRoute from "./recipe.route.js"

const indexRouter = Router();

const prefix  = "/api"


indexRouter.get(prefix , (req,res) => {
    res.send("Welcome To planetscle API")
    console.log(`${prefix}/user`)
})

userRouter.use(`${prefix}/user`, userRouter);
dyeRoute.use(`${prefix}/dye`,dyeRoute);
inventoryRoute.use(`${prefix}/inventory`,inventoryRoute);
customerRoute.use(`${prefix}/customer`,customerRoute);
recipeRoute.use(`${prefix}/recipe`, recipeRoute);



export default indexRouter;