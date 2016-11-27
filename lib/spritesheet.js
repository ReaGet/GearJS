function Spritesheet(app) {
	this.app = app;

	var image,
		fWidth,
		fHeight,
		tickCount = 0,
		currentFrame = 0,
		totalFrames = 0;

	var row = 0,
		col = 0,
		rows = 0,
	    cols = 0;

	this.set = function(image, fWidth, fHeight) {
		image = image;
		fWidth = fWidth;
		fHeight = fHeight;
		rows = Math.round(image.height / fHeight);
		cols = Math.round(image.width / fWidth);

		totalFrames = rows * cols;
	};
	
	this.animate = function(frameSpeed) {

		tickCount++;

		if (tickCount > frameSpeed) {
			tickCount = 0;
			currentFrame++;
			currentFrame %= totalFrames;

			row = Math.round(currentFrame / rows);
			col = Math.round(currentFrame % cols); 
		}

	};

	this.frame = function(frame) {

	};

	this.draw = function(x, y) {
		this.app.ctx(image, col * fWidth, 
							row * fHeight,
							fWidth, fHeight, 
							x, y,
							fWidth, fHeight);
	};

}