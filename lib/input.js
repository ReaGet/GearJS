function Input(app) {
	this.app = app;

	var _self = this;

	var mouseEnable = false,
		touchEnable = false;

	var keys = [];

	this.x = null;
	this.y = null;

	this.leftButton = null;
	this.middleButton = null;
	this.rightButton = null;

	this.enableScale = function() {
		_self.scale = true;
	};

	this.desableScale = function() {
		_self.scale = false;
	};

	this.enableMouse = function() {
		mouseEnable = true;
		window.addEventListener("mousedown", function(e) {
			e.preventDefault();
			switch(e.button) {
				case 0:
					_self.leftButton = true;
					break;
				case 1:
					_self.middleButton = true;
					break;
				case 2:
					_self.rightButton = true;
					break;
			}
		}, false);
		window.addEventListener("mousemove", function(e) {
			_self.x = (e.pageX - _self.app.canvas.offsetLeft);
			_self.y = (e.pageY - _self.app.canvas.offsetTop);
			if (_self.scale) {
				_self.x /= _self.app.SCALE;
				_self.y /= _self.app.SCALE;
			}
		}, false);
		window.addEventListener("mouseup", function(e) {
			e.preventDefault();
			switch(e.button) {
				case 0:
					_self.leftButton = false;
					break;
				case 1:
					_self.middleButton = false;
					break;
				case 2:
					_self.rightButton = false;
					break;
			}
		}, false);
	};

	this.desableMouse = function() {
		mouseEnable = false;
		window.removeEventListener("mousedown", function(e) {
			e.preventDefault();
			switch(e.button) {
				case 0:
					_self.leftButton = true;
					break;
				case 1:
					_self.middleButton = true;
					break;
				case 2:
					_self.rightButton = true;
					break;
			}
		}, false);
		window.removeEventListener("mousemove", function(e) {
			_self.x = e.pageX;
			_self.y = e.pageY;
		}, false);
		window.removeEventListener("mouseup", function(e) {
			e.preventDefault();
			switch(e.button) {
				case 0:
					_self.leftButton = false;
					break;
				case 1:
					_self.middleButton = false;
					break;
				case 2:
					_self.rightButton = false;
					break;
			}
		}, false);
	};

	this.enableTouch = function() {
		touchEnable = true;		
	};

	this.desableTouch = function() {
		touchEnable = false;		
	};

	this.mouse = {

  	};

  	this.touch = {
		    
  	};

  	// KEYBOARD

  	this.enableKeyboard = function() {
  		window.addEventListener('keydown', keydown, false);
  		window.addEventListener('keyup', keyup, false);
  	};

  	this.desableKeyboard = function() {
  		window.removeEventListener('keydown', keydown, false);
  		window.removeEventListener('keyup', keyup, false);		
  	};

  	this.isKeyDown = function(keyCode) {
  		return keys[keyCode];
  	};

  	this.isKeyUp = function(keyCode) {
  		return keys[keyCode];
  	};

  	function keydown(e) {
  		keys[e.keyCode] = true;
  	}

  	function keyup(e) {
  		delete keys[e.keyCode];
  	}

  	this.key = {
	  	BACKSPACE: 8,
	  	TAB: 9,
	  	ENTER: 13,
	  	COMMAND: 15,
	  	SHIFT: 16,
	  	CONTROL: 17,
	  	ALTERNATE: 18,
	  	PAUSE: 19,
	  	CAPS_LOCK: 20,
	  	NUMPAD: 21,
	  	ESCAPE: 27,
	  	SPACE: 32,
	  	PAGE_UP: 33,
	  	PAGE_DOWN: 34,
	  	END: 35,
	  	HOME: 36,

	  	//arrows
	  	LEFT: 37,
	  	UP: 38,
	  	RIGHT: 39,
	  	DOWN: 40,

	  	INSERT: 45,
	  	DELETE: 46,

	  	//numbers
	  	NUMBER_0: 48,
	  	NUMBER_1: 49,
	  	NUMBER_2: 50,
	  	NUMBER_3: 51,
	  	NUMBER_4: 52,
	  	NUMBER_5: 53,
	  	NUMBER_6: 54,
	  	NUMBER_7: 55,
	  	NUMBER_8: 56,
	  	NUMBER_9: 57,

	  	//letters
	  	A: 65,
	  	B: 66,
	  	C: 67,
	  	D: 68,
	  	E: 69,
	  	F: 70,
	  	G: 71,
	  	H: 72,
	  	I: 73,
	  	J: 74,
	  	K: 75,
	  	L: 76,
	  	M: 77,
	  	N: 78,
	  	O: 79,
	  	P: 80,
	  	Q: 81,
	  	R: 82,
	  	S: 83,
	 	T: 84,
	  	U: 85,
	  	V: 86,
	  	W: 87,
	  	X: 88,
	  	Y: 89,
	  	Z: 90,

	  	LEFT_WINDOW_KEY: 91,
	  	RIGHT_WINDOW_KEY: 92,
	  	SELECT_KEY: 93,

	  	//number pad
	  	NUMPAD_0: 96,
	  	NUMPAD_1: 97,
	  	NUMPAD_2: 98,
	  	NUMPAD_3: 99,
	  	NUMPAD_4: 100,
	  	NUMPAD_5: 101,
	  	NUMPAD_6: 102,
	  	NUMPAD_7: 103,
	  	NUMPAD_8: 104,
	  	NUMPAD_9: 105,
	  	NUMPAD_MULTIPLY: 106,
	  	NUMPAD_ADD: 107,
	  	NUMPAD_ENTER: 108,
	  	NUMPAD_SUBTRACT: 109,
	  	NUMPAD_DECIMAL: 110,
	  	NUMPAD_DIVIDE: 111,

	  	//function keys
	  	F1: 112,
	  	F2: 113,
	  	F3: 114,
	  	F4: 115,
	  	F5: 116,
	  	F6: 117,
	  	F7: 118,
	  	F8: 119,
	  	F9: 120,
	  	F10: 121,
	  	F11: 122,
	  	F12: 123,
	  	F13: 124,
	  	F14: 125,
		F15: 126,

	  	NUM_LOCK: 144,
	  	SCROLL_LOCK: 145,

	 	//punctuation
	 	SEMICOLON: 186,
	 	EQUAL: 187,
	 	COMMA: 188,
	 	MINUS: 189,
		PERIOD: 190,
	  	SLASH: 191,
	  	BACKQUOTE: 192,
	 	LEFTBRACKET: 219,
	 	BACKSLASH: 220,
		RIGHTBRACKET: 221,
		QUOTE: 222
  	};

}


// utils.captureMouse = function (elem) {
//   var mouse = { x: 0, y: 0, clicked: false, toggle: false };

//   elem.addEventListener('mousedown', function(e) {
//     if (utils.contain(mouse.x, mouse.y, { x: 10, y: 10, width: 50, height: 50 })) {
//       if (!utils.isFullscreen) {
//           utils.isFullscreen = true;
//           if (elem.requestFullScreen) elem.requestFullScreen();
//           else if (elem.webkitRequestFullScreen) elem.webkitRequestFullScreen();
//           else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
//           else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
//         } else {
//           utils.isFullscreen = false;
//           if (document.exitFullscreen) document.exitFullscreen();
//           else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
//           else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
//           else if (document.msExitFullscreen) document.msExitFullscreen();
//         }
//     }
//     if (utils.contain(mouse.x, mouse.y, { x: 10, y: 70, width: 50, height: 50 })) {
//       Game.muted = !Game.muted;
//     }
//     mouse.clicked = true;
//   });

//   elem.addEventListener('mouseup', function(e) {
//     mouse.clicked = false;
//   });

//   elem.addEventListener('mousemove', function(e) {
//     var x, y;

//     if (e.pageX || e.pageY) {
//       x = e.pageX;
//       y = e.pageY;
//     } else {
//       x = e.clientX + document.body.scrollLeft + document.documentElemnt.scrollLeft;
//       y = e.clientY + document.body.scrollTop + document.documentElemnt.scrollTop;
//     }

//     x -= elem.offsetLeft;
//     y -= elem.offsetTop;
//     mouse.x = x;
//     mouse.y = y;
//   }, false);

//   return mouse;
// };

// utils.captureTouch = function (elem) {
//   var touch = { x: null, y: null, isPressed: false };

//   elem.addEventListener('touchstart', function(e) {
//     touch.isPressed = true;
//   }, false);

//   elem.addEventListener('touchend', function(e) {
//     touch.isPressed = false;
//     touch.x = null;
//     touch.y = null;
//   }, false);

//   elem.addEventListener('touchmove', function(e) {
//     var x, y, touch_event = e.touches[0];

//     if (touch_event.pageX || touch_event.pageY) {
//       x = touch_event.pageX;
//       y = touch_event.pageY;
//     } else {
//       x = touch_event.clientX + document.body.scrollLeft + document.documentElemnt.scrollLeft;
//       y = touch_event.clientY + document.body.scrollTop + document.documentElemnt.scrollTop;
//     }
//     x -= elem.offsetLeft;
//     y -= elem.offsetTop;

//     touch.x = x;
//     touch.y = y;
//   }, false);

//   return touch;
// };