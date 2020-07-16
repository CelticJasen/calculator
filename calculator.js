const displayScreen = document.getElementById("displayText");
let displayText = "";
let operator = "";
let firstNumber = 0;
let secondNumber = 0;

document.getElementById("seven").addEventListener("click", function() {changeText('7');});
document.getElementById("eight").addEventListener("click", function() {changeText('8');});
document.getElementById("nine").addEventListener("click", function() {changeText('9');});
document.getElementById("four").addEventListener("click", function() {changeText('4');});
document.getElementById("five").addEventListener("click", function() {changeText('5');});
document.getElementById("six").addEventListener("click", function() {changeText('6');});
document.getElementById("one").addEventListener("click", function() {changeText('1');});
document.getElementById("two").addEventListener("click", function() {changeText('2');});
document.getElementById("three").addEventListener("click", function() {changeText('3');});
document.getElementById("zero").addEventListener("click", function() {changeText('0');});
document.getElementById("delete").addEventListener("click", backspace);
document.getElementById("decimal").addEventListener("click", function() {changeText('.');});
document.getElementById("clearButton").addEventListener("click", clear);
document.getElementById("add").addEventListener("click", function() {operatorToUse('+');});
document.getElementById("subtract").addEventListener("click", function() {operatorToUse('-');});
document.getElementById("multiply").addEventListener("click", function() {operatorToUse('x');});
document.getElementById("divide").addEventListener("click", function() {operatorToUse('÷');});
document.getElementById("equals").addEventListener("click", operate);

function add (a, b){
	return a+b;
}

function subtract (a, b){
	return a-b;
}

function multiply (a, b){
	return a*b;
}

function divide (a, b){
	if(a === 0 || b === 0){
		return "Ouch...";
	}

	return a/b;
}

function changeText(string){
	if(!displayText.includes(".") || string !== "."){
		if(displayText.length <= 10){
			displayText += string;
			display();
		}
	}
}

function operatorToUse(string){
	firstNumber = Number(displayText);
	operator = string;
	displayText = "";
}

function backspace(){
	if(displayText.length < 2){
		displayText = "";
		displayScreen.innerHTML = "0";
	}else{
		displayText = displayText.substring(0, displayText.length - 1);
		display();
	}
}

function clear(){
	displayText = "";
	displayScreen.innerHTML = "0";
	firstNumber = 0;
	secondNumber = 0;
}

function display(){
	displayScreen.innerHTML = displayText;
}

function operate(){
	secondNumber = Number(displayText);

	if(operator === "+"){
		displayText = add(firstNumber, secondNumber).toString();
		display();
	}else if(operator === "-"){
		displayText = subtract(firstNumber, secondNumber).toString();
		display();
	}else if(operator === "x"){
		displayText = multiply(firstNumber, secondNumber).toString();
		display();
	}else if(operator === "÷"){
		displayText = divide(firstNumber, secondNumber).toString();
		display();
	}

	firstNumber = 0;
	secondNumber = 0;
}