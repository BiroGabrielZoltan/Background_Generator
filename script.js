var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("Gradient")
var button = document.getElementById("butt")

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";" ;
}

function setGradientRandom(){

	let r1 = getRandomInt(256);
	let g1 = getRandomInt(256);
	let b1 = getRandomInt(256);
	let r2 = getRandomInt(256);
	let g2 = getRandomInt(256);
	let b2 = getRandomInt(256);

	let hr1 = r1.toString(16);
	if(hr1.length == 1)
		hr1 = "0" + hr1;
	let hg1 = g1.toString(16);
	if(hg1.length == 1)
		hg1 = "0" + hg1;
	let hb1 = b1.toString(16);
	if(hb1.length == 1)
		hb1 = "0" + hb1;

	let hr2 = r2.toString(16);
	if(hr2.length == 1)
		hr2 = "0" + hr2;
	let hg2 = g2.toString(16);
	if(hg2.length == 1)
		hg2 = "0" + hg2;
	let hb2 = b2.toString(16);
	if(hb2.length == 1)
		hb2 = "0" + hb2;

	let randomGradient = "linear-gradient(to right,rgb(" 
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))"; 

	body.style.background = randomGradient;

	color1.value = "#"+ hr1 + hg1 + hb1 ;
	color2.value = "#"+ hr2 + hg2 + hb2 ;

	css.textContent = body.style.background + ";" ;
}

button.addEventListener('click', setGradientRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

