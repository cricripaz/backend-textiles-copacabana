import * as customerServices from "../services/customer.services.js"
import * as userServices from "../services/user.services.js";


export const fetchCustomers = (req,res) =>{
    customerServices.fetchCustomers()
        .then((result) => {
            res.status(200).json({
                message: "Customers Get Succesfully",
                customers : result[0]
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


export const editCustomer = (req,res) => {
    const id = req.params.id
    const { name, type, address, city, phoneNumber , email , NIT , notes} = req.body
    customerServices.editCustomer(id,name,type,address,city,phoneNumber,email,NIT,notes)
        .then((result) => {
            res.status(200).json({
                message: "Customer Update Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const deleteCustomer = (req,res) => {

    const id  = req.params.id
    customerServices.deleteCustomer(id)
        .then((result) => {
            res.status(200).json({
                message: "Customer Delete Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}