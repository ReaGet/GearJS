function Draw(app) {
	this.app = app;

	this.color = "#000";
	this.lineWidth = 1;

	this.imageSmoothEnabled = function(bool) {
		this.app.ctx.mozImageSmoothingEnabled = bool;
		this.app.ctx.webkitImageSmoothingEnabled = bool;
		this.app.ctx.msImageSmoothingEnabled = bool;
		this.app.ctx.imageSmoothingEnabled = bool;
	};

	this.clear = function(color) {
		if (color) {
			this.app.ctx.fillStyle = color;
			this.app.ctx.fillRect(0, 0, this.app.viewport.x, this.app.viewport.y);
		} else
			this.app.ctx.clearRect(0, 0, this.app.viewport.x, this.app.viewport.y);
	};

	this.rect = function(x, y, w, h, fill) {
		if (!fill) {
			this.app.ctx.fillStyle = this.color;
			this.app.ctx.fillRect(x, y, w, h);
		} else {
			this.app.ctx.lineWidth = this.lineWidth;
			this.app.ctx.strokeStyle = this.color;
			this.app.ctx.strokeRect(x, y, w, h);
		}
	};

	this.roundRect = function(x, y, width, height, radius, fill) {
		if (typeof radius === "undefined")
			radius = 5;
		this.app.ctx.beginPath();
		this.app.ctx.moveTo(x + radius, y);
		this.app.ctx.lineTo(x + width - radius, y);
		this.app.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		this.app.ctx.lineTo(x + width, y + height - radius);
		this.app.ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		this.app.ctx.lineTo(x + radius, y + height);
		this.app.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		this.app.ctx.lineTo(x, y + radius);
		this.app.ctx.quadraticCurveTo(x, y, x + radius, y);
		this.app.ctx.closePath();
		if (!fill) {
			this.app.ctx.fillStyle = this.color;
			this.app.ctx.fill();
		}
		else {
			this.app.ctx.strokeStyle = this.color;
			this.app.ctx.stroke();
		}
	};

	this.circle = function(x, y, r, fill) {
		this.app.ctx.beginPath();
		if (!fill) {
			this.app.ctx.fillStyle = this.color;
			this.app.ctx.arc(x, y, r, 0, 2 * Math.PI);
			this.app.ctx.fill();
		} else {
			this.app.ctx.lineWidth = this.lineWidth;
			this.app.ctx.strokeStyle = this.color;
			this.app.ctx.arc(x, y, r, 0, 2 * Math.PI);
			this.app.ctx.stroke();
		}
		this.app.ctx.closePath();
	};

	this.text = function(text, x, y, size) {
		this.app.ctx.font = size + "px Arial";
		this.app.ctx.fillStyle = this.color;
		this.app.ctx.fillText(text, x, y);
	};
}