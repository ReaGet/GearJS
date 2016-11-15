gear.events = {

	on: function(name, handler) {
		if (!this._eventHandlers) this._eventHandlers = {};
		if (!this._eventHandlers[name]) {
			this._eventHandlers[name] = [];
		}
		this._eventHandlers[name].push(handler);
	},

	off: function(name, handler) {
		var handlers = this._eventHandlers && this._eventHandlers[name];
		if (!handlers) return;
		for (var i = 0; i < handlers.length; i++) {
			if (handlers[i] == handler) {
				handlers.splice(i--, 1);
			}
		}
	},

	trigger: function(name) {
		if (!this._eventHandlers || !this._eventHandlers[name]) return;
		var handlers = this._eventHandlers[name];
		for (var i = 0; i < handlers.length; i++) {
			handlers[i].apply(this, [].splice.call(arguments, 1));
		}
	}
	
};