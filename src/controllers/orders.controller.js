import * as orderServices from "../services/orders.services.js"

export const getOrders = (req,res) => {
//TODO ver porque noe envia los datos del backend completos osea repetidos
    orderServices.getOrders()
        .then((result) => {
            const orders = result[0].map(orders => {
                if (orders.products) {
                    orders.products = JSON.parse(orders.products);

                }
                return orders;
            });

            console.log(orders);

            res.status(200).json({
                message: "Orders Get Succesfully",
                data : orders
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}


export const createOrder = (req,res) => {

    const {customer_id,products}= req.body

    console.log(customer_id,products)

    orderServices.createOrder(customer_id, products)
        .then((result) => {
            res.status(200).json({
                message: "Create Order Succesfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}


export const deleteOrder = (req,res) => {

    const id = req.params.id

    console.log('ID : ',id)

    orderServices.deleteOrder(id)
        .then((result) => {
            res.status(200).json({
                message: "Order Delete Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })

}