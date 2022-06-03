/*CHAPTER_1
// alert('hello world');
//Stings
console.log('hello,world');

let email = 'nodirqutlimurotov@gmail.com';
console.log(email);

//string concatenation
let firstName = 'Nodirbek';
let lastName = 'Qutlimurotov';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
//getting characters 
console.log(fullName[1]);
//string length
console.log(fullName.length);
//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result,fullName);

let index = email.indexOf('@');
console.log(index)

*/
/*__________________________________________________________________________ */
//CHAPTER_2

//common string methods 

/*
let email = 'nodirqutlimurotov@gmail.com';

// let result = email.lastIndexOf('d');
// let result = email.slice(0,5)
// let result = email.substr(0,5);
// let result = email.replace('@' , 'e');
 let result = email.replace('i' , 'w');


console.log(result);
*/
// let radius = 10;
// const pi = 3.14;
// math operators +,-,/,**,%

// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius**2;

// console.log(result);
// order of operation - B I D M A S
// Brackets Indices Division Multiplication Addition Subtraction
// console.log(result);

// let likes = 10 ;
// likes = likes + 1;
// likes++;
// likes--;

// likes +=5;
// likes -=2;
// likes *= 10;
// likes /= 5;
// console.log(likes);

// NaN - not a number

// console.log(10/'hello');
// console.log(5 * 'hello');

// let result = 'the blog has  ' +likes +' likes';
// console.log(result);

/*____________________________________________________________________ */
//template string
// const title = 'Best reads of 2022';
// const author = 'Nodirbek';
// const likes = 30;
///concatination way

// let result = 'The blog called ' + title +' by ' + author +' has ' +likes + ' likes';
// console.log(result);

///temlate string way 

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

///creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p> By ${author} </p>
// `
// console.log(html);
/*__________________________________________________________________________*/
// let kursdoshlar = ['Shohrux' , 'Zufer','Qodirberdi'];
// kursdoshlar[1] = 'Otabek';
// console.log(kursdoshlar);
// let ages = [ 20,25,30,35];
// console.log(ages[2]);
// let random = ['Shohrux','Xursand',20 ,30]

// console.log(random.length);
// array methods

//let result = 
// let result= kursdoshlar.indexOf("Zufer");
// let result= kursdoshlar.join("#");
// let result = kursdoshlar.concat("Abror");
// let result = kursdoshlar.push("Abror");
// result = kursdoshlar.pop();

// console.log(kursdoshlar);
/*________________________________________________________________________ */
// let age=null;

// console.log(age,age+3 ,`the age is ${age}`);
/*_________________________________________________________________________ */
// //booleans & comparisons
// console.log(true, false, "true", "false",);
// // methods can return booleans
// let email = 'nodirqutlimurotov@mail.com';
// let names = ['Zufer','Noder','Dumbanze'];

// let result = email.includes('@');
// let result = names.includes('Zufer');
// console.log(result);


// comparison operators
// let age = 25 ;

// console.log(age ==25);
// console.log(age !=25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'nodir';

// console.log(name == 'nodir');
// console.log(name == 'Nodir');
// console.log(name > 'Zodir');
/*___________________________________________________________________________ */
// let age = 25 ;


//loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

//strict comparison (different types cannot be equal)


// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');
/*___________________________________________________________________________ */
//type conversion
// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);

// let result = Boolean('');
// let result = Boolean('0');

// console.log(result ,typeof result);
/*_______________________________________________________________________ */
// fot loops 

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:',i);
// }

// console.log('loop finished');

// const names = ['nodir' , 'Zufer' , 'sevinch'];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// const scores = [ 50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++) {

//     if (scores[i] === 0) {
//         console.log("0 yo'qoldi");
//         continue;
//     }

//     console.log('your score: ', scores [i]);

//     if (scores[i] === 100) {
//         console.log("congrats, you got  the top score!");
//         break;
//     }
// }
////////////////while loops
// let i = 0;

// while (i < 5) {
//     console.log('in loop: ',i);
//     i++;
// }

// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// let i = 0;
// do {
//     console.log('val of i is: ' , i);
//     i++;
// } while (i < 5);
/*_______________________________________________________________________ */
// if statements
// const age = 20;

// if (age < 30) {
//     console.log('hello');
// }

// const nodir = [ 'nodie ', 'bek ' , 'qutlimurotov'];

// let password = 'passwordqwert';
// if (password.length >= 12) {
//     console.log("that's password mighty strong");
// }else if (password.length >= 8) {
//     console.log("that's great!!");
// } else {
//     console.log("that's not enough!");
// }
///////////////logical operators - OR || and AND &&

// const password = 'pa@123';
// if (password.length >= 12 && password.includes('@')) {
//     console.log("that's password mighty strong");
// }else if (password.length >= 8 || password.includes('@') && password.length > 5) {
//     console.log("that's great!!");
// } else {
//     console.log("that's not enough!");
// }
////////////////logical NOT  (!)
// let user = false;

// if (!user) {
//     console.log('ISHLADI;');
// }
// console.log(!true);
// console.log(!false);
/*___________________________________________________________________________ */
////switch statements
// const grade = 'F';

// switch (grade) {
//     case 'A':
//         console.log("bu A harfi");
//         break;
//     case 'B':
//         console.log("bu B harfi");
//         break;
//     case 'C':
//         console.log("bu C harfi");  
//         break;      
//     case 'D':
//         console.log("bu D harfi");
//         break;
//     case 'E':
//         console.log("bu E harfi");
//         break;
//     case 'F':
//         console.log("bu F harfi");
//         break;
//     default:
//         console.log("Siz boshqa harf yozdingiz!!");
// }
///////varibles & block scope

// let age = 30;

// if (true) {
//     let age = 40; //ager letsiz ishlatsam outside dam tasir atdi
//     const name = 'NOdir'; //const && let pochti bir xil narsa  akan 
//     console.log("inside 1st code block ", age , name ,word);
//     if (true) {
//         let age = 50;
//         var word = 'hello'; //var bilan ishlatdim lekin 1st code vni donimodi lekin outside code vni donidi\ 50 NOdir hello ni chiqordi.
//         console.log('inside 2nd code block ', age , name , word);
//     }
// }

// console.log('outside code block ', age ,name , word); //console da age = 30; ni word = hello ni chiqordi 
/*__________________________________________________________________________ */
/* FUNCTION  */
//function declaration
// function greet() { 
//     console.log('there are two pen');
// }
// //function expression 
// const speak = function() { 
//     console.log('this is Nodir');
// }; //expressionning oxiriga (;) nuqta vergul qo`yiladi yana bir farqi declarationda greet() NI boshda qo`ysa ham oxirida qo`ysa ham ishlidi lekin expressionda ishlamidi

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// /////arguments & parameters

// const speak = function(name = 'sevich',time = 'night') { //berdagi parametr 
//     console.log(`good ${time} ${name}`);
// };

// speak('Nodir','morning'); //berdagi asa argument Yani 'Nodir','morning' lar

/////returning values

// const speak = function ( name = 'nodir' , time = 'night') {
//     console.log(`good ${time} ${name}`);
// };

// const caclArea = function(radius) {
//     // let area = 3.14 * radius **2;
//     // return area;
//     // console.log(area);

//     return 3.14 * radius **2;
// }


// const area = caclArea(5);
// console.log(area);
// // console.log(area); //berda area ni chiqormidi nachun dasa local da duribdi area
/////regural function
// const caclArea = function (radius) {
//     return 3.14 * radius **2;
// }

////arrow function
// const caclArea = (radius) => { //agar bir parametr bo`lsa qavs shart amas 2  va undan ortiq bo`lsa qavs qo`yilishi shart !!!!!!!!!!
//     return 3.14 * radius **2;
// }


// const area = caclArea (5);
// console.log('area is : ' ,area);

// const caclArea = radius => 3.14 * radius **2;
// const area = caclArea(5);
// console.log(area);
////@masala
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

///@ARROW FUNCTION ga o`tiramiz
// const bill = (products, tax) => {
//     let total =0;
//     for(let i = 0 ; i < products.length; i++) { 
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// const total = bill([10,15,30], 0.2);
// console.log(bill([10,15,30], 0.2));
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// const name = 'nodir';
// ///functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// ////methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
////callbacks & foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     //do something
//     console.log(value);
// });

// let people = ['Zufer' , 'NODIR' , 'abror' , 'otabek' , 'nurali'];

// //people.forEach(function(person,index) {
// //    console.log(index,person);
// //});

// const logPerson = (person,index) => {
//     console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);
