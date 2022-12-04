var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -10; // unit: seconds/360 degrees
var imgWidth = 100; // width of images (unit: px)
var imgHeight = 110; // height of images (unit: px)

// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 500);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

function init(delayTime) {
  for (var i = 0; i < aImg.length; i++) {
    aImg[i].style.transform = "rotateY(" + (i * (360 / aImg.length)) + "deg) translateZ(" + radius + "px)";
    aImg[i].style.transition = "transform 1s";
    aImg[i].style.transitionDelay = delayTime || (aImg.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spin-reverse');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
    sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function () {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};
