import db from "../config/db.js"


export const getColors = () => {

    return new Promise((resolve , reject) => {


        const query = 'SELECT * FROM Color'

        db.query(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err))


    })
}



