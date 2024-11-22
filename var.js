// defining Variable
var myVariable = "This is a variable!";


// using a variable
var number1 = 5;
number1 = 3;

console.log(number1);

// to add,subtract,multiply,divide
number1 = number1 + 5;
console.log(number1);

number1 = number1 - 6;
console.log(number1);

var number2 = number1 * 10;
console.log(number2);

var number3 = number2 / number1;
console.log(number3);


// we can also add strings which will concatenate them or put them together
var myName = "Bran" + "don";
console.log(myName);


// TYPES OF VARIABLES

// strings
var myName = "Bran";
var myLastName = "Don";
console.log(myName + " " + myLastName);

//Integers
var myNumber = 5;
console.log(myNumber);

var myInteger = 12;
var myNegativeInteger = -12;

console.log(myInteger);

console.log(myNegativeInteger);


// Floats
var myFloat = 5.5;
console.log(myFloat);

// Booleans
var myBoolean = true;
console.log(myBoolean);

// undefined
var myUndefined;
console.log(myUndefined);

// null
var myNull = null;
console.log(myNull);



// ARRAYS AND OBJECTS

var myArray = []; // empty array
var myArray2 = [1, 2, 3, 4, 5];
 // array with values
console.log(myArray2);

var favouriteFruits = ["apples", "oranges", "bananas"];
var carsInParkingLot = ["toyota", "dodge", "nissan"];
var employeeNames = ["shantel", "daisy", "bran"];
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var randonVariables = [true, false, "hello", 5];
console.log(favouriteFruits, carsInParkingLot, employeeNames, primeNumbers, randonVariables);


myArray = ["zero", "one", "two"];
console.log(myArray[0]); // arrays are zero indexed
console.log(myArray[1]);
console.log(myArray[2]);

myArray = ["bran", "don", "John Doe"];
elementNumber = 1;
console.log(myArray[elementNumber]);

// objects
var myObject = {};
// empty object
var myObject2 = {
    firstName: "Bran",
    middleName: "undefined",
    lastName: "Don",
    fullName: "Bran" + " " + "Don", 
    age: 25,
    isMarried: false,
    favouriteFruits: ["apples", "oranges", "bananas"],
    carsInParkingLot: ["toyota", "dodge", "nissan"],
    employeeNames: ["shantel", "daisy", "bran"],
    primeNumbers: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31],
    randonVariables: [true, false, "hello", 5],
    myFunction: function () {
        console.log("Hello World");
    }
};
console.log(myObject2);
console.log(myObject2.firstName);
console.log(myObject2.middleName);
console.log(myObject2.lastName);
console.log(myObject2.fullName);
console.log(myObject2.age);
console.log(myObject2.isMarried);
console.log(myObject2.favouriteFruits);
console.log(myObject2.carsInParkingLot);
console.log(myObject2.employeeNames);
console.log(myObject2.primeNumbers);
console.log(myObject2.randonVariables);
console.log(myObject2.myFunction());
// functions
function myFunction() {
    console.log("Hello World");
}

Brandon = {
    firstname: "Bran",
    middlename: "nun",
    lastname: "don",
    age: 24,
    hasGirlFriend: "false",
    favouriteCar: "dodge",
    isMarried: "false",

}
console.log(Brandon.firstname);
console.log(Brandon.middlename);
console.log(Brandon.lastname);
console.log(Brandon.age);
console.log(Brandon.hasGirlFriend);
console.log(Brandon.favouriteCar);
console.log(Brandon.isMarried);
// if statements
if (Brandon.age > 18) {
    console.log("Brandon is an adult");
} else {
    console.log("Brandon is a child");
}


// BUILT IN CONSTANTS

// null

null == undefined;
null === undefined;
console.log(null == undefined);
console.log(null === undefined);

typeof null;
console.log(typeof null);

// using strict equality operator to check if a property is null
var a = null;
a === null;
console.log(a === null);


// Nesting for NaN using isNaN()
isNaN(NaN);
console.log(isNaN(NaN));

isNaN(1);
console.log(isNaN(1));

isNaN("1");
console.log(isNaN("1"));

isNaN(-2e-4)
console.log(isNaN(-2e-4));

isNaN(Infinity);
console.log(isNaN(Infinity));

isNaN("Infinity");
console.log(isNaN("Infinity"));

isNaN(true)
console.log(isNaN(true));

isNaN(false)
console.log(isNaN(false));

isNaN(null)
console.log(isNaN(null));

isNaN(" ")
console.log(isNaN(" "));

isNaN("")
console.log(isNaN(""));

isNaN("10$")
console.log(isNaN("10$"));

isNaN("10 20")
console.log(isNaN("10 20"));

isNaN("hello");
console.log(isNaN("hello"));


// undefined and null
var a;
console.log(a);

console.log(typeof a);
var b = null;
console.log(b);
console.log(typeof b);
console.log(a == b);
console.log(a === b);
console.log(a == null);
console.log(a === null);
console.log(b == null);

let foo;
console.log('is undefined?', foo === undefined);


// INFINITY AND NEGATIVE INFINITY
console.log(Infinity);

- (Infinity);
console.log(Infinity)

Infinity > 123192310293;
console.log(Infinity > 123192310293);

-Infinity < -123192310293;
console.log(-Infinity < -123192310293);

1 / 0;
console.log(1 / 0);

Math.pow(123123123, 9123192391023);
console.log(Math.pow(123123123, 9123192391023));

Number.MAX_VALUE * 2;
console.log(Number.MAX_VALUE * 2);

23 / Infinity;
console.log(23 / Infinity);

-Infinity
console.log(-Infinity);

-Infinity === Number.NEGATIVE_INFINITY;
console.log(-Infinity === Number.NEGATIVE_INFINITY);

-0;
console.log(-0);

0 === -0;
console.log(0 === -0);

1 / -0;
console.log(1 / -0);

1 / 0 === 1 / -0;
console.log(1 / 0 === 1 / -0);

Infinity + Infinity
console.log(Infinity + Infinity);

var a = 0, b = -0;
a === b;
1 / b === 1 / a;
console.log(a === b);
console.log(1 / b === 1 / a);
var a = 0, b = -0;
a === b;
1 / b === 1 / a;

console.log(a === b);
console.log(1 / b === 1 / a);
Infinity - Infinity;
console.log(Infinity - Infinity);


// NUMBER CONSTANTS
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.MIN_INTEGER);
console.log(Number.MAX_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.EPSILON);



//  OPERATIONS THAT RETURN NaN
console.log(0 / 0);

"b" * 3;
console.log("b" * 3);

"cde" - "e";
console.log("cde" - "e");

[1, 2, 3] * 2;
console.log([1, 2, 3] * 2);

[2] * [6];
console.log([2] * [6]);

[a] + [b];
console.log([a] + [b]);

"a" + "b";
console.log("a" + "b");

0 / 0;
console.log(0 / 0);

Math.sqrt(-1);
console.log(Math.sqrt(-1));

Math.floor("a");
console.log(Math.floor("a"));



// CONSOLE
var personArr = [
    {
    "personId": 123,
    "name": "Jhon",
    "city": "Melbourne",
    "phoneNo": "1234567890"
    },
    {
    "personId": 124,
    "name": "Amelia",
    "city": "Sydney",
    "phoneNo": "1234567890"
    },
    {
    "personId": 125,
    "name": "Emily",
    "city": "Perth",
    "phoneNo": "1234567890"
    },
    {
    "personId": 126,
    "name": "Abraham",
    "city": "Perth",
    "phoneNo": "1234567890"
    }
    ];
    console.table(personArr, ['name', 'phoneNo', 'city', 'personId']);




// DATATYPES IN JAVASCRIPT
var myString = "Hello World";
console.log(typeof myString);

    //typeof
    myString = "Hello World";
    console.log(typeof myString);

    myString = 123;
    console.log(typeof myString);

    myString = true;
    console.log(typeof myString);

    myString = null;
    console.log(typeof myString);

    myString = undefined;
    console.log(typeof myString);

    // typeof is used to check the type of a variable

    // typeof is used to check the type of a variable
    myString = "Hello World";
    console.log(typeof myString);
    myString = 123;

// finding an object class
var myObject = {};
console.log(typeof myObject);

// Getting object tyoe by constructor name 


// STRINGS
var myString = "Hello World";
console.log(myString);

var myString = 'Hello World';
console.log(myString);

var myString = `Hello World`;
console.log(myString);


// strings can be created from other types using strings () function
var intString = String(32);
console.log(intString);

var booleanString = String(true);
console.log(booleanString);

var nullString = String(null);
console.log(nullString);

var undefinedString = String(undefined);
console.log(undefinedString);

var myString = "Hello World";
console.log(myString.length);


// tostring() can also be used to Numbers, Booleans or Objects to Strings
var intString = (1234).toString();
console.log(intString);

var booleanString = (true).toString();
console.log(booleanString);

var objectString = ({}).toString();
console.log(objectString);

var myString = "Hello World";
console.log(myString.charAt(0));

console.log(myString.charAt(1));
console.log(myString.charAt(2));


// creating Strings using String.fromCharCode method
var myString = String.fromCharCode(65);
console.log(myString);

String.fromCharCode(104, 101, 108, 108, 111);   
console.log(String.fromCharCode(104, 101, 108, 108, 111));

var myString = "Hello World";
console.log(myString.indexOf("o"));



// creating a String using the new keyword
var myString = new String("Hello World");
console.log(myString);

var objectString = new String("Yes, I am a string object");
console.log(objectString);

typeof objectString;
console.log(typeof objectString);

typeof objectString.valueOf();
console.log(typeof objectString.valueOf());



// concatenating strings
var myString = "Hello" + " " + "World";
console.log(myString);

var myName = "Bran" + "" + "don";
console.log(myName);

// concatenating strings using the += operator
var myString = "Hello";
myString += " World";
console.log(myString);

var myName = "Bran";
myName += "don";
console.log(myName);

// concatenating strings using the concat() method
var myString = "Hello";
myString = myString.concat(" World");
console.log(myString);

var myName = "Bran";
myName = myName.concat("don");
console.log(myName);

// concatenating Strings using non-string Variables in JavaScript
var myString = "Hello";
var myNumber = 5;
var myBoolean = true;
var myNull = null;
var myUndefined;
var myObject = {};
var myArray = [];
myString += myNumber;
console.log(myString);
myString += myBoolean;
console.log(myString);

var string = "string";
var number = 32;
var boolean = true;
console.log(string + number + boolean);

var string = "bran";
var number = 24;
var hasGirlFriend = false;
console.log(string + number + hasGirlFriend);


// conctenating Stings in JavaScript using the template literals
var myName = "Bran";
myName = `${myName}don`;
console.log(myName);

var myString = "Hello";
myString = `${myString} World`;
console.log(myString);

var myName = "Bran";
myName = `${myName} don`;
console.log(myName);




// REVERSING A STRING IN JAVASCRIPT
var myString = "Hello World";
console.log(myString.split("").reverse().join(""));

var myName = "Bran Don";
console.log(myName.split("").reverse().join(""));

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('string')); 


function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Bran don $'));

// using spread operator to reverse string in JavaScript
var myString = "Hello World";
console.log([...myString].reverse().join(("")));

var myName = "Bran Don";
console.log([...myName].reverse().join(("")));

function reverseString(str){
    return [...String(str)].reverse().join('');
}
console.log(reverseString('Bran don $'));
console.log(reverseString('string'));
console.log(reverseString('stackoverflow'));
console.log(reverseString([1, 2, 3]));


/* custom reverse() fuction
function reverse(string){
    var strRev = "";
    for (var i = string.length - 1; i >= 0; i++ ){
        strRev += string[i];
    }
    return strRev;
}

 reverse('zebra')
console.log(reverse('zebra'));
*/


// comparing strings Lexicographically
var myString = "Hello World";
var myOtherString = "Hello World";
console.log(myString.localeCompare(myOtherString));
var myString = "Hello World";
var myOtherString = "Hello World!";
console.log(myString.localeCompare(myOtherString));
var myString = "Hello World";
var myOtherString = "Hello World!";
console.log(myString.localeCompare(myOtherString));
var myString = "Hello World!";
var myOtherString = "Hello World";

console.log(myString.localeCompare(myOtherString));

var myName = "Bran";
var myOtherName = "Bran";
console.log(myName.localeCompare(myOtherName));

var myName = "Bran";
var myOtherName = "Don";
console.log(myName.localeCompare(myOtherName));

var myName = "Bran";
var myOtherName = "Bran Don";
console.log(myName.localeCompare(myOtherName));

// using the < and > operators to compare strings Lexicographically
var myString = "Hello World";
var myOtherString = "Hello World";
console.log(myString < myOtherString);

var myName = "Bran";
var myOtherName = "Don";
console.log(myName < myOtherName);
console.log(myName > myOtherName);


// Access characters in a string using the charAt() method
var myString = "Hello World";
console.log(myString.charAt(0));

var myName = "Ogola"
console.log(myName.charAt(1));

var string = "Hello World";
console.log( string[4] );