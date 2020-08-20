require('dotenv').config({
    path: "./pw.env"
});
require('./config/snoo-config');
const SnoodlyCap = require('./service/_Services').get.snoodlyCap

// Main
SnoodlyCap.run();