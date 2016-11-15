// var gear = {

// 	test: "test",
// 	raf: null,

// 	images: [],
// 	audios: [],

// 	init: function() {
// 		gear.events.on("step", gear.load.step);

// 		window.raf = (function() {
// 			return  window.requestAnimationFrame       ||
// 		          	window.webkitRequestAnimationFrame ||
// 		          	window.mozRequestAnimationFrame    ||
// 		          	function( callback ){
// 		            	window.setTimeout(callback, 1000 / 60);
// 		          	};
// 		})();

// 		gear.load.image("img", "img/2.png")

// 		gear.loop();
// 	},

// 	loop: function() {
// 		gear.events.trigger("step");
// 		window.raf( gear.loop );
// 	}

// };

function GEAR() {
	this.version = "0.0.1";

	this.images = [];
	this.audios = [];

	this.load = new Loader(this);
}

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
		this.total++;

		var styleNode = document.createElement("style");
		styleNode.type = "text/css";

		styleNode.textContent = "@font-face { font-family: '" + name + "'; src: " + src + " }";
		document.head.appendChild(styleNode);
	},
}

function State(app) {
	this.app = app;
}