function GEAR() {
	var app = this;

	var canvas = null;
	this.ctx = null;
	this.viewport = null;
	this.container = null;

	this.resizable = false;

	this.version = "0.0.1";

	this.images = [];
	this.audios = [];

	this.events = new Events();
	this.load = new Loader(app);
	this.state = new State(app);
	this.draw = new Draw(app);

	this.init = function() {
		canvas = document.createElement('canvas');
		canvas.width = this.viewport.x || 0;
		canvas.height = this.viewport.y || 0;
		this.ctx = canvas.getContext('2d');

		if (!this.container) {
			document.body.appendChild(canvas);
		} else {
			this.container.appendChild(canvas);
		}

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