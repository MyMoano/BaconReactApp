var Bacon = require('baconjs');
var Constants = require('../constants/noteConstants');
var StoreActions = require('../actions/storeActions');
var ViewActions = require('../actions/viewActions');
var _ = require('underscore');

var request=require('superagent');

var DispatcherStores = require('../dispatcherStores');
var WeatherStores = require('../stores/weatherStores');
 
//constant ------------------------------------------------
var urlWeather='http://api.openweathermap.org/data/2.5/weather?id=';
var urlWeatherByCity='http://api.openweathermap.org/data/2.5/weather?q=';


//services ------------------------------------------------
var WeatherServices = {
	
    loadDataFromServer: function() {
    	var _idcity = WeatherStores.getAll().idcity;
        request
          .get(urlWeatherByCity+WeatherStores.getAll().city)
          .end(function(res) {
        	  var stores = {  idcity: res.body.id, 
        					  city: res.body.name, 
        					  temp:res.body.main.temp,  
        					  wind:res.body.wind.speed, 
        					  icon:res.body.weather.main 
        				};
        	        	  
        	  //force refresh 
        	  StoreActions.weatherUpdate.push({	header: StoreActions.weather_id,
        		  								type: 	StoreActions.weather_update,
										  		content: stores});
          }.bind(this));
      }
};


//listener handler
DispatcherStores.service(StoreActions.weatherRefresh, WeatherServices.loadDataFromServer);

module.exports = WeatherServices;
