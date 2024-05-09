import * as colorsService from "../services/colors.service.js"



export const getColors = (req, res) => {
        colorsService.getColors()
            .then((result) => {
            res.status(200).json({
                message: "Colors get successfully",
                users : result[0]
                // result[0] para que nos envie solo el primer array y no info adicional
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}