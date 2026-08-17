//document.getElementById('demo').innerHTML = 'Hello JavaScript';

//let sum= 90+40;
//document.getElementById('demo').innerHTML = 'The sum is: ' + sum;

//let sum= 90+40;
//console.log(sum);

//if (sum > 100) {
//    console.log('Expensive');
//} else {
//    console.log('Cheap');
//}

//document.getElementById('myImage').src='pic_bulbon.gif'";

//document.getElementById('myImage').src='pic_bulboff.gif'";
/*
! Javascripts Strings 
let text = 'He is an Engineer "//from USA//, He is Boy!" ';
console.log(text);
console.log(text.length);
 let x = 'John';
let y = new String("Abraham");
console.log(typeof(x));
console.log(typeof(y));
let b =`Backtrick,He's often called "Johnny"`;
console.log(b);

let firstName ='DaudBD';
let lastName = ' Com ';
let tex =`Welcome ${firstName}.${lastName} !`;

console.log(tex);

let price = 10;
let vat = 10;

let total =`Total: ${(price * (1+vat)).toFixed(1)}`;
console.log(total);

let a = 'Hello String';
console.log(a.charAt(0));
console.log(a.charCodeAt(0));
console.log(a.codePointAt(0));

const name = 'DauBD.COm';

//let letter = name.at(-2);
let letter = name.charAt(name.length-5);
console.log(letter);
"Using strict";


let text ='Hello Man';

text ='A'+ text.slice(1);//try {
    text[2] = 'A';
//} catch (error) {
    //text ='err.message';
//}
console.log(text);

// slice Metho

let str = 'Apple,Bannana,Ornage';
//let part = fruits.slice(1,14);
//let part = fruits.slice(-12,-6);
let part = str.substring(7,13);

console.log(part);
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);

let fruits = "Apple,Banana,Orange";

let result = fruits.split(",");

console.log(result);
let firstName = "John";
let lastName = "Doe";

let fullName = firstName.concat(" ", lastName);

console.log(fullName);

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index);

let text2 = "The rain in SPAIN stays mainly in the plain";
text2.match("/ain/g");
console.log(text2);

let text3 = "Hello world, welcome to the universe.";
text3.includes("world");
console.log(text3);

let b = 02+.03 ;
console.log(b);
let x = 10 / "apple";
console.log(x);

let v = NaN;
let y = 5;

console.log(v+y);

let myNumber = 2;
let txt = "";
while(myNumber != Infinity) {
    myNumber= myNumber * 2;
}
console.log(myNumber);
let x = 10;
let y = 20;
let z = 'The prize is ' + x + y;

let x = 100;

let y = x.toString(2);

console.log(y);
console.log(typeof y);

let x = 12.345;

//console.log(x.toExponential(2));
console.log(x.toFixed(3));
console.log(x.toFixed(3));
console.log(typeof x.toFixed(2));

let x = 123.456;

console.log(x.toPrecision(5));
let x = new Number(100);

let x = new Number(100);

console.log(x.valueOf());
console.log(typeof x.valueOf());

console.log(Number.isFinite(100));       // true
console.log(Number.isFinite(10.5));      // true
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite("100"));     // false
console.log(Number.isFinite(NaN));       // false

console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger(-5));   // true
console.log(Number.isInteger(0));    // true
console.log(Number.isInteger("10")); // false

let x = "10px";

console.log(Number.parseInt(x));
console.log(Number.parseInt(15.5));
console.log(Number.parseInt("250 taka"));

let price = 123.4567;

console.log(price.toString());
console.log(price.toExponential(2));
console.log(price.toFixed(2));
console.log(price.toPrecision(5));

console.log(Number.isFinite(price));
console.log(Number.isInteger(price));
console.log(Number.isNaN(price));
console.log(Number.isSafeInteger(price));

//let x = Number.POSITIVE_INFINITY;
//let x = Number.NEGATIVE_INFINITY;

//let x = Number.NaN;

//let x = 5 & 1;
//let x = 5 | 1;

//let x = 5 ^ 1;
let x = 5 << 1;
//let x = ~5;
console.log(x);


let bigNumber = 1234564567890n;

console.log(bigNumber);

let x = 100n;

console.log(typeof x);
// Function For JavaScript
function sayHello() {
return 'Hell0 World';

}
let greeting = sayHello();
console.log(greeting);

function multiply(a, b) {
    return a * b;
}
let result = multiply(4, 3);
console.log(result);

function add(x,y) {
    return x + y;
}
let sum1 =add(4,7);
let sum2 = add(5,6);
let result2 = add(sum1,sum2);
console.log(result2);

let text ="Outside:" + typeof carName;
function myFunction() {
    let carName= 'Volvo';
    let text = "Inside:" + typeof carName + " " + carName;
    console.log(text);
}
myFunction();

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  
}
let value = toCelsius(17);
console.log(value);

function sayHello(name){
    return "Hello" + name;
}
let greeting2 = sayHello('Daud');

console.log(greeting2);

function fullName(firstName,lastName) {
    return firstName + " " + lastName;
}
let name = fullName("Md Ariful", "Islam Daud");
console.log(name);

function multiply(a, b) {
  return a * b;
}

let total = multiply(2, 3) * 10;
console.log(total);

function test() {
    return "First";
// stop function
    return "Second";
}

let result3 = test();
console.log(result3);

function check(age) {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor" ;
}

console.log(check(16));

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

let result4 = findMax(10, 25, 7, 40, 15);

console.log(result4);

function sumAll(){
    let sum = 0;
    for (let i=0; i < arguments.length; i++){
        sum = arguments[i] + sum ;
    }
return sum;
}
let result5 = sumAll(10,20,30,50);
console.log(result5);

function subStract(a,b) {
    return a-b;
}
let x1 = subStract(10,20);
let x2 = subStract(30,10);
let total1 = subStract(x1,x2);
console.log(x1);
console.log(total1);


const multiply = function (a,b) {
    return a * b ;

}
console.log(multiply(5,6));
// Arrow Function shorter 
const multiply = (a, b) => a * b;

let result = multiply(4,5);
console.log(result);

const add = (a,b) => a+b ;

let result2 = add(5,7);
console.log(result2);
const hello = () => "Hello World!";
console.log(hello);

// Square
const square1 = (x) => x * x;
const square2 = x => x * x;

console.log(square1(5));
console.log(square2(6));

// Hello
const hello1 = (val) => "Hello " + val;
const hello2 = val => "Hello " + val;

console.log(hello1("Ariful"));
console.log(hello2("World"));
const hello = name => "Hello " + name;

console.log(hello("Ariful"));


setTimeout(myFunction, 3000);

// The callback function
function myFunction() {
    console.log("Hello!");
}
setTimeout(myFunction,2000);

console.log("Start");

setTimeout(function() {
    console.log("Timer");
}, 0);

console.log("End");

let timer;

function startTimer() {
  timer = setTimeout(function() {
    document.getElementById("demo").innerHTML = "Finished";
  }, 5000);
}

function stopTimer() {
  clearTimeout(timer);
  document.getElementById("demo").innerHTML = "Timer stopped";
}

// Function to display any text
function myDisplayer(text) {
  let demo = document.getElementById("demo"); 
  demo.innerHTML += text + "<br>";
}

setInterval(showMessage, 2000, "Hello", "Ariful");

function showMessage(greeting, name) {
  console.log(greeting + " " + name);
}*/

const images = [
  "Image/img_nature.jpg",
  "Image/img_snowtops.jpg",
  "Image/img_mountains.jpg"
];
let index = 0;
let timer;

function showNextSlide() {
    index =(index+1) % images.length;
    document.getElementById("Slide").src = images[index];
}
function startSlides() {
if (!timer) {
  timer = setInterval(showNextSlide, 1000);
}
}
function stopSlides() {
  clearInterval(timer);
  timer = undefined;
}