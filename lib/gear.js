function GEAR() {
	var app = this;

	this.canvas = null;
	this.center = null;
	this.ctx = null;
	this.viewport = null;
	this.container = null;

	this.DEVICE_WIDTH = null;
	this.DEVICE_HEIGHT = null;
	this.resizable = false;
	this.SCALE = 1;

	this.version = "0.0.4";

	this.images = [];
	this.audios = [];

	this.events = new Events();
	this.load = new Loader(app);
	this.state = new State(app);
	this.draw = new Draw(app);

	this.init = function() {
		app.canvas = document.createElement('canvas');
		app.canvas.width = app.viewport.x || 0;
		app.canvas.height = app.viewport.y || 0;
		if (app.center) {
			app.canvas.style.position = "absolute";
			app.canvas.style.top = 0;
			app.canvas.style.left = 0;
			app.canvas.style.right = 0;
			app.canvas.style.bottom = 0;
			app.canvas.style.margin = "auto";
		}
		app.ctx = app.canvas.getContext('2d');

		if (!app.container) {
			document.body.appendChild(app.canvas);
		} else {
			app.container.appendChild(app.canvas);
		}

		resize();
		window.addEventListener("resize", resize);

		loop();
	};

	function resize() {
		if (!app.resizable)
			return;

		this.DEVICE_WIDTH = window.innerWidth;
        this.DEVICE_HEIGHT = window.innerHeight;
        var RATIO = app.viewport.x / app.viewport.y;
        var ratio = this.DEVICE_WIDTH / this.DEVICE_HEIGHT;

        // WIDTH higher then HEIGHT
        if (ratio > RATIO) {
            this.SCALE = this.DEVICE_HEIGHT / app.viewport.y;
        } // HEIGHT higher then WIDTH
        else if (ratio < RATIO) {
            this.SCALE = this.DEVICE_WIDTH / app.viewport.x;            
        }

        app.canvas.style.width = app.viewport.x * this.SCALE + 'px';
        app.canvas.style.height = app.viewport.y * this.SCALE + 'px';
	}

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
		if (app.state.current) {
			app.state.current.update();
			app.state.current.render();
		}
		
		raf(loop);
	};

}