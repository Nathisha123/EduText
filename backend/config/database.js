const mongoose = require('mongoose');
require('dotenv').config();


exports.connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true, //for parsing connection strings
        useUnifiedTopology: true 
    })
        .then(() => {
            console.log('Database connected succcessfully');
        })
        .catch(error => {
            console.log(`Error while connecting server with Database`);
            console.log(error);
            process.exit(1);  // Exits the Node.js process with a non-zero status code
        }) 
};

