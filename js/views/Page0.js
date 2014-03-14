(function(){
	app.views.Page0 = Backbone.View.extend({
		initialize: function(){
			this.template = _.template( tpl.get( 'page0' ) );
		},
		render: function(){
			this.$el.html( this.template( this.model.attributes ) );
			$( tpl.get( 'header' ) ).prependTo( this.$el );
			$( tpl.get( 'footer' ) ).appendTo( this.$el );
			this.$el.trigger('create');
			return this;
		}
	});
})();