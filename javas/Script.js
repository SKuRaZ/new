document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Show menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Hide menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));
});




// HOVER
// HOVER
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";
});
// HOVER POINTER

// canvas


var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 10,
    parts = new Array,
    values = ['0', '1', ';</>', '</>', '</>', 'console.log("Hello, world!");', 'if (condition) {', 'for (var i = 0; i < 10; i++) {', 'function myFunction() {'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function create() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      value: values[Math.floor(Math.random() * values.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0, 0, w, h);
  canvas.addEventListener('mousemove', MouseMove, false);

  for(var i = 0; i < arc; i++) {
    var li = parts[i];
    
    var distanceFactor = DistanceBetween(mouse, parts[i]);
    var fontSizeMultiplier = window.innerWidth >= 668 ? Math.max(Math.min(15 - (distanceFactor / 10), 10), 1) : 1;

    ctx.font = li.size * fontSizeMultiplier + 'px Arial';
    ctx.fillStyle = 'black';

    ctx.fillText(li.value, li.x, li.y);

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (li.x > w) {
      li.x = 0; 
    }
    if (li.y > h) {
      li.y = 0; 
    }
    if (li.x < 0) {
      li.x = w; 
    }
    if (li.y < 0) {
      li.y = h; 
    }
  }

  if (time < speed) {
    time++;
  }

  setTimeout(particles, 1000 / rate);
}

function MouseMove(e) {
  mouse.x = e.layerX;
  mouse.y = e.layerY;
}

function DistanceBetween(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

create();
particles();