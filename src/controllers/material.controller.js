import * as materialServices from "../services/material.service.js"

export const getMaterials = (req, res) => {
    materialServices.getMaterials()
        .then((result) => {
            res.status(200).json({
                message: "Materials Get Successfully",
                materials : result[0]
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
export const deleteMaterial = (req,res) => {
    const id = req.params.id

    materialServices.deleteMaterial(id)
        .then((result) => {
            res.status(200).json({
                message: "Material Delete Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const updateMaterial = (req,res) => {
    const id = req.params.id
    const {name,description} = req.body

    materialServices.updateMaterial(id,name,description)
        .then((result) => {
            res.status(200).json({
                message: "Material Update Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

