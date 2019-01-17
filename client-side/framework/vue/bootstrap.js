// Add any dependencies for your project here (Common examples shown below)


// Lodash
window._ = require('lodash');

// Pull in JQuery if you are using bootstrap
try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {}

// Axios for ajax requests
window.axios = require('axios');

