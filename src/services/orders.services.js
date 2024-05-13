import db from "../config/db.js"

export const getOrders = () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT o.order_id,
                              c.name AS customer_name,
                              o.order_status,
                              o.entry_date,
                              o.state,
                              JSON_OBJECTAGG(
                                      JSON_UNQUOTE(p.name),
                                      JSON_OBJECT('quantity', od.quantity)
                              )      AS products
                       FROM Orders o
                                INNER JOIN
                            Customer c ON o.customer_id = c.customer_id
                                INNER JOIN
                            OrderDetails od ON o.order_id = od.order_id
                                INNER JOIN
                            Products p ON od.product_id = p.product_id
                                INNER JOIN
                            Material m ON p.material_id = m.material_id
                                INNER JOIN
                            Color cl ON p.color_id = cl.color_id
                       WHERE o.state = 'active'
                       GROUP BY o.order_id, c.name, o.order_status;`;

        db.execute(query)
            .then((result) =>
                resolve(result))
            .catch((err) => reject(err))
    });
};




export const createOrder = (customer_id, material_id, title, color, cod_color, turn, observations, user_id) => {

    return new Promise(
        (resolve, reject) => {
            const query = ` `

            db.execute(query, [customer_id, material_id, title, color, cod_color, turn, observations, user_id])
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        }
    )


}


export const deleteOrder = (id) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE Orders SET state = 'INACTIVE' WHERE order_id = ?;`;
        db.execute(query,[id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });

};




