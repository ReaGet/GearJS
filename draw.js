function Draw(app) {
	this.app = app;

	this.color = "#000";

	this.imageSmoothEnabled = function(bool) {
		this.app.ctx.mozImageSmoothingEnabled = bool;
		this.app.ctx.webkitImageSmoothingEnabled = bool;
		this.app.ctx.msImageSmoothingEnabled = bool;
		this.app.ctx.imageSmoothingEnabled = bool;
	};

	this.rect = function(x, y, w, h, fill) {
		if (!fill) {
			this.app.ctx.fillStyle = this.color;
			this.app.ctx.fillRect(x, y, w, h);
		} else {
			this.app.ctx.strokeStyle = this.color;
			this.app.ctx.strokeRect(x, y, w, h);
		}
	};

	this.circle = function(x, y, r, fill) {
		this.app.ctx.beginPath();
		if (!fill) {
			this.app.ctx.fillStyle = this.color;
			this.app.ctx.arc(x, y, r, 0, 2 * Math.PI);
			this.app.ctx.fill();
		} else {
			this.app.ctx.strokeStyle = this.color;
			this.app.ctx.arc(x, y, r, 0, 2 * Math.PI);
			this.app.ctx.stroke();
		}
		this.app.ctx.closePath();
	};
}