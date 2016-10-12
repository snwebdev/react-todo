var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log("current timestamp", now.unix());

var timestamp = 1476302299;

var currentMoment = moment.unix(timestamp);

console.log("currentMoment", currentMoment.format("MMMM Do, YYYY @ HH:mm A"));
