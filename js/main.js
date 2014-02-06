$(document).on('pageinit', function() { 

	window.app = {};
	app.views = {};

	var PositionModel = Backbone.Model.extend({
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
	
	app.views.PositionView = Backbone.View.extend({
		el: '#page-0-content',
		initialize: function(){
			this.render();
		},
		template: _.template( "hello: <%= positionLon %>" ),
		render: function(){
			this.$el.html( this.template( this.model.attributes ) );
		}
	});
	
	
	
	var pm = new PositionModel( { positionLon: 9999 } );
	var pv = new app.views.PositionView( { model: pm } );
	//pv.render();
	app.pm = pm

});