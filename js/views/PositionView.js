(function(){
	app.views.PositionView = Backbone.View.extend({
		el: '#page-0',
		initialize: function(){
			this.render();
		},
		template: _.template( "hello: <%= positionLon %>" ),
		render: function(){
			this.$el.html( this.template( this.model.attributes ) );
		}
	});
})();