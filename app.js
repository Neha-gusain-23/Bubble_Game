var score = 0;
var hitrn = 0;

// Event bubbling: when you click on an element, the event will be raised on that element, 
// and if the event is not found, it will look for a listener on the parent element.
function increasescore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}                     

function getnewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

function makebubble() {
  var clutter = "";
  for (var i = 0; i <= 101; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`; // Using dynamic content
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 30;
function runtimer() {
  var timerinter = setInterval(function() {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerinter);
      document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets) {
  var clicked =Number(dets.target.textContent);
  if(clicked ===hitrn){
    increasescore();
    makebubble();
    getnewhit();

  }
  }
);

getnewhit();
runtimer();
makebubble();



//var clicked = Number(dets.target.textContent);
//if (clicked == hitrn) {
  //increasescore();
  //makebubble();
  //getnewhit();