window.onload = function() {
  var rain = document.getElementById("rain");
  for (var i = 0; i < 50; i++) {
    var drop = document.createElement("div");
    drop.className = "drop";
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDelay = Math.random() * 5 + "s";
    rain.appendChild(drop);
  }
};
