import db from "../config/db.js"


export const getDyes = () => {

    return new Promise(
        (resolve, reject) => {
            const query = 'SELECT * FROM inventarioTelas'

            db.execute(query)
                .then( (result) => resolve(result))
                .catch( (err) => reject(err))

        }
    )

}