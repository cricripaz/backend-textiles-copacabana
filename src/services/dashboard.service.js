import db from "../config/db.js"


export const getOrdersByYear = (year) => {

    return new Promise((resolve, reject) => {

        const query = `
            SELECT YEAR(entry_date)  AS year,
                   MONTH(entry_date) AS month,
                   COUNT(*)          AS total_orders
            FROM Orders
            WHERE YEAR(entry_date) IN (${year})
            GROUP BY YEAR(entry_date), MONTH(entry_date)
            ORDER BY YEAR(entry_date), MONTH(entry_date);
        `

        db.query(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err))


    })
}


export const getOrdersByDateRange = (start_date,end_date) =>{

    return new Promise((resolve, reject) => {

        const query = `CALL GetOrdersByDateRange(?,?)`

        db.query(query,[start_date,end_date])
            .then((result) => resolve(result))
            .catch((err) => reject(err))


    })
}

export const getOrdersByCity = () => {



    return new Promise((resolve, reject) => {

        const query = `
            SELECT c.city,
                   COUNT(*) AS total_orders
            FROM Orders o
                     JOIN Customer c ON o.customer_id = c.customer_id
            GROUP BY c.city;`

        db.query(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err))


    })

}