import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = 3002;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/Submit",(req,res)=>{
    console.log(req.body);
    const combine = req.body["name"] + req.body["email"];
    console.log(combine);
})
app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
})