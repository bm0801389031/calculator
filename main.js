//#########
//## DOM ##
//#########

// query selector points at screen class, shows calculations 
const screen = document.querySelector(".screen");
// data attribute: data-number, which points at
// the number divs in the calculator
const numberButtons = document.querySelectorAll("[data-number]");
// data attribute: data-operator points at all the operators
const operatorButtons = document.querySelectorAll("[data-operator]");
// data attribute: which points at the clear div/button
const clearButton = document.querySelector("[data-clear]");
// data attribute: which points at the delete div/button
const deleteButton = document.querySelector("[data-delete]");
// this points to the point div/button
const pointButton = document.querySelector("[data-point]");
// this points at the pluss minus div/button
const plusMinusButton = document.querySelector("[data-plusminus]");
// this points at the equals div/button
const resultButton = document.querySelector("[data-result]");
// emtpy string variable to hold the first input number
let firstOperand = "";
// empty string variable to hold the second input number
let secondOperand = "";
// empty varible to hold the value of operator
var operator = null;

// emty variable string to hold the result
let result = "";
// veriable named should clear screen set to false
let shouldClearScreen = false;

// event listener set for each div 0-9; listening for clicks
// once a div has bin clicked the function addNumbers is called
// with the parameter of the textcontenct of that div
// displaying the number from that div on the calc screen
numberButtons.forEach((button) =>
    button.addEventListener("click", () => addNumber(button.textContent))
); 

// adds an event listener to all 4 div/buttons
// when a operator is clicked on setOperator function is
// called with argument of the text content of the div node
// ie [+, /, *, -]
operatorButtons.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.textContent))
);
// adds and event listener click to clearButton 
// which calls the clearData function
clearButton.addEventListener("click", clearData);
// adds an event listener to deletbutton div 
// uppon a click deleteCharacter is called
deleteButton.addEventListener("click", deleteCharacter);
// adds an event listener to the point div
// uppon a click addPoint function if called
pointButton.addEventListener("click", addPoint);
// adds an event listener to the equals div/button
// once it hears the equal click calls on giveResult
resultButton.addEventListener("click", giveResult);
// this event litener calles changeSign appon a click
plusMinusButton.addEventListener("click", changeSign);

//###############
//## Functions ##
//###############

// assignes an empty string to screen div
// and changes the shouldClearScreen variable back to true
function clearScreen() {
    screen.textContent = "";
    shouldClearScreen = false;
}
// this function is called when clear div is clicked
// inturn calls clearScreen() function
// and assignes en empty string to firstOperand variable
// and secondOperand variable 
// also reasigns the operator back to null
function clearData() {
    clearScreen();
    firstOperand, secondOperand = "";
    operator = null;
}
// this function add numbers to the screen, the numbers
// that are clicked on, as long as the shouldClearScrean variable
// is set to false or screen.textContent is equal to '0'
// which would call on clearScreen function() 
// code that is runned if everything is good 
// would be textContent plus equals number 'adding the number
// to the html div node'
function addNumber(number) {
    if (shouldClearScreen || screen.textContent === "0") clearScreen();
    screen.textContent += number;
}
// conditional if shouldCrearScrean variable is set to true
// run the clearScrean function
// screen.textContent equals empty string reasign
// screen.textContent to a string holding '0'
// also checks to see if screen.textContent has an
// array element holding '.' if it does stop runnint the 
// function by returning
// code to run if all my conditions were met 
// screen.textContent += '.'
function addPoint() {
    if (shouldClearScreen) clearScreen();
    if (screen.textContent === "") screen.textContent = "0";
    if (screen.textContent.includes(".")) return;
    screen.textContent += ".";
}

// when delete div eventhandler gets called 
// screen.textContent the string passed through slice
// which removes the last character once for every
// time the event handler hears a click
function deleteCharacter() {
    screen.textContent = screen.textContent.slice(0, -1);
}
// this function adds an element to the
// variable firstoperand, and that variable added is
// what is on the screen.. this function also adds
// the argument passed through this function to the 
// operator variable 
// and changes the variable shouldClearScreen to true [
// basically calling clearScreen in some functions when 
// there is anything in the screen]
function setOperator(symbol) {
    if (operator !== null) giveResult();
    firstOperand = screen.textContent;
    operator = symbol;
    shouldClearScreen = true;
}

// this is called when equal is clicked
// conditional shouldClearScrean must be false
// and operator have a value to continue
// code to run: secondOperand gets assigned the value
// of the textContent of of the screen div
function giveResult() {
    if (shouldClearScreen || operator === null) return;
    secondOperand = screen.textContent;
    // result gets assigned what operate function returns
    result = operate(firstOperand, secondOperand, operator);
    // screen.textContent gets reasigned the result value
    screen.textContent = result;
    // and operator reasigned null
    operator = null;
}
// this function adds a minus sign to the 
// front of the number, or it takes it away if 
// there is already a minus sign
function changeSign() {
    if (screen.textContent[0] === "-") {
        screen.textContent = screen.textContent.slice(1,);
    } else {
        screen.textContent = "-" + screen.textContent;
    } 
}
// ** have not figgured out the bug that is created*
// ** by not having +a and +b  *********************
// this is called by the operate function
function add (a, b) {
	return +a + +b;
}
// this subtact is only called by the operate functon
function subtract (a, b) {
	return a - b;
}
// this multipy is only called by the operate function
function multiply (a, b) {
    return a * b;
}
// this divide is only called by the operate function
function divide (a, b) {
    return a / b;
}
// switch stament evaluates my expression in this case 'my
// operator' and checks wich operator matches then
// calls the provided function
function operate (a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        default:
            return null;
    }
}