var Bacon = require('baconjs');

//Define actions object
var storeActions = {
	
	//global bus
	bus: new Bacon.Bus(),
		
    //note actions ------------------------------------
	create: new Bacon.Bus(),
	destroy: new Bacon.Bus(),    
	updateText: new Bacon.Bus(),
	setFilter:  new Bacon.Bus(),
    
    //Weather ------------------------------------
	weather: new Bacon.Bus(),
	weather_id: 'weather',
	weather_refresh: 'refresh',
	weather_update: 'update',
    
	weatherRefresh: new Bacon.Bus(),
	weatherUpdate: new Bacon.Bus(),

    //Timeline Actions------------------------------------
	eventlinePause: new Bacon.Bus(),
	eventlineOk: new Bacon.Bus(),
    
	timelinesPlus: new Bacon.Bus(),
	timelinesUpdate: new Bacon.Bus(),
	timelinesRefresh: new Bacon.Bus()

};


module.exports = storeActions;

