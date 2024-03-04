import * as userServices from "../services/user.services.js"
import e from "express";


export const getUsers = (req, res) => {
    userServices.getUsers()
        .then((result) => {
            res.status(200).json({
                message: "Users get successfully",
                users : result[0]
                // result[0] para que nos envie solo el primer array y no info adicional

            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const deleteUser = (req,res) => {
    //TODO Investigar donde va el id 
    const id  = req.params.id
    userServices.deleteUser(id)
        .then((result) => {
            res.status(200).json({
                message: "User Delete Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const createUser = (req,res) => {
    const {username,password,role_id,email,name,lastname,numberphone,ci} = req.body
    userServices.createUser(username,password,role_id,email,name,lastname,numberphone,ci)
        .then((result) => {
            res.status(200).json({
                message: "User Create Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}


export const signIn = (req,res) => {

    const {username ,password } =  req.body;
    userServices.signIn(username,password)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {res.status(500).send(err)})

}




