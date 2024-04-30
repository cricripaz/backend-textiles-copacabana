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


export const createCustomers = (name,type,address,city,phoneNumber,email,NIT,notes) => {

    return new Promise(
        (resolve, reject) => {

            const query = `INSERT INTO Customer (name,type,address,city,phoneNumber,email,NIT,notes)values (?,?,?,?,?,?,?,?);`

            db.execute(query,[name,type,address,city,phoneNumber,email,NIT,notes])
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))

        }

    )
}

