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
! Javascripts Strings */
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