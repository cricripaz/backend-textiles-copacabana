import db from "../config/db.js";




export const deleteMaterial = (id)  => {

    return new Promise((resolve , reject) => {

        const query = `Update Material SET status = 'inactive' where material_id = ?`;
        db.execute(query,[id])
            .then( (result) => resolve(result))
            .catch( (err) => reject(err))

    })

}


export const updateMaterial = (id,name,description)  => {

    return new Promise((resolve , reject) => {

        const query = `Update Material SET name = ?,description = ? where material_id = ?`;
        db.execute(query,[name,description,id])
            .then( (result) => resolve(result))
            .catch( (err) => reject(err))

    })

}
export const getMaterials = () => {

    return new Promise((resolve , reject) => {

        const query = 'SELECT * FROM Material'
        db.execute(query)
            .then( (result) => resolve(result))
            .catch( (err) => reject(err))

    })

}


export const createMaterial = (name,description) => {
    return new Promise(
        (resolve, reject) => {

            const query = 'INSERT INTO Material (name,description)value (?,?)'

            db.execute(query, [name,description])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )
}