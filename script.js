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
*/

let bigNumber = 1234564567890n;

console.log(bigNumber);

let x = 100n;

console.log(typeof x);