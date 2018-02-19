/*Your task is to write a command line calculator application that has two settings, 
- First you will need to ask the user for which calculator they want to use
- Then you will need to ask the user for the numbers to operate on.
- Then you need to work out what to do with the numbers, depending on what operation they choose.

Basic:
- Additon
- Multiplication
- Division
- Subtraction

Advanced:
- Power
- Square root
*/


// functions 

function add(a, b){
    return a + b;
}

function Multi(a, b){
    return a * b;  
}


function divid(a, b){
    return a * b;  
}

function sub(a, b){
    return a - b;  
}

function pow(a, b){
    return Math.pow(a,b);		  
} 

function sqroot(a){
	return Math.sqrt(a);
}

//(b)asic and (a)dvanced modes

var Mode = prompt("Which mode do you require?: Please enter (B) for Basic or A for Advance");


if(Mode == "b" || Mode.charAt(0)){//checks the 1st letter in sting and forces to upper case
	var Mode = Mode.charAt(0).toUpperCase();//get char at index 0 and changes to caps
	console.log(Mode); //for debuging only

	if(Mode == "B"){
	alert("Allowed functions: Additon, Multiplication, Division, Subtraction");

}else{
	alert("Allowed functions: Additon, Multiplication, Division, Subtraction, Power,Square Root");

}
}


var Num_1= Number(prompt("Please enter your first number:"));
var op = prompt("Please enter your desised operator. (Example: + , - , /");

if(op != "sqroot"){
	var Num_2= Number(prompt("Please enter your second number:"));
}

switch(op){
	case "+":
	alert("Your Answer is: " + add(Num_1,Num_2));
	break;

	case "-":
	alert("Your Answer is: " + sub(Num_1,Num_2));
	break;

	case "/":
	alert("Your Answer is: " + divid(Num_1,Num_2));
	break;

	case "**":
	alert("Your Answer is: " + pow(Num_1,Num_2));
	break;

	case "*":
	alert("Your Answer is: " + Multi(Num_1,Num_2));
	break;

	case "sqroot":
	alert("Your Answer is: " + sqroot(Num_1));
	break;
}





