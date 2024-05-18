import { Router} from "express";

import {getUsers,signIn,createUser,deleteUser,editUser} from "../controllers/user.controller.js"
import {verifyToken} from "../middleware/authJwt.js"
import {limiterPerUser} from "../middleware/limiter.js"


const userRoute = Router();

userRoute.get("/",limiterPerUser,verifyToken, getUsers);

userRoute.post("/login", signIn);

userRoute.post("/createuser",createUser);

userRoute.put('/delete/:id',deleteUser)

userRoute.put('/update/:id',editUser)


export default userRoute;

