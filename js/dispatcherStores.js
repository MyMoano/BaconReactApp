var ViewActions = require('./actions/viewActions');


var DispatcherStores = {
		listener: function(action, callback)	{
			action.onValue(
				   function(data) { 
					   console.log("DispatcherStores listener > onValue :: "+ JSON.stringify(data.header));
					   if(callback !== null)
						   callback(data);
					   ViewActions.update.push({header: 'view_update'});
				   }
				)
		},
		
		filter: function(action, filter, callback)	{
			ofType(action, filter).onValue(
				   function(data) { 
					   console.log("DispatcherStores filter > onValue :: "+ JSON.stringify(data.header));
					   if(callback !== null)
						   callback(data);
					   ViewActions.update.push({header: 'view_update'});
				   }
			)
		},
		
		service : function(action, callback)	{
			action.onValue(
				   function(data) { 
					   console.log("DispatcherStores service > onValue :: "+ JSON.stringify(data.header));
					   if(callback !== null)
						   callback(data);
				   }
				)
		}		
	};


//utils
ofType = function (bus, type) {
    return bus.filter(function (data) {
        return data.header == type;
    })
}



module.exports = DispatcherStores;
