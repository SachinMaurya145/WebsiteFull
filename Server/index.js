import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './Database/db.js';
import  Router  from './Router/route.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);  
const PORT = '8080';

Connection(); 
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));