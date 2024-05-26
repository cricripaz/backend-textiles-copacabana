import * as colorsService from "../services/colors.service.js"



export const getColors = (req, res) => {
        colorsService.getColors()
            .then((result) => {
            res.status(200).json({
                message: "Colors get successfully",
                colors : result[0]
                // result[0] para que nos envie solo el primer array y no info adicional
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}


export const createColor = (req,res) => {
    const {name,description} = req.body
    colorsService.createColor(name,description)
        .then((result) => {
            res.status(200).json({
                message: "Color Create Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const editColor = (req,res) => {
    const id = req.params.id
    const {name,description} = req.body
    colorsService.editColor(id,name,description)
        .then((result) => {
            res.status(200).json({
                message: "Color Update Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const deleteColor = (req,res) => {
    const id = req.params.id
    colorsService.deleteColor(id)
        .then((result) => {
            res.status(200).json({
                message: "Color Delete Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}