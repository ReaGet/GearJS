gear.load = {

	total: 0,
	queue: 0,
	progress: 0,

	image: function(name, src) {
		this.total++;

		var _self = gear.load;

		var image = new Image();
		image.src = src;

		image.onload = function() {
			_self.queue++;
			gear.images[name] = image;
			console.log("image loaded!");
		}
	},

	audio: function(name, src) {
		this.total++;

		var _self = gear.load;

		var audio = new Audio(src);
		audio.onloadeddata = function() {
			_self.queue++;
			gear.audios[name] = audio;
			console.log("audio loaded!");
		}

	},

	font: function(name, src) {
		this.total++;
		this.app.images.push({ name: name, src: src });
	},

	step: function() {
		this.progress = this.queue / this.total;
		console.log(this.progress);
	}

};