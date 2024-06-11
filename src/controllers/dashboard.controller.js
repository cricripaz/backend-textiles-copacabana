import * as dashboardService from "../services/dashboard.service.js"



export const getOrderByDateRange = (req, res) => {

    const {start,end} = req.query;

    console.log(start,end)
    dashboardService.getOrdersByDateRange(start,end)
        .then((result) => {
            res.status(200).json({
                message: "Orders by Date Range get succesfully ",
                data : result[0][0]
                // result[0] para que nos envie solo el primer array y no info adicional
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}
export const getOrdersByYear = (req, res) => {

    const year = req.params.year;

    dashboardService.getOrdersByYear(year)
        .then((result) => {
            res.status(200).json({
                message: "Orders by Year get succesfully ",
                data : result[0]
                // result[0] para que nos envie solo el primer array y no info adicional
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}


export const getOrdersByCity = (req, res) => {


    dashboardService.getOrdersByCity()
        .then((result) => {
            res.status(200).json({
                message: "Orders by City get succesfully ",
                data : result[0]
                // result[0] para que nos envie solo el primer array y no info adicional
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}