import express from 'express';
import 'dotenv/config';
import sql from 'mssql';
import cors from 'cors';


const app = express();


const server = process.env["DB_SERVER"];
const name = process.env["DB_NAME"];
const username = process.env["DB_USER"];
const password = process.env['DB_PASSWORD'];


const dbConfig = {
    server : server, 
    database : name, 
    user : username, 
    password : password,
    options: {encrypt: true}};

const connection = await sql.connect(dbConfig);
app.use(cors({origin: 'http://localhost:5173'}))

//Console checkpoint
console.log("Sucess you are connected to the database");

app.get('/researchers', async (req, res) =>{try {const result = await connection.request().query('Select * From researchers;'); 
                                    res.json(result.recordset)} catch(error){console.error(error); res.status(500).json({message: 'Database error'})}});

app.listen(3000, () =>{});
