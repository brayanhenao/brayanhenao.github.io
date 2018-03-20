var numColor = 6;

var color=setupColors();

var squares = document.querySelectorAll(".square");
var pickedColor = color[3];
var displayColor = document.getElementById("displayColor");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColor = document.getElementById("newColor");
var modes = document.querySelectorAll(".mode");

for(var i = 0, length1 = modes.length; i < length1; i++){
	modes[i].addEventListener("click",function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		if(this.textContent==="EASY"){
			numColor = 3;
		}else{
			numColor = 6;
		}
		this.classList.add("selected");
		reset();
	});

}

newColor.addEventListener("click", reset);
reset();

displayColor.textContent = pickedColor;


for (var i = squares.length - 1; i >= 0; i--) {
	squares[i].style.backgroundColor=color[i];
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor === pickedColor) {
			message.textContent="Correcto";
			changeColor(pickedColor);
			h1.style.backgroundcolor= pickedColor;

		} else {
			this.style.backgroundColor="#232323";
			message.textContent="Intenta de nuevo";
		}
	});
}

function changeColor(color){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
}

function setupColors () {
	var colores = [];

	for(var i = 0; i < numColor; i++){
		colores[i]=generateRandomColor();
	}

	return colores;
}

function setupSquares () {
	for(var i = 0, length1 = squares.length; i < length1; i++){
		if(color[i]){
			squares[i].style.backgroundColor = color[i];
		}else{
			squares[i].style.backgroundColor = color[i];
		}
		
	}
}

function generateRandomColor () {
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	
	var color = "rgb("+r+", "+g+", "+b+")";

	return color;
}

function reset() {
	var i = Math.floor(Math.random()*numColor);
	color = setupColors();
	pickedColor = color[2];
	displayColor.textContent = pickedColor;
	message.textContent="";
	h1.style.backgroundcolor= "steelblue";
	setupSquares();
}