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
*/
//let letter = name.at(-2);
let letter = name.charAt(name.length-5);
console.log(letter);
"Using strict";


let text ='Hello Man';

text ='A'+ text.slice(1);
//try {
    text[2] = 'A';
//} catch (error) {
    //text ='err.message';
//}
console.log(text);

