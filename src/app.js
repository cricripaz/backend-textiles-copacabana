import express from "express";
import cors from "cors";



import db from "./config/db.js";
import indexRouter from "./routes/index.js";
import userRoute from "./routes/user.route.js";
import dyeRoute from "./routes/dye.route.js";
import * as bodyParser from "express";
import inventoryRoute from "./routes/inventory.route.js";
import customerRoute from "./routes/customer.route.js";


const app = express();

app.set("port", process.env.PORT || 3000)



// para que spueda escuchar en formato json
app.use(bodyParser.json());

//TODO INVESTIGAR QUE SON LA  LINEA DE ABAJO :v
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTES
app.use(cors())
app.use('/', indexRouter)
app.use('/',userRoute)
app.use('/', dyeRoute)
app.use('/', inventoryRoute)
app.use('/',customerRoute)
app.use('*', (req, res) => { res.status(404).send(" 404 - not found ")})



//START SERVER
app.listen(app.get("port") , () => {
    console.log("serves is running on port",app.get("port"))
});

//TODO investigar que paso

// //CONNECT DB
//
// db.connect().then( () => {
//     console.log('Connect Db')
// }).catch( (err) => {
//     console.log(err)
// });