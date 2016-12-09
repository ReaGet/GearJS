function State(app) {
	this.app = app;

	var states = [];
	var time = 0;
	this.current = null;

	this.create = function(name, state) {
		states[name] = state;
		if (states[name].preload)
			this.preload(name);
	};

	this.preload = function(name) {
		states[name].preload();
	};

	this.start = function(name) {
		this.current = states[name];
		console.log(name + " started!");
		if (this.current.init)
			this.current.init();
	};

	this.transition = function(name, inT, outT) {
		time += 0.1;
		app.ctx.fillStyle = "rgba(0, 0, 0, " + (time / inT) + ")";
		app.ctx.fillRect(0, 0, app.viewport.x, app.viewport.y);
		if (time > inT) {			
			this.current = states[name];
			console.log(name + " started!");
			if (this.current.init)
				this.current.init();
		}
	};
}