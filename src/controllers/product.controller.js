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
    const name_prod = req.params.product;

    productServices.findProduct(name_prod)
        .then((result) => {
            if (result.length === 0 || result[0].length === 0 || result[0][0].length === 0) {
                res.status(404).json({
                    message: "Product not found"
                });
            } else {
                const product = result[0][0][0]; // Desestructuramos para obtener directamente el objeto
                res.status(200).json({
                    message: "Product found successfully",
                    product: product
                });
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};