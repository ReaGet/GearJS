function GEAR() {
	var app = this;

	var canvas = null;
	this.ctx = null;
	this.viewport = null;
	this.container = null;

	var VIEWPORT = null;
	var RESIZABLE = false;
	this.DEVICE_WIDTH = null;
	this.DEVICE_HEIGHT = null;
	this.resizable = false;
	this.SCALE = 1;

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

		VIEWPORT = new Vector(0, 0);
		VIEWPORT.x = this.viewport.x;
		VIEWPORT.y = this.viewport.y;

		RESIZABLE = this.resizable;

		resize();
		window.addEventListener("resize", resize);

		loop();
	};

	function resize() {
		if (!RESIZABLE)
			return;

		this.DEVICE_WIDTH = window.innerWidth;
        this.DEVICE_HEIGHT = window.innerHeight;
        var RATIO = VIEWPORT.x / VIEWPORT.y;
        var ratio = this.DEVICE_WIDTH / this.DEVICE_HEIGHT;

        // WIDTH higher then HEIGHT
        if (ratio > RATIO) {
            this.SCALE = this.DEVICE_HEIGHT / VIEWPORT.y;
        } // HEIGHT higher then WIDTH
        else if (ratio < JUMP.RATIO) {
            this.SCALE = this.DEVICE_WIDTH / VIEWPORT.x;            
        }

        // if (JUMP.android || JUMP.ios) {

        // }

        canvas.style.width = VIEWPORT.x * this.SCALE + 'px';
        canvas.style.height = VIEWPORT.y * this.SCALE + 'px';
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
		if (!app.state.current) {
			app.state.current.update();
			app.state.current.render();
		}
		
		raf(loop);
	};

}