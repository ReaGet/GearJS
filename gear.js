function GEAR() {
	var app = this;

	var canvas = null;
	var ctx = null;
	this.viewport = null;

	this.version = "0.0.1";

	this.images = [];
	this.audios = [];

	this.events = new Events();
	this.load = new Loader(app);
	this.state = new State(app);

	this.init = function() {

		loop();
	};

	var raf = (function() {
		return  window.requestAnimationFrame       ||
        		window.webkitRequestAnimationFrame ||
          		window.mozRequestAnimationFrame    ||
          		function( callback ){
            		window.setTimeout(callback, 1000 / 60);
          		};
	})();

	function loop() {
		// utils.log(app.state.current, 2);
		app.state.current.update();
		app.state.current.render();

		utils.log("log", 3);
		
		raf(loop);
	};

}