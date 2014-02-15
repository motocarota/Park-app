(function(){

	window.app = {
		user: {},
		models: {
			pages: []
		},
		views: {
			pages: []
		},
		collections: {}
		//...
	};
	
	app.Router = Backbone.Router.extend({
		initialize: function() { },
		
		routes: {
			"": 			"page",
			"page-:id": 	"page",
			"vehicle/:id": 	"vehicle",
			"options": 		"options",
			"help": 		"help"
		},
		
		status: {
			pages: []
		},
		
		page: function( id ) { 
			id = id || 0;
			if ( !this.status[ 'pages'+id ] ) {
				var l = [ "Page0", "Page1", "Page2", "Page3" ];
				this.status[ 'pages'+id ] = {};
				var model = new app.models[ "Page"+id ];
				var view = this.status[ 'pages'+id ].view = new app.views[ "Page"+id ]({ model: model });
				$( view.el ).attr( "id", "page-"+id );
				this.createPage( view );
			}
			this.changePage( this.status[ 'pages'+id ].view );
			this.status[ 'pages'+id ].view.render( );
		},
		
		vehicle: function( id ) { 
			
			if ( !app.user ) {
				$.mobile.navigate("#");
				return;
			}
			if ( !this.status.vehiclePage ) {
				this.status.vehiclePage = {};
				var view = this.status.vehiclePage.view = new app.views.vehiclePage({ model: app.user, vehicleId: id });
				$( view.el ).attr( "id", "vehicle" );
				this.createPage( view );
			}
			this.changePage( this.status.vehiclePage.view );
			this.status.vehiclePage.view.render( );
		},
		
		help: function( ) { 
		
			if ( !app.user ) {
				$.mobile.navigate("#");
				return;
			}
			if ( !this.status.helpPage ) {
				this.status.helpPage = {};
				var view = this.status.helpPage.view = new app.views.helpPage({ model: app.user });
				$( view.el ).attr( "id", "help" );
				this.createPage( view );
			}
			this.changePage( this.status.helpPage.view );
			this.status.helpPage.view.render( );
		},
	
		createPage: function( page ) {
		
			$( page.el ).attr( {'data-role': 'page'} );
			page.render();
			$( 'body' ).append( $(page.el) );
		},

		changePage: function ( page, mode ) {
		
			if ( mode === 'dialog' ) {
				$(page.el).attr('data-role', 'dialog');
				$.mobile.navigate($(page.el), {
					allowSamePageTransition: true,
					reverse: false,
					changeHash: false,
					role: 'dialog',
					transition: this.historyCount++ ? $.mobile.defaultDialogTransition : 'none'
				});
			} else {
				$(page.el).attr('data-role', 'page');
				$.mobile.changePage( $(page.el), {
					changeHash: true,
					transition: this.historyCount++ ? $.mobile.defaultPageTransition : 'none'
				});
			}
		},

		appUpdate: function() {
		
			var app = window.app;
			if ( !app ) {
				return;
			}
		},

		historyCount: 0
	});
})();