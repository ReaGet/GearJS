var gear = {

	test: "test",
	raf: null,

	images: [],
	audios: [],

	init: function() {
		gear.events.on("step", gear.load.step);

		window.raf = (function() {
			return  window.requestAnimationFrame       ||
		          	window.webkitRequestAnimationFrame ||
		          	window.mozRequestAnimationFrame    ||
		          	function( callback ){
		            	window.setTimeout(callback, 1000 / 60);
		          	};
		})();

		gear.load.image("img", "img/2.png")

		gear.loop();
	},

	loop: function() {
		gear.events.trigger("step");
		window.raf( gear.loop );
	}

};