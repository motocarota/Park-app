$(document).on(
	//questo disattiva la navigazione di base di jquery mobile
	//link: http://demos.jquerymobile.com/1.4.0/backbone-requirejs/
	"mobileinit",
	function() {
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;	  
	}
);

$(document).ready(function() {
	jQuery.support.cors = true;
	jQuery.ajaxSetup({cache: false});
	
	tpl.loadTemplates([
		'page0', 'page1', 'page2', 'page3', 'options', 'help', 'vehicle', 'header', 'footer'
	], function() {
		new app.Router();
	});
});
