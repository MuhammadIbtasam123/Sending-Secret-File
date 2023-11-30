// Steps involve in creating a server
// 1- Create a Direcory (mkdir)
// 2- create index file (touch index.js)
// 3- npm init -y (y will automatically create package.json file)
// 4- npm i express (install express)
// 5- npm i nodemon (install nodemon)
// 6- write server application in index.js
// 7- node index.js (run server) || nodemon index.js (run server)


// Consider this file as a server that is listening 24/7 for requests from clients
// Using app.get() to define an endpoint and its associated callback function
// The callback function will execute when a request is received from a specific endpoint
app.get('Endpoint from where the request is coming', (callbackFunction) => {
    // Logic to handle the request for this specific endpoint
    // This function will be executed when a request is made to this endpoint
  });
  
import { create } from 'domain';
  // There might be thousands of endpoints acting as doors on the server
  // When a client requests a specific endpoint, it routes the request to that particular door (Endpoint)
  

import express from 'express';
const app = express();
const port = 3002;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    //output the local host link to navigate
    console.log(`http://localhost:${port}`);
})
app.get("/",(req,res)=>{
    return res.send(
        '<h1>Hello World!</h1>'
    )
});
app.get("/Home",(req,res)=>{
    return res.send(
        '<h1>Home!</h1> <p>My name is ibtasam</p>'
    )
});