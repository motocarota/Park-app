(function(){
	app.user = Backbone.Model.extend({
		defaults: {
			vehicles: {}
		},
		initialize: function() {
			// this.set( { 'vehicles': new app.collections.vehicles() } );
		},
		currentVehicle: function(){
			return null;
		}
	});
})();