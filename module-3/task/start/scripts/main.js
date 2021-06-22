const productName = 'Baked Beans'; //Creates an unchanging piece of data, with type String
let price = 1.50; //Creates a variable, with type Number
let quantity = 3;

let inStock = true; //Creates a variable, with type Boolean
let discountAmount = 0.20;

//console.log(productName); //Calls up data, regardless of type
//console.log(price);
//console.log(inStock);

//typeof example
//console.log(typeof productName);
//console.log(typeof price);
//console.log(typeof inStock);
//Calls up type of data in console



//console.log("Hello World"); //This prints a message to the console.log
//document.write("Hello World"); //This prints a message to the screen
// This is a single line comment
/*
This
Is
A
Multiple
Line
Comment
*/

//function showProductName() {
//    console.log(productName);
//}

//showProductName();

//function myName(name, age){
//    console.log('Hi, my name is', name, 'and I am', age);
//}

//myName('Dave', 34);

//function
/*let firstName = 'Stewart';

function greeting( name ) {
    console.log( name );
}

greeting( 'Luke' );
greeting( firstName );*/
//end function

//math function
/*function square( num ) {
    return num * num;
}
let squareFour = square( 4 );
square( 4 );
console.log( squareFour );*/
//end math function

/*function totalPrice(productPrice, productQuantity) {
    console.log(productPrice * productQuantity);
}

totalPrice(price, quantity)*/

//arrow function
/*let totalPrice = (productPrice, productQuantity) => {
    console.log(productPrice * productQuantity);
}

totalPrice(price, quantity)*/
//end arrow function

//ES6 arrow function
//let greeting = name => console.log( name );
//end ES6 arrow function

let checkAvailability = productInStock => console.log(productInStock)

checkAvailability(inStock)

function scope() {
    let productName = 'Towels';
    console.log(productName)
}

scope();


//Practicing IF statements
let num=50

if (num!=50) {
    console.log('If is true');
} else {
    console.log('If is false');
}