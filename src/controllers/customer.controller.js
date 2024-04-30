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

export const createCustomer = (req,res) => {

    const {name,type,address,city,phoneNumber,email,NIT,notes} = req.body


    console.log(req.body)
    customerServices.createCustomers(name,type,address,city,phoneNumber,email,NIT,notes)
        .then((result) => {
            res.status(200).json({
                message: "Customer Create Succesfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })

}