import * as DyesServices from "../services/dye.services.js"




export const getDyes = (req , res) => {
    DyesServices.getDyes()
        .then((result) => {
            res.status(200).json({
                message: "Tintes Get Succesfully",
                lista_tintes : result[0]
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}