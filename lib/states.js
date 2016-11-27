function State(app) {
	this.app = app;

	var states = [];
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
		// this.current.init();
	};
}