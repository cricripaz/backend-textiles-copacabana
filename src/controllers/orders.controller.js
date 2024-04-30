import * as orderServices from "../services/orders.services.js"

export const getOrders = (req,res) => {

    orderServices.getOrders()
        .then((result) => {
            res.status(200).json({
                message: "Orders Get Succesfully",
                data : result[0]
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}