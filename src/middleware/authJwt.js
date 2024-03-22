import jwt from "jsonwebtoken";
import db from '../config/db.js'

export const verifyToken = async (req,res,next) =>{
    const token = req.headers['x-access-token']

    console.log('token :',token)

    if (!token) return res.status(403).json({message : 'No token providen'})

    const decoded = jwt.verify(token,'melo')

    console.log('token decoded :',decoded)

    //TODO implentar la busque da de existencia de un user ;
   let x= db.query(`SELECT * FROM users where user_id=?`,decoded['user_id'])

    x.then((resTr) => {
        console.log(resTr[0]); // Esto imprimirá '¡Promesa resuelta!' en la consola
    });

    console.log('size : ',x.then())
    if (x.then()>0) return res.status(404).json({message:'user not found'})


    //todo
    next()
}