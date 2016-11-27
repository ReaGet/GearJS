var config = {
	events: function() { return new Events(); },
	load: function(app) { return new Loader(app); },
	state: function(app) { return new State(app); },
	draw: function(app) { return new Draw(app);	},
	input: function(app) { return new Input(app); }
};