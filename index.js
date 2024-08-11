//First JS Program
console.log('Hello World');

let name="Sana";  //We can use single as well as double quotes
console.log(name);

//Few rules for naming variables
// 1.cannot be a reserved keywords
// 2.should be meaningful
// 3.cannot start with a number
// 4.cannot cantain a space or hyphen
// 5.case-sensitive
// camelCase naming 



//In a single line code
let firstName = "Sana", lastName = "Naikwade";
console.log(firstName,lastName);

//In separate lines code
let firstName2 = "Shubh";
let lastName2 = "Suk";
console.log(firstName2);
console.log(lastName2);



//Constants
//We cannot reassign a constant 

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate); //Output = 1

//const interestRate1 = 0.3;
//interestRate1 = 1;
//console.log(interestRate1); // Error-Assignment to constant variable


//Types----
//Reference Types
//Primitive Types


//Primitive Types
//String,Number,Boolean,undefined,null


let name1 = 'Sana';//String Literal
console.log(name1);
let age = 21;//Number Literal
console.log(age);
let isApproved = true ; //Boolean Literal
console.log(isApproved);
let fName = undefined;//undefined Literal
console.log(fName);
let select = null;//null Literal
console.log(select);



//Languages
//Static Typing
//Dynamic Typing

//Static Typing -- string name = 'Sana';
//Static typed code we cannot change in future 

//Dynamic Typing -- let name = 'Sana';
//Dynamic Typed code we can change in future




//Reference Types---Object,Array,Function

//Object
let person = {
    name: 'Sana',
    age: 21
};

console.log(person);

// In-case changing the values in the objets

//Dot Notation
person.name = 'Shubh';
console.log(person);

//Bracket Notation
person['name'] = 'Suk'; // We can use double as well as single quotes 
console.log(person.name);



//Arrays---indexing starts with 0, it is dynamic and we can multi-type data
let selectFruits = ['Apple','Orange','Banana','Pine-apple'];
selectFruits[1] = 7;
console.log(selectFruits);
console.log(selectFruits.length);//there are multiple properties




//function
function greet(name,sirname){
    console.log('Hello ' + name + ' ' +sirname);
}
greet('Sana','Naikwade');

// In function you can single paraeter and argument as well as you can pass multiple parameters ad arguments.

