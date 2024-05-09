import db from "../config/db.js"


export const getColors = () => {

    return new Promise((resolve , reject) => {


        const query = 'SELECT * FROM Color'

        db.query(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err))


    })
}



export const createColor = (name,description) => {
    return new Promise(
        (resolve, reject) => {
            const query = 'INSERT INTO Color (name,description)value (?,?)'
            db.execute(query, [name,description])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )

}



