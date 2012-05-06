;(function(global) {

	global.Filmweb = {
		
		skipAdv : function() {
			if (typeof console != "undefined") {
				console.info("skipping adv");
			}
			$("#goToLink.welcomeScreenButton").click();
		}
	}
	
})(this);

// skip advertisement

this.skipAdv();
