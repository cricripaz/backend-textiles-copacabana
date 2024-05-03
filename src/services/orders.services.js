import db from "../config/db.js"


export const getOrders = () => {


    return new Promise(
        (resolve, reject) => {
            const query = 'SELECT * FROM Orders;'
            db.execute(query)
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))
        }
    )
}


export const createOrder = (customer_id, material_id, title, color, cod_color, turn, observations, user_id) => {

    return new Promise(
        (resolve, reject) => {
            const query =` INSERT INTO 
                                    Orders 
                                    (customer_id, material_id, title, color, cod_color, turn, observations, user_id)
                                    VALUES(?,?,?,?,?,?,?,?)`

            db.execute(query,[customer_id, material_id, title, color, cod_color, turn, observations, user_id])
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))
        }
    )


}