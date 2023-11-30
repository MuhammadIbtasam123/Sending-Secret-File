// Import necessary modules from Express and other Node.js packages
import express from 'express'; // Import the Express framework
import bodyParser from 'body-parser'; // Middleware to parse incoming request bodies
import { dirname } from 'path'; // Provides utilities for working with file and directory paths
import { fileURLToPath } from 'url'; // Converts a file URL to a file path string

// Create an instance of the Express application
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Get the directory name of the current module file (this script)
const __Dirname = dirname(fileURLToPath(import.meta.url));

// Middleware to parse incoming request bodies as form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for handling GET requests to the root URL '/'
app.get('/', (req, res) => {
    // Send the file 'Secretindex.html' located in the 'public' directory as a response
    res.sendFile(__Dirname + '/public/Secretindex.html');
});

// Define a route for handling POST requests to the '/check' endpoint
app.post('/check', (req, res) => {
    // Extract the 'password' field from the POST request body
    const data = req.body['password'];

    // Log the extracted password data to the console
    console.log(data);

    // Check if the provided password matches 'ILoveProgramming'
    // If true, send the file 'secret.html'; otherwise, send 'Secretindex.html'
    data === 'ILoveProgramming' ?
        res.sendFile(__Dirname + '/public/secret.html') :
        res.sendFile(__Dirname + '/public/Secretindex.html');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message indicating that the server is running and the URL it's accessible from
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});
