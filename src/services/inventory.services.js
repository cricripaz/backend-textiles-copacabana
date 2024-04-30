import db from "../config/db.js"



export const updateWeightInventory = (dyeInventory_id ,weigth) => {
    return new Promise(
        (resolve, reject) => {

            const query = `CALL UpdateDyeWeight(?, ?)`

            db.execute(query, [dyeInventory_id,weigth])
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        }


    )
}
export const editItemInventory = (  name , dyeType_id , weigth, description ,dyeInventory_id) =>{
    return new Promise(

        (resolve, reject) => {

            // Ajusta la consulta SQL para actualizar las columnas necesarias
            const query = `UPDATE DyeInventory 
                           SET
                               name = ?, dyeType_id = ?, weight = ?, description= ?
                           WHERE 
                               dyeInventory_id = ?;`

            // Añade los parámetros correspondientes en el array
            const params = [name, dyeType_id, weigth, description, dyeInventory_id];

            db.execute(query, params)
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        }
    )

}
export const deleteItemInventory = (id) => {
    return new Promise(

        (resolve, reject) => {
            const query = 'Delete FROM DyeInventory where dyeInventory_id = ?;'
            db.execute(query, [id])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }

    )

}
export const fetchInventory = (page , limit) => {

    return new Promise(
        (resolve, reject) => {

            const offset = (page - 1) * limit;

            const query = 'SELECT * FROM DyeInventory limit ?  offset ?';

            db.execute(query,[limit,offset])
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))
            }
    )
}
export const getInventory = () => {
    const query = `
        SELECT
            DI.dyeInventory_id,
            DI.name,
            DI.dyeType_id,
            us.name AS encargado,
            DI.weight,
            DI.description
        FROM
            users AS us
            INNER JOIN DyeInventory DI ON us.user_id = DI.user_id;
    `;

    return new Promise((resolve, reject) => {
        db.execute(query)
            .then(resolve)
            .catch(reject);
    });
};


export const createItemInventory = (name,type,user_id,weigth,description) =>{
    return new Promise(
        (resolve, reject) => {
            const query = 'INSERT INTO DyeInventory ( name, dyeType_id, user_id, weight, description )value (?,?,?,?,?)'
            db.execute(query,[name,type,user_id,weigth,description])
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))
        }
    )
}





