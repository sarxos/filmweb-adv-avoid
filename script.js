;(function(global) {

	global.FilmwebAdvAvoid = {
		
		skipAdv : function() {
			if (console) {
				console.info("skipping adv");
			}
			$("#goToLink.welcomeScreenButton").click();
		}
	}
	
})(this);

// skip advertisement

FilmwebAdvAvoid.skipAdv();
