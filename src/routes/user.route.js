import { Router} from "express";

import {getUsers,signIn,createUser,deleteUser} from "../controllers/user.controller.js"


const userRoute = Router();

userRoute.get("/", getUsers);

userRoute.post("/signin", signIn);

userRoute.post("/createuser",createUser);

userRoute.delete('/delete/:id',deleteUser)




export default userRoute;
