import * as customerServices from "../services/customer.services.js"


export const fetchCustomers = (req,res) =>{
    customerServices.fetchCustomers()
        .then((result) => {
            res.status(200).json({
                message: "Customers Get Succesfully",
                data : result[0]
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}