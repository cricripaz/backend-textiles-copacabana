import db from "../config/db.js"


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
export const getInventory = ()=>{


    return new Promise(
        (resolve, reject) => {
            const query = 'select\n' +
                '    DI.name , DI.dyeType_id , us.name as encargado , DI.weight  , DI.description\n' +
                'from\n' +
                '    users as us\n' +
                '    INNER JOIN DyeInventory DI\n' +
                '        on\n' +
                '            us.user_id = DI.user_id ;'
            db.execute(query)
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))
        }
    )

}

export const createItemInventory = (name,type,user_id,weigth,description) =>{
    return new Promise(
        (resolve, reject) => {
            const query = 'INSERT INTO DyeInventory (name, dyeType_id, user_id, weight, description)value (?,?,?,?,?)'
            db.execute(query,[name,type,user_id,weigth,description])
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))
        }
    )
}





