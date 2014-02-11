(function(){
	app.models.Page0 = Backbone.Model.extend({
		defaults: {
			positionLon: 10,
			positionLat: 10
		},
		initialize: function(){
			//interroga il chip GPS  per aggiornare la posizione
			//var result = navigator.geolocation.getCurrentPosition( function(pos){
			//	return pos;
			//});
			//this.set('position', result);
		}
	});
})();