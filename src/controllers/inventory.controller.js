import * as InventoryServices from "../services/inventory.services.js"


const typeToIdMap = {
    COLORANTE: 10,
    ENVASE: 20,
    QUIMICO: 30
};


export const updateWeightInventory = (req,res) => {

    let {id , weigth , type} = req.body

    if (type === 'gr') {
        weigth = weigth / 1000.0;  // 1000 gramos = 1 kilogramo
    }

    InventoryServices.updateWeightInventory(id,weigth)
        .then((result) => {
            res.status(200).json({
                message: "Weight added successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })


}


export const editItemInventory = (req,res) => {
    const id  = req.params.id

    const {name , type,weight , description} = req.body

    const dyeType_id = typeToIdMap[type];

    console.log('data inventory edit : ',name,type,dyeType_id,weight,description,id)
    InventoryServices.editItemInventory(name,dyeType_id,weight,description,id)
        .then((result) => {
            res.status(200).json({
                message: "Item Inventory Update Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })

}

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