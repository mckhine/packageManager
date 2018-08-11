var _ = require('lodash');
var moment = require('moment');
var today = moment().format('dddd');
var wine = 'I like red wine on ' + today;
var h4Heading = document.querySelector('h4');
h4Heading.textContent = _.replace(wine, 'red', 'blue');
