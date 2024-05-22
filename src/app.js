import express from "express";
import cors from "cors";



import indexRouter from "./routes/index.js";
import userRoute from "./routes/user.route.js";
import dyeRoute from "./routes/dye.route.js";
import * as bodyParser from "express";
import inventoryRoute from "./routes/inventory.route.js";
import customerRoute from "./routes/customer.route.js";
import recipeRoute from "./routes/recipe.route.js";
import ordersRoute from "./routes/orders.route.js";
import colorsRoute from "./routes/colors.route.js";
import materialRoute from "./routes/material.route.js";
import productRoute from "./routes/product.route.js";


const app = express();

app.set("port", process.env.PORT || 3000)



// para que spueda escuchar en formato json
app.use(bodyParser.json());

//TODO INVESTIGAR QUE SON LA  LINEA DE ABAJO :v
app.use(bodyParser.urlencoded({ extended: true }));


// Configurar CORS
const allowedOrigins = ['https://textilescopacabana-services.web.app', 'https://d1cr03nbov0ajk.cloudfront.net'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


//ROUTES

app.use('/', indexRouter)
app.use('/',userRoute)
app.use('/', dyeRoute)
app.use('/', inventoryRoute)
app.use('/',customerRoute)
app.use('/',recipeRoute)
app.use('/',ordersRoute)
app.use('/',colorsRoute)
app.use('/',materialRoute)
app.use('/',productRoute)

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