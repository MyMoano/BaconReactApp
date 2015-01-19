var Bacon = require('baconjs');
var Constants = require('../constants/noteConstants');
var StoreActions = require('../actions/storeActions');
var _ = require('underscore');


var DispatcherStores = require('../dispatcherStores');


//------------------------------------------------
var _Stores = { 0 : { id:0, date:'2014-12-25', title:'Apppointment School', contact:'R.GRALL', content:'', type:'Appointment', thumbnail:'', actived:true },
				1 : { id:1, date:'2014-12-25', title:'Call  To', contact:'F.BION', content:'fica fica', type:'Call', thumbnail:'img/avatar.jpg', actived:false },
				2 : { id:2, date:'2014-12-25', title:'Meeting Angularjs', contact:'Paris', content:'', type:'Meeting', thumbnail:'img/continuous-delivery-graphic.png', actived:false },
				3 : { id:3, date:'2014-11-25', title:'Plane to Grenoble', contact:'Personal Travel', content:'', type:'Travel', thumbnail:'', actived:false },
				4 : { id:4, date:'2014-11-25', title:'Web application project', contact:'REACT.JS', content:'', type:'Project', thumbnail:'', actived:false }
			};
 
var TimelinesServices = {
	
	    loadDataFromServer: function() {
	    	StoreActions.timelinesUpdate.push(_Stores);
	    }
	    	/*
	    	var _idcity = WeatherStores.getAll().idcity;
	        request
	          //.get(urlWeather+_idcity)
	          .get(urlWeatherByCity+WeatherStores.getAll().city)
	          .end(function(res) {
	        	  var stores = {  idcity: res.body.id, 
	        					  city: res.body.name, 
	        					  temp:res.body.main.temp,  
	        					  wind:res.body.wind.speed, 
	        					  icon:res.body.weather.main 
	        				}; 
	        	  
	        	  //force refresh 
	        	  StoreActions.weatherUpdate.push(stores);
	        	  
	          }.bind(this));
	      }	*/	
		
};

//listener handler
DispatcherStores.listener(StoreActions.timelinesRefresh, TimelinesServices.loadDataFromServer);

		

module.exports = TimelinesServices;
