function GEAR() {
	this.version = "0.0.1";

	this.images = [];
	this.audios = [];

	this.load = new Loader(this);
}

function State(app) {
	this.app = app;
}