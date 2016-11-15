function GEAR() {
	this.version = "0.0.1";

	this.images = [];
	this.audios = [];
	
	this.events = new Events();
	this.load = new Loader(this);
	this.state = new State(this);

}