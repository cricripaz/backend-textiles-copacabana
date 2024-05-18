
import db from "../config/db.js";


export const getProducts= () => {

    return new Promise((resolve , reject) => {

        const query = `SELECT p.product_id,
                              p.name as name_product,
                              c.color_id,
                              c.name,
                              m.material_id,
                              m.name
                       FROM Products p
                                INNER JOIN
                            Color c on p.color_id = c.color_id
                                INNER JOIN
                            Material m on p.material_id = m.material_id;`
        db.execute(query)
            .then( (result) => resolve(result))
            .catch( (err) => reject(err))

    })
}