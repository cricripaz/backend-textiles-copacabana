import jwt from "jsonwebtoken";
import db from '../config/db.js';
import {checkUserExistence} from "../services/user.services.js";

export const verifyToken = async (req,res,next) =>{
    const token = req.headers['x-access-token']

    if (!token) return res.status(403).json({message : 'No token providen'})

    const decoded = jwt.verify(token,'melo')

    let user = await checkUserExistence(decoded['user_id'])

    if (!user) return res.status(404).json({message : 'No User Found'})



    //todo
    next()
}