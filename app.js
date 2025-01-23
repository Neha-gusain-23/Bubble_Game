var clutter = "";
for (var i = 0; i <= 101; i++) {
  var rn= Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`; // Using dynamic content
}
document.querySelector("#pbtm").innerHTML = clutter;
