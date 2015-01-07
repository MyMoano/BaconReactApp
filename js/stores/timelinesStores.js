var Bacon = require('baconjs');
var Constants = require('../constants/noteConstants');
var StoreActions = require('../actions/storeActions');
var ViewActions = require('../actions/viewActions');
var _ = require('underscore');


var DispatcherStores = require('../dispatcherStores');
var DispatcherViews = require('../dispatcherViews');


//------------------------------------------------
var _updateView = ViewActions.update;
var _Stores = { 0 : { id:0, date:'2014-12-25', title:'Montessori School', contact:'E.GRALL', content:'', type:'Appointment', thumbnail:'', actived:true },
				1 : { id:1, date:'2014-12-25', title:'Call  To', contact:'S.SORIN', content:'', type:'Call', thumbnail:'', actived:false },
				2 : { id:2, date:'2014-12-25', title:'Meeting Angularjs', contact:'Paris', content:'', type:'Meeting', thumbnail:'', actived:false }
	};

 
var TimelinesStores = {
	
	//add SubMenu
	add: function(data) {
		//local
		_Stores[data.id] = _.extend({}, _Stores[data.id], data);
	}, 

	//add SubMenu
	destroy: function(key) {
		//local		
		delete _Stores[key];
	},  	
	
	getAll: function()	{
		return _Stores;
	},
	
	updateStore: function(data) {
		_Stores = data;
    	ViewActions.update.push({});
	},
	
	// Add listener to associated view
	addUpdateListener: function(callback) {
		DispatcherViews.listener(_updateView, callback);
	},
	
	// Remove change listener
	removeUpdateListener: function(callback) {
		DispatcherViews.listener(_updateView, null);
	}	
		
};


//listener handler
DispatcherStores.listener(StoreActions.timelinesUpdate, TimelinesStores.updateStore);

		

module.exports = TimelinesStores;
