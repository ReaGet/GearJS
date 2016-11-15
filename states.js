function State(app) {
	this.app = app;

	var states = [];
	var current = {};

	this.add = function(name, state) {
		states[name] = state;
		if (states[name].preload)
			preload(name);
	};

	this.preload = function(name) {
		states[name].preload();
	};

	this.start = function(name) {
		current = states[name];
		current.init();
	};
}