gear.state = {

	states: [],
	current: {},

	add: function(name, state) {
		this.states[name] = state;
		if (this.states[name].preload)
			this.preload(name);
	},

	preload: function(name) {
		this.states[name].preload();
	},

	start: function(name) {
		this.current = this.states[name];
		this.current.init();
	}

};