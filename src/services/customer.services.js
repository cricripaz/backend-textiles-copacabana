import db from "../config/db.js"




export const fetchCustomers = () => {

    return new Promise(
        (resolve, reject) => {
            const query = 'SELECT * FROM Customer;'
            db.execute(query)
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))
        }
    )
}

