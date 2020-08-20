// This is the main entry point of the application. 
// It starts by requiring the Dependencies needed to run a reddit bot in the 'config/snoo-config.js' file.
// It then grabs a list of services from the 'service/_Services.js' file.
// These micro-services contain functions that allow a user to query, manipulate, and save externally [the data from the Reddit API].

// Require Configuration Files
require('dotenv').config({
    path: "./pw.env"
});

// Require and Initialize The Snoo-Pendencies With Authentication Credentials
require('./config/snoo-config');




// Get List of Available Services
// const Services = require('./service/_Services').get


// Choose a Service, then a function... Et voilà - You have your data!

const SnoodlyCap = require('./service/_Services').get.snoodlyCap

SnoodlyCap.run();