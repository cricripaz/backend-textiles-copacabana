import * as InventoryServices from "../services/inventory.services.js"
import * as userServices from "../services/user.services.js";





export const deleteItemInventory = (req,res) => {
    //TODO Investigar donde va el id
    const id  = req.params.id
    InventoryServices.deleteItemInventory(id)
        .then((result) => {
            res.status(200).json({
                message: "Item Delete Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const fetchInventory = (req,res) => {
    const { page , limit } = req.query
    InventoryServices.fetchInventory(page,limit)
        .then(
            (result) => {
                res.status(200).json({
                    message: `Inventory Get Succesfully  page : ${page} limit : ${limit} `,
                    data : result[0]
                })
            }
        )
}


export const getInventory = (req,res) => {
    InventoryServices.getInventory()
        .then((result) => {
            res.status(200).json({
                message: "Inventory Get Succesfully",
                data : result[0]
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const createItemInventory = (req, res) => {
    const {name,type,user_id,weigth,description} = req.body
    InventoryServices.createItemInventory(name,type,user_id,weigth,description)
        .then(
            (result) => {
                res.status(200).json(
                    {
                        message : "Item add successfully "
                    }
                )
            }
        )
        .catch(err => {res.status(500).send(err)})

}