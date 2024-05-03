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


export const createOrder = (req,res) => {

    const {customer_id, material_id, title, color, cod_color, turn, observations, user_id}= req.body

    orderServices.createOrder(customer_id, material_id, title, color, cod_color, turn, observations, user_id)
        .then((result) => {
            res.status(200).json({
                message: "Create Order Succesfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}