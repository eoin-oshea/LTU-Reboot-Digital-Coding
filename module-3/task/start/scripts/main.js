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

/*let checkAvailability = productInStock => console.log(productInStock)

checkAvailability(inStock)

function scope() {
    let productName = 'Towels';
    console.log(productName)
}

scope();*/


/*//Practicing IF statements
let num=50

if (num!=50) {
    console.log('If is true');
} else {
    console.log('If is false');
}

function productDiscount(){
    if(quantity > 1) {
        let newPrice = (price * quantity) - discountAmount;
        console.log(newPrice);
    } else {
        console.log(price * quantity);
    }
}*/

//productDiscount();

//comparing IF and Switch Statements

//let colour = 'orange';

/*if(colour === 'grey') {
    console.log('Correct');
} else if(colour === 'orange') {
    console.log('correct');
} else {
    console.log('incorrect');
}*/

//switch statement
/*switch(colour){
    case 'orange':
        console.log('Correct');
        break;
    case 'grey' :
        console.log('Correct');
        break;
    default:
        console.log('Incorrect');
        break;
}*/

/*function drinkOrder(drink, size) {
    switch(drink){
        case 'cola':
            console.log(drink, size);
            break;
        case 'lemonade':
            console.log(drink, size);
            break;
        case 'orangeade':
            console.log(drink, size);
            break;
        default:
            //console.log("We don't currently have a " + size + " " + drink + " apologies");
            console.log(`We don't currently have a ${size} ${drink}, apologies`);
            break;
    }
}

drinkOrder('cola', 'X-large');
drinkOrder('lemonade', 'Medium');
drinkOrder('orangeade', 'Small');*/

//ES6 standard 

/*function calculator(num1, num2, operator){
    switch(operator){
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case '/':
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        default:
            console.log(`${operator} does not exist`);
            break;
    }
}

calculator(1, 1, '+');
calculator(10, 2, '-');
calculator(30, 5, '/');
calculator(5, 6, '*');*/

/*let firstName = 'Eoin';
let lastName = "O'Shea";

let fullName = firstName + " " + lastName;

console.log(fullName)*/

//Advanced IF operators
/*let temperature = 30;
let season = 'Summer';

if(temperature < 30 || season === 'Spring') {
    //&& is the same as AND, || is the same as OR
    console.log('You should wear just a t-shirt and shorts');
} else if(season !== 'Spring'){
    console.log("It's not Spring");
} else {
    console.log('You should wear trousers and a jumper');
}*/

/*let product = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount
];

console.log(product);

let firstItem = product[0];
let secondItem = product[1];
let lastItem = product[4];*/

let product = {
    productName: 'Apples',
    price: 1.29,
    quantity: 6,
    inStock: true,
    discountAmount: 0.35,
    coloursAvailable: ['Green','Red','Yellow','Pink'],
};

//let yellow = product['coloursAvailable'][2]; //assign a property in an array to a variable

//delete product.price; //how to delete a property from an array

product.price = 2.09; //changing properties in an array

product.shape = 'sphere';

product.shape = ['sphere','cube']; //changing a property to a different type

console.log(product);

let hotel = {
    name:'Quay',
    rooms:40,
    booked:25,
    gym:true,
    roomTypes: ['twin','double','suite'],

    checkAvailability:function() {
        return this.rooms-this.booked;
    }
}

console.log(hotel['checkAvailability']());

/*let nameOfProduct = product.productName;
let discount = product['discountAmount'];*/

//Loops
/*for (let i=0;i<10;i++){
    console.log(i);
}*/

let numbers = [1,2,3,4,5];

for (let counter=0; counter <= 4; counter++) {
    console.log(numbers[counter]);
}