

var DispatcherViews = {
		listener: function(action, callback)	{
			action.onValue(
				   function(data) { 
					   console.log("DispatcherViews listener > onValue :: "+ JSON.stringify(data.header));
					   if(callback !== null)
						   callback(data);
				   }
				)
		},
		
		filter: function(action, filter, callback)	{
			ofType(action, filter).onValue(
					   function(data) { 
						   console.log("DispatcherViews listener > onValue :: "+ JSON.stringify(data.header));
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


	
module.exports = DispatcherViews;
