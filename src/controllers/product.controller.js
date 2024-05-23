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


export const findProduct = (req, res) => {
    //TODO if < 0 message : not found
    const name_prod = req.params.product
    productServices.findProduct(name_prod)
        .then((result) => {
            res.status(200).json({
                message: "Products found successfully",
                products : result[0]
                // result[0] para que nos envie solo el primer array y no info adicional
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}
