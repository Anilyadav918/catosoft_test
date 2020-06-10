const express = require('express');
const dotenv = require('dotenv');
const servers = require('./routes/servers');

//setting path for config file so that we can use our environment variables
dotenv.config({path:'./config/config.env'});

const app = express();

//Body parser
app.use(express.json());

//Mount Routers
app.use('/api/v1/servers', servers);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(() => process.exit(1));
});