import * as productServices from "../services/product.service.js"


export const getProducts = (req, res) => {
    productServices.getProducts()
        .then((result) => {
            res.status(200).json({
                message: "Products get successfully",
                products : result[0]
                // result[0] para que nos envie solo el primer array y no info adicional
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}
