//data types in js
// 1.primitive datatypes ==> Number,string, boolean, undefined, null and Symbol;
// 2.Non-primitive datatypes==> Object,array and function;

// 1.Number==>it is used to represent both integer and floating point numbers id 2^53.
//     if your number is greater than that you can use BigInt.
// 2.String==>it is used to represent a sequence of characters.It is enclosed in single quote("")
//     double quote("") or backticks(``)
// 3.boolean==>it is used to represent a logical CSSMathValue.It can have two values true or false
// 4.undefined==> it is used to represent an undefined value.
// 5.null==> it is used to represent an empty value.

let name="john";
let age=20;
let male=true;
let salary=5000.00;
let marks=null;
let address;

//typeof() is used to check the datatype of the variable

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(male));
console.log(typeof(salary));
console.log(typeof(marks));
console.log(typeof(address));

// non primitive datatype==> Object,array,and function;
// object ==> it is used to represent a collection if key-value pairs

let person={
    name:"john",
    age:50,
    male:true,
    salary:50000.00,
    marks:null,
    address,
}

console.log(person.name);
console.log(person.age);
console.log(person.male);
console.log(person.address);

//array is used to represent a collection of elements

let cars=["BMW","audi","mercedes","toyota","tata"];
console.log(cars);

//function in javascript
//  it is a block of code that performs a specifc task.
//  it only executes when it is called or invoked.
//  is used to avoid code duplication

function add(a,b){
    return a+b;
}
console.log(add(9,8));
console.log(add(1223,42));
console.log(add(4));
console.log(add(54.4,209.3));


