function Loader(app) {

	this.app = app;

	var _self = this; 

	var queue = 0, 
		total = 0;
	
	this.progress = 0;

	this.image = function(name, src) {
		total++;

		var img = new Image();
		
		img.src = src;
		img.onload = function() {
			queue++;
			_self.app.images[name] = img;
			console.log("Image loaded!");
		};
	};

	this.audio = function(name, src) {
		total++;

		var audio = new Audio(src);
		
		audio.onloadeddata = function() {
			queue++;
			_self.app.audios[name] = audio;
			console.log("audio loaded!");
		};
	};

	this.font = function(name, src) {
		var c = document.createElement('canvas'),
			ctx = c.getContext('2d');

		var styleNode = document.createElement("style");
		styleNode.type = "text/css";
		styleNode.textContent = "@font-face { font-family: '" + name + "'; src: url(" + src + "); }";

		document.head.appendChild(styleNode);

		ctx.font = "30px " + name;
		ctx.fillText("Testing text", 0, 0);
	};
}