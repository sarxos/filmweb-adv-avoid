// ==UserScript==
// @name           FilmWeb Adv Avoid
// @namespace      http://www.sarxos.pl/filmweb-adv-avoid
// @description    Remove welcome advertisement from filmweb.pl
// @include        http://www.filmweb.pl/*
// @resource       script https://raw.github.com/sarxos/filmweb-adv-avoid/master/script.js
// ==/UserScript==

;(function() {
	var e = document.createElement("script");
	e.type="text/javascript";
	e.innerHTML = GM_getResourceText("script");;
	document.getElementsByTagName("head")[0].appendChild(e);
})();
