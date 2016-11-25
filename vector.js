function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y + this.y);
};

Vector.prototype.zero = function() {
	this.x = 0;
	this.y = 0;
};

Vector.prototype.set = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;
};

Vector.prototype.clone = function(vector) {
	this.x = vector.x;
	this.y = vector.y;
};

Vector.prototype.add = function() {
	if (arguments.length == 1) {
		this.x += arguments[0].x;
		this.y += arguments[0].y;
	} else if (arguments.length == 2) {
		this.x += arguments[0];
		this.y += arguments[1];
	}
};

Vector.prototype.subtract = function() {
	if (arguments.length == 1) {
		this.x -= arguments[0].x;
		this.y -= arguments[0].y;
	} else if (arguments.length == 2) {
		this.x -= arguments[0];
		this.y -= arguments[1];
	}
};

Vector.prototype.multiply = function(m) {
	this.x *= m;
	this.y *= m;
};

Vector.prototype.devide = function(d) {
	this.x /= d;
	this.y /= d;
};

Vector.prototype.normalize = function() {
	var length = this.length();
	if (length == 0) this.y = 1;
	this.x /= length;
	this.y /= length;
};

Vector.prototype.getAngle = function() {
	return Math.atan2(this.y, this.x);
};

Vector.prototype.invert = function() {
	this.x = -this.x;
	this.y = -this.y;
};

Vector.prototype.distanceTo = function() {
	var x, y;
	if (arguments.length == 1) {
		x = arguments[0].x;
		y = arguments[0].y;
	} else if (arguments.length == 2) {
		x = arguments[0];
		y = arguments[1];
	}

	return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
};