(function(){
	app.views.Page3 = Backbone.View.extend({
		initialize: function(){
			this.template = _.template( tpl.get( 'page3' ) );
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