(function(){

	window.app = {
		user: {},
		models: {},
		views: {},
		collections: {}
		//...
	};
	
	app.Router = Backbone.Router.extend({
		initialize: function() { },
		
		routes: {
			"": 			"init",
			"page-0": 		"page0",
			"page-1": 		"page1",
			"page-2": 		"page2",
			"page-3": 		"page3",	//NOTA: si potrebbe fare in modo MOLTO piu' furbo 
			"vehicle/:id": 	"vehicle",	//usando tipo <--- ma per ora lasciamo perdere
			"options": 		"options",
			"help": 		"help"
		},
		
		status: {
			pages: []
		},
		
		
		openPage: function(pageNumber) {
		  this.navigate("page-" + pageNumber);
		},
		
		init: function( ) { 
			console.log('loading')
			
			// setTimeout( "$.mobile.navigate('#page-1')", 1000);
			// openPage( 1 )
			this.navigate("page-1");
			
		},
		
		page0: function( ) { 
			console.log('DIOPORCO')
			// if ( !app.user ) {
			// 	$.mobile.navigate("#");
			// 	return;
			// }
			if ( !this.status.pages[0] ) {
				this.status.pages[0] = {};
				var view = this.status.pages[0].view = new app.views.Page0({ model: new app.models.Page0() });
				$( view.el ).attr( "id", "page-0" );
				this.createPage( view );
			}
			this.changePage( this.status.pages[0].view );
			this.status.pages[0].view.render( );
		},
		
		page1: function( ) { 
			// if ( !app.user ) {
			// 	$.mobile.navigate("#");
			// 	return;
			// }
			if ( !this.status.pages[1] ) {
				this.status.pages[1] = {};
				var m = new app.models.Page1();
				var view = this.status.pages[1].view = new app.views.Page1({ model: m });
				$( view.el ).attr( "id", "page-1" );
				this.createPage( view );
			}
			this.changePage( this.status.pages[1].view );
			this.status.pages[1].view.render( );
		},
		
		page2: function( ) { 
		
			if ( !app.user ) {
				$.mobile.navigate("#");
				return;
			}
			if ( !this.status.pages[2] ) {
				this.status.pages[2] = {};
				var view = this.status.pages[2].view = new app.views.Page2({ model: new app.models.Page2() });
				$( view.el ).attr( "id", "page-2" );
				this.createPage( view );
			}
			this.changePage( this.status.pages[2].view );
			this.status.pages[2].view.render( );
		},
		
		page3: function( ) { 
		
			if ( !app.user ) {
				$.mobile.navigate("#");
				return;
			}
			if ( !this.status.pages[3] ) {
				this.status.pages[3] = {};
				var view = this.status.pages[3].view = new app.views.Page3({ model: new app.models.Page3() });
				$( view.el ).attr( "id", "page-3" );
				this.createPage( view );
			}
			this.changePage( this.status.pages[3].view );
			this.status.pages[3].view.render( );
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
				// $.mobile.navigate('#page-1');
				// console.log("OP",$(page.el))
				// $.mobile.navigate( page.el, {
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