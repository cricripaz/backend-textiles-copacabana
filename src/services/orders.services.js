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