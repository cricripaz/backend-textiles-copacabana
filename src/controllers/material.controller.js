import * as materialServices from "../services/material.service.js"
import * as userServices from "../services/user.services.js";




export const getMaterials = (req, res) => {
    materialServices.getMaterials()
        .then((result) => {
            res.status(200).json({
                message: "Materials Get Successfully",
                users : result[0]
                // result[0] para que nos envie solo el primer array y no info adicional
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const createMaterial = (req,res) => {
    const {name,description} = req.body
    console.log(name,description)
    materialServices.createMaterial(name,description)
        .then((result) => {
            res.status(200).json({
                message: "Material Create Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}


