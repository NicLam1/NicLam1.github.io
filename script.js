let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let behind = document.getElementById("behind");
let front = document.getElementById("front");
let text = document.getElementById("textBanner");
let btn = document.getElementById("exploreBtn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = -20 + value * -0.02 + "%";
  moon.style.top = value * 0.4 + "px";
  moon.style.marginLeft = value * 0.1 + "px";
  moon.style.rotate = value * 0.02 + "deg";
  behind.style.top = value * 0.2 + "px";
  front.style.top = value * 0.05 + "px";
  text.style.marginRight = value * 0.7 + "px";
  text.style.marginTop = value * 1 + "px";
  btn.style.marginTop = 5 + value + "%";
  btn.style.marginLeft = value * 0.7 + "px";
});




function draw() {

  var x = mouse.x,
      y = mouse.y;
      
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();