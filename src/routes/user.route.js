import { Router} from "express";

import {getUsers,signIn,createUser,deleteUser,editUser} from "../controllers/user.controller.js"
import {verifyToken} from "../middleware/authJwt.js"


const userRoute = Router();

userRoute.get("/",verifyToken, getUsers);

userRoute.post("/signin", signIn);

userRoute.post("/createuser",createUser);

userRoute.put('/delete/:id',deleteUser)

userRoute.put('/update/:id',editUser)


export default userRoute;

