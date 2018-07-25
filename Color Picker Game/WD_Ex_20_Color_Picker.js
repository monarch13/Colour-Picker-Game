var numOfSquares = 6;
var colors;
var pickedColor;
var colorDisplay = document.getElementById("display")
var squares = document.getElementsByClassName("square");
var message = document.querySelector("#message");
var start = document.querySelector("#start");
var button = document.querySelector("#button");
var modeDisplay = document.querySelectorAll(".mode");



init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}


function setUpModeButtons(){
	for(var i=0; i<modeDisplay.length ; i++){

		modeDisplay[i].addEventListener("click",function(){
			modeDisplay[0].classList.remove("selected");
			modeDisplay[1].classList.remove("selected");	
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numOfSquares = 3;
			} 
			else{
				numOfSquares = 6;
			}

			reset();
		})

	}
}


function setUpSquares(){
	for(var i=0 ; i<squares.length; i++){
		squares[i].addEventListener("click",function(){
			if(this.style.background === pickedColor){
				message.textContent = "Correct !";
				changeColor();
				start.style.background = pickedColor;
				button.textContent = "Play Again?";
			}
			else{
				this.style.background = "black";
				message.textContent = "Try Again";
			}
		})
	}
}

function reset(){
	button.textContent = "New Colors";
	message.textContent = "";
	colors = generateColorArr(numOfSquares);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;
	start.style.background = "steelblue";
	for(var i=0 ; i<squares.length ; i++){
		if(colors[i]){			
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";	
		}
	}
	
}

button.addEventListener("click",function(){
	reset();
})

function changeColor(){
	for(var i=0 ; i<squares.length ; i++){
		squares[i].style.background = pickedColor;
	}
}

function pickColor(){
	var num = Math.floor(Math.random() * colors.length);
	return num;
}

function generateColorArr(num){
	var arr = [];
	for(var i=0 ; i<num ; i++){
		arr[i] = SetColor();
	}
	return arr;
}

function SetColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";	
}


