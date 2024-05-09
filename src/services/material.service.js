import db from "../config/db.js";

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