// const homeRoute = require('../routes/home_route');
// const dialogflowRoute = require('../routes/dialogflow_route');
// const express = require('express');

// const webApp = express();

// webApp.use(express.urlencoded({ extended: true }));
// webApp.use(express.json());

// const PORT = process.env.PORT || 5000;

// webApp.use(homeRoute.router);
// webApp.use(dialogflowRoute.router);

// webApp.listen(PORT, () => {
//     console.log(`Server is up and running at ${PORT}`);
// });


// Import required modules and routes
const homeRoute = require('./routes/home_route');
const dialogflowRoute = require('./routes/dialogflow_route');
const express = require('express');
const https = require('https');
const fs = require('fs');

// Create an instance of Express
const webApp = express();

// Middleware to parse URL-encoded bodies and JSON bodies
webApp.use(express.urlencoded({ extended: true }));
webApp.use(express.json());

// Define the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Use the defined routes
webApp.use(homeRoute.router);
webApp.use(dialogflowRoute.router);

// Load SSL certificate and key
const options = {
    key: fs.readFileSync('./src/private.key'),
    cert: fs.readFileSync('./src/certificate.crt')
};

// Create HTTPS server
const server = https.createServer(options, webApp);

// Start the server
server.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});