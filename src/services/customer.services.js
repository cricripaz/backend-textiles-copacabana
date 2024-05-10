import db from "../config/db.js"

export const fetchCustomers = () => {

    return new Promise(
        (resolve, reject) => {
            const query = `SELECT * FROM Customer where Customer.state='active' ;`
            db.execute(query)
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))
        }
    )
}

export const createCustomers = (name,type,address,city,phoneNumber,email,NIT,notes) => {

    return new Promise(
        (resolve, reject) => {

            const query = `INSERT INTO Customer (name, type, address, city, phoneNumber, email, NIT, notes)
                           values (?, ?, ?, ?, ?, ?, ?, ?);`

            db.execute(query, [name, type, address, city, phoneNumber, email, NIT, notes])
                .then((result) => resolve(result))
                .catch((err) => reject(err))

        }
    )

}


export const editCustomer = (id, name, type, address, city, phoneNumber , email , NIT , notes) => {
    return new Promise(
        (resolve, reject) => {

            // Ajusta la consulta SQL para actualizar las columnas necesarias
            const query = `UPDATE Customer 
                           SET name = ?, type = ?, address = ?, city = ?, phoneNumber = ?, email = ?, NIT = ?,notes = ?
                           WHERE customer_id = ?;`;

            // Añade los parámetros correspondientes en el array
            const params = [name, type, address, city, phoneNumber, email, NIT, notes,id];

            db.execute(query, params)
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        }
    );
};

export const deleteCustomer = (id) =>{
    return new Promise(
        (resolve, reject) => {
            const query = `UPDATE Customer set state = 'inactive' where customer_id = ?;`
            db.execute(query, [id])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )
}


