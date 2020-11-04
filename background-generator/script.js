var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function generateRandomRGB(){
var randomRed=Math.floor(Math.random() * 256);
var randomGreen=Math.floor(Math.random() * 256);
var randomBlue=Math.floor(Math.random() * 256);
var hex=fullHex(randomRed,randomGreen,randomBlue);
return hex;
}

function rgbToHex (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
}

function generateRandomGradient() {
color1.value="#"+generateRandomRGB();
color2.value="#"+generateRandomRGB();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function fullHex(r,g,b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}
setGradient(); //enough for part 1 and 2 :p
button.addEventListener("click",generateRandomGradient);
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);