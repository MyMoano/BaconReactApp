var Bacon = require('baconjs');

//Define actions object
var ViewActions = {
    update: new Bacon.Bus()
};

module.exports = ViewActions;

