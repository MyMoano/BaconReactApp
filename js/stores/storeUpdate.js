

//mixin class
var storeUpdate = {
		
	AddUpdateListener : function(stores, callback) {
		stores.addUpdateListener(callback);
	},
	
	RemoveUpdateListener : function(stores, callback) {
		stores.removeUpdateListener(callback);
	}
		
};


module.exports = storeUpdate;
