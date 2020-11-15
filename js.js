for(var i = 1; i <= 9; i++) {
var random;  random = Math.floor((Math.random() * 2) + 1);
  document.getElementById(i).src = "images/" + random + ".png";
}
