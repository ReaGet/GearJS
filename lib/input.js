function Input(canvas) {
  this.mouse = {
  	func: function() {
  		console.log(canvas);
  	}
  };

  this.touch = {
    
  }
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