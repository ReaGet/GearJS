var utils = {};

function log() {
	var once = false;

	return function(text, delay) {
		if (!once) {
			var timerId = window.setTimeout(function() {
				console.log(text);
				once = false;

				clearTimeout(timerId);
			}, delay * 1000);

			once = true;
		}
	};
}

utils.log = new log();