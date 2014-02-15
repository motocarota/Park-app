$(document).ready(function() {
	jQuery.support.cors = true;
	jQuery.ajaxSetup({cache: false});
	
	tpl.loadTemplates([
		'page0', 'page1', 'page2', 'page3', 'options', 'help', 'vehicle', 'header', 'footer'
	], function() {
		new app.Router();
		Backbone.history.start( );
	});
	
	$.mobile.ajaxEnabled = false;
	$.mobile.linkBindingEnabled = false;
	$.mobile.hashListeningEnabled = false;
	$.mobile.pushStateEnabled = false;	 
});
