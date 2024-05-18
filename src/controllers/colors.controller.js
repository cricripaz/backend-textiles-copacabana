import * as colorsService from "../services/colors.service.js"
import * as userServices from "../services/user.services.js";


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
