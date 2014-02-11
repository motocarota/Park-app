(function(){
	app.views.Page0 = Backbone.View.extend({
		initialize: function(){
			this.template = _.template( tpl.get( 'page0' ) );
		},
		render: function(){
			this.$el.html( this.template( this.model.attributes ) ).trigger('create');
			$( tpl.get( 'header' ) ).prependTo( this.$el ).toolbar({ position: "fixed" });
			$( tpl.get( 'footer' ) ).appendTo( this.$el ).toolbar({ position: "fixed" });
			$.mobile.resetActivePageHeight();
			return this;
		}
	});
})();