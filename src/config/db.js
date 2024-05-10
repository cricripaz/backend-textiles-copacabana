import mysql from "mysql2";
import dotenv from "dotenv";


dotenv.config();

const connection = mysql.createPool("mysql://admin:cristiank1k2@textiles-copacabana.cruu88q2mq9m.sa-east-1.rds.amazonaws.com:3306/textiles_copacabana");

export default connection.promise();


