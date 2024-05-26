import db from "../config/db.js"


export const getColors = () => {

    return new Promise((resolve, reject) => {


        const query = 'SELECT * FROM Color'

        db.query(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err))


    })
}


export const createColor = (name, description) => {
    return new Promise(
        (resolve, reject) => {
            const query = 'INSERT INTO Color (name,description)value (?,?)'
            db.execute(query, [name, description])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )

}

export const editColor = (id,name,description) => {
    return new Promise(
        (resolve, reject) => {
            const query = 'UPDATE Color SET name = ?, description = ? WHERE color_id = ?';
            db.execute(query, [name, description, id])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )
}


export const deleteColor = (id)  => {
    return new Promise(
        (resolve, reject) => {
            const query = `UPDATE Color SET status = 'inactive' WHERE color_id = ?`;
            db.execute(query, [id])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )
}


