var Bacon = require('baconjs');
var Constants = require('../constants/noteConstants');
var StoreActions = require('../actions/storeActions');
var ViewActions = require('../actions/viewActions');
var _ = require('underscore');

var request=require('superagent');

var DispatcherStores = require('../dispatcherStores');
var DispatcherViews = require('../dispatcherViews');


//------------------------------------------------
var _Stores = { idcity: '3030300', city: 'Brest, FR', temp:'279.63',  wind:'3', icon:'' };
var viewActions = ViewActions.update;
 
var WeatherStores = {
	
	getAll: function()	{
		return _Stores;
	},
	
	// Add listener to associated view
	addUpdateListener: function(callback) {
		DispatcherViews.filter(viewActions, 'view_update', callback);
	},
	
	// Remove change listener
	removeUpdateListener: function(callback) {
		DispatcherViews.listener(viewActions, null);
	},
	
	updateStore: function(data) {
		_Stores = data.content;
		//console.log("WeatherStores > push > stores" + JSON.stringify(_Stores) + " - header : " +JSON.stringify(data.header));
	}
};


//listener & filter handler
DispatcherStores.filter(StoreActions.weatherUpdate, StoreActions.weather_id, WeatherStores.updateStore);

module.exports = WeatherStores;
