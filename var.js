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


// Escaping Quotes in JavaScript
var myString = "Hello \"World\"";
console.log(myString);

var text = "You feel \"high\"";
console.log(text);


// Word Counter in JavaScript
function wordCount(str) {
    return str.split(" ").length;
}
console.log(wordCount("Hello World"));


// trim WhiteSpace in JavaScript
var myString = " Hello World ";
console.log(myString.trim());

var myName = " Bran Don ";
console.log(myName.trim());



// Spliting a string into an array in JavaScript
var myString = "Hello World";
console.log(myString.split(" "));

var s = "one, two, three, four, five";
console.log(s.split(", "));



// Strings are unicode
var s = "some ∆≈ƒ unicode ¡™£¢¢¢";
s.charCodeAt(5);
console.log(s.split(""));


// Spliting a string into an array substring
var myString = "Hello World";
console.log(myString.substring(0, 5));



// Detecting a string in a string
var myString = "Hello World";
console.log(myString.includes("World"));

// Detecting a string in JavaScript
var myString = "Hello World";
console.log(myString.indexOf("World") > -1);

// Detecting a String in Javascript
// using typeof to detect if a string is a primitive string
var myString = "Hello World";
console.log(typeof myString === "string");

var myString = new String("Hello World");
console.log(typeof myString === "string");

var myString = new String("Hello World");
console.log(typeof myString === "object");

// use instanceof to detect if a string is a primitive string
var myString = "Hello World";
console.log(myString instanceof String);

var myString = new String("Hello World");
console.log(myString instanceof String);

var myName = "Bran";
console.log(myName instanceof String);

var myName = new String("Bran");
console.log(myName instanceof String);


// Substrings with slice in JavaScript
var myString = "Hello World";
console.log(myString.slice(0, 5, 1));

var myName = "Bran Don";
console.log(myName.slice(0, 4));

var hasGirlFriend = "Shartel Shantel";
console.log(hasGirlFriend.slice(0, 5));

var favouriteCar = "Dodge Challenger";
console.log(favouriteCar.slice(0, 6));

var firstCar = "Honda Civic";
console.log(firstCar.slice(0, 3));



// Character code
var myString = "Hello World";
console.log(myString.charCodeAt(0));

var myName = "Bran Don";
console.log(myName.charCodeAt(1));

var myString = "Hello World";
console.log(myString.codePointAt(0));

var myName = "Bran Don";
console.log(myName.codePointAt(1));


// String Matching in JavaScript
var myString = "Hello World";
console.log(myString.match(/Hello/));

var myName = "Bran Don";
console.log(myName.match(/Don/));

var favouriteFruits = "I love apples, pears and oranges";
console.log(favouriteFruits.match(/apples/));


// String Replacement in JavaScript
var myString = "Hello World";
console.log(myString.replace(/Hello/, "Hi"));

var myName = "Bran Don";
console.log(myName.replace(/Don/, "Ogola"));

var girlFriend = "Daisy Atieno";
console.log(girlFriend.replace(/Daisy/, "Shantel"));


// String Search in JavaScript
var myString = "Hello World";
console.log(myString.search(/World/));

var myName = "Bran Don";
console.log(myName.search(/Don/));

var girlFriend = "Daisy Atieno";
console.log(girlFriend.search(/Atieno/));


// String representation of Numbers in JavaScript
var myNumber = 1234;
console.log(myNumber.toString());

var phoneNo = 1234567890;
console.log(phoneNo.toString());

var b16 = 'c';
console.log(b16.toString());

var b10 = parseInt(b16, 16);
console.log(b10.toString(10));

/*let b16 = '3.243f3e0370cdc';
let [i16, f16] = b16.split('.');
let b10 = parseInt(i16, 16);
let f10 = parseInt(f16, 16);
let num = b10 + (f10 / Math.pow(16, f16.length));
console.log(num);
console.log(num.toString());
console.log(num.toString(10));
console.log(num.toString(2));*/


// String to Number Conversion in JavaScript
var myString = "1234";
console.log(Number(myString));


// String Find and Replace functions in JavaScript
var myString = "Hello World";
console.log(myString.replace("World", "Universe"));

var string = "Hello, World!";
console.log( string.indexOf("o") );
console.log( string.indexOf("foo") );

var string = "Hello, World!";
console.log( string.lastIndexOf("o") );
console.log( string.lastIndexOf("foo") );


// Find the index of a substring inside a string
'Hellow World'.indexOf('Wor');
console.log('Hellow World'.indexOf('Wor'));

"harr dee harr dee harr".indexOf("dee", 10);
console.log("harr dee harr dee harr".indexOf("dee", 10));

'Hellow World'.indexOf('WOR');
console.log('Hellow World'.indexOf('WOR'));

// string to uppercase
var myString = "Hello World";
console.log(myString.toUpperCase());

var myName = "Bran Don";
console.log(myName.toUpperCase());  


// string to lowercase
var myString = "Hello World";
console.log(myString.toLowerCase());

var myName = "Bran Don";
console.log(myName.toLowerCase());



// Repeate a string
var myString = "Hello World";
console.log(myString.repeat(2));

var myName = "Brandon ogola.";
console.log(myName.repeat(5));

var letters = "abc, def, ghi, jkl, mno, pqr, stu, vwx, yz ";
console.log(letters.repeat(5));






/// DATE IN JAVASCRIPT

// to create a date object use the date () constructor
var myDate = new Date();
console.log(myDate);

// create a new date object with no arguments
var myDate = new Date();
console.log(myDate.toString());

// create a new date object with a date string
var myDate = new Date("2020-01-01");
console.log(myDate.toString());

// create a new date object with one integer argument
var myDate = new Date(2020);
console.log(myDate.toString());

// create a new date object with two integer arguments
var myDate = new Date(2020, 0);
console.log(myDate.toString());

var myDate = new Date();
console.log(myDate.toDateString());

// create a date object with two or more integer arguments
var myDate = new Date(2020, 0, 1);
console.log(myDate.toString());

// create a Date Object with the current date and time
var myDate = new Date();
console.log(myDate.toISOString());

// Create a Date object at the Unix Epoch
var myDate = new Date(0);
console.log(myDate.toUTCString());

// Creates a Date object with the date and time 2,012 milliseconds
// after the Unix Epoch
var myDate = new Date(2012);
console.log(myDate.toUTCString());

// Creates a Date object with the first day of February of the year 2012
// in the local timezone.
var myDate = new Date(2012, 1);
console.log(myDate.toUTCString());

// If I was born in may 2000, create a date object with the date and time
// 2,012 milliseconds after the Unix Epoch
var myDate = new Date(2000, 4, 12);
console.log(myDate.toUTCString());

// If I was born in may 2000, create a date object with the date and time
// 2,012 milliseconds in local time
var myDate = new Date(2000, 4, 12, 12, 12, 12);
console.log(myDate.toUTCString());


// Creates a Date object with the first day of the year 2012 in the local
// timezone.
// (Months are zero-based)
var myDate = new Date(2012, 0); 
console.log(myDate.toUTCString());

//Creates a Date object with the first day of the year 2025 in the local
// timezone of East African Time.
// (Months are zero-based)
var myDate = new Date(2025, 0);
console.log(myDate.toUTCString());

// /Creates a Date object with the first and second and third day of the year 2025 in the local
// timezone of East African Time.
// (Months are zero-based)
var myDate = new Date(2025, 0, 2);
console.log(myDate.toUTCString());

//Creates a Date object with the first week of the year 2025 in the local
// timezone of East African Time.
// (Months are zero-based)
var myDate = new Date(2025, 0, 7);
console.log(myDate.toUTCString());

// // Parses a string into a Date object (ISO 8601 format added in ECMAScript 5.1)
// Implementations should assumed UTC because of ISO 8601 format and Z designation
var myDate = new Date("2012-01-01T12:00:00Z");
console.log(myDate.toUTCString());

// // Parses a string into a Date object (ISO 8601 format added in ECMAScript 5.1)
// Implementations should assumed UTC because of ISO 8601 format and Z designation
var myDate = new Date("2012-01-01T12:00:00Z");
console.log(myDate.toUTCString());

// convert to string format
var myDate = new Date();
console.log(myDate.toString());

var myDate = new Date();
console.log(myDate.toDateString());


// creatring Date from UTC
var myDate = new Date(Date.UTC(2012, 0, 1));
console.log(myDate.toUTCString());

// use UTC-speciﬁc modiﬁers are .setUTCMonth() , .setUTCDate() (for the day of the month),
//.setUTCMinutes() , .setUTCSeconds() and .setUTCMilliseconds() .
var myDate = new Date(Date.UTC(2024, 11, 1, 12, 0, 0));
console.log(myDate.toUTCString());

// use UTC-speciﬁc modiﬁers are .setUTCMonth() , .setUTCDate() (for the day of the month),
//.setUTCMinutes() , .setUTCSeconds() and .setUTCMilliseconds() .
var myDate = new Date(Date.UTC(2024, 11, 1, 12, 0, 0));
console.log(myDate.toUTCString());

// Formating JavaScript Dates
var myDate = new Date();
console.log(myDate.toISOString());

var myDate = new Date();
console.log(myDate.toUTCString());

var myDate = new Date();
console.log(myDate.toLocaleString());

var myDate = new Date();
console.log(myDate.toLocaleDateString());

var myDate = new Date();
console.log(myDate.toLocaleTimeString());

var myDate = new Date();
console.log(myDate.toTimeString());

var myDate = new Date();
console.log(myDate.toString());

var today = new Date().toLocaleDateString('en-GB', {
    day : 'numeric',
    month : 'short',
    year : 'numeric'
    });
    console.log(today);

var tomorrow = new Date().toString('en-GB', {
    day : 'numeric',
    month : 'short',
    year : 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
    weekday: 'long',
    era: 'numeric',
    timeZoneName: 'short'

});
console.log(tomorrow);


var DateObject = (function() {
    var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
    ];
    var date = function(str) {
    this.set(str);
    };
    date.prototype = {
    set : function(str) {
    var dateDef = str ? new Date(str) : new Date();
    this.day = dateDef.getDate();
    this.dayPadded = (this.day < 10) ? ("0" + this.day) : "" + this.day;
    this.month = dateDef.getMonth() + 1;
    this.monthPadded = (this.month < 10) ? ("0" + this.month) : "" + this.month;
    this.monthName = monthNames[this.month - 1];
    this.year = dateDef.getFullYear();
    },
    get : function(properties, separator) {
    var separator = separator ? separator : '-'
    ret = [];
    for(var i in properties) {
    ret.push(this[properties[i]]);
    }
    return ret.join(separator);
}
};
return date;
})();
console.log(new DateObject().get(['year', 'month', 'day']));


// Get the current year
var year = (new Date()).getFullYear();
console.log(year);

var month = (new Date()).getMonth();
console.log(month);

var day = (new Date()).getDate();   
console.log(day);

var hours = (new Date()).getHours();
console.log(hours);

var minutes = (new Date()).getMinutes();    
console.log(minutes);

var seconds = (new Date()).getSeconds();
console.log(seconds);

var milliseconds = (new Date()).getMilliseconds();
console.log(milliseconds);



// Convert the current time and date to a human-readable string
var now = new Date();
console.log(now.toString());


// Date comparison in JavaScript
var myDate = new Date();
console.log(myDate > new Date(2024, 0, 1));

// Date Difference Calculator in JavaScript
var date1 = new Date("2024-01-01");
var date2 = new Date("2024-01-02");
var diff = date2 - date1;
console.log(diff);
console.log(diff / (1000 * 60 * 60 * 24));
console.log(diff / (1000 * 60 * 60 * 24 * 365));


var date1 = new Date("2024-01-01");
var date2 = new Date("2024-01-02");
var diff = date1 - date2;
console.log(diff);





// COMPARISON OPERATIONS IN JAVASCRIPT

// Abstract equality / inequality and type conversion
console.log(1 == "1");
console.log(1 != "1");
console.log(1 === "1");
console.log(false == 0);
console.log("" == 0);
console.log("" === 0);
console.log("" != 0);
console.log("" !== 0);
console.log("1" == true);
console.log("1" === true);



// NaN property of the Global Object
console.log(NaN === NaN);
console.log((1 * "two") === NaN);
console.log(NaN === 0);
console.log(NaN === "0");
console.log(NaN === "NaN");
console.log(NaN === Number.NaN);
console.log(isNaN(NaN));
console.log(NaN < 0);
console.log(NaN > 0);
console.log(NaN <= 0);
console.log(NaN >= 0);
console.log(NaN !== 0);
console.log(NaN !== "0");
console.log(NaN !== "NaN");

// checking if the number is NaN in JavaScript
console.log(isNaN(1));
console.log(isNaN(NaN));
console.log(isNaN(1));
console.log(isNaN("1"));
console.log(isNaN("1a"));
console.log(isNaN("a1"));   
console.log(isNaN({}));




// Short circuiting in boolean Operators in JavaScript
// In x && y , y will not be evaluated if x evaluates to false , because the whole expression is guaranteed to be false .
// In x || y , y will not be evaluated if x evaluated to true , because the whole expression is guaranteed to be true .

var x = 1;
var y = 2;
//var z = 3;
console.log(x && y );

//var x = 1;
//var y = 2;

function T() { // True
    console.log("T");
    return true;
    }
    function F() { // False
    console.log("F");
    return false;
    }
    console.log(T() && F());

function T() { // True
    console.log("T");
    return true;
    }
    function F() { // False
    console.log("F");
    return false;
    }
    console.log(F() && T());   
    console.log(T() || F()) ;
    console.log(F() || T()) ;


// Null and Undefined in JavaScript
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null === 0);
console.log(null == false);
console.log(null === false);    
// false
console.log(null == "");
console.log(null === "");

console.log(null == "0");
console.log(null === "0");





// ABSRACT EQUALITY OPERATOR
console.log(1 == "1");
console.log(1 != "1");
console.log(1 === "1");
console.log(false == 0);
console.log("" == 0);
console.log("" === 0);

console.log("" != 0);
console.log("" !== 0);
console.log("1" == true);
console.log("1" === true);
console.log("1" != true);
console.log("1" !== true);

console.log(NaN === NaN);



// Logic Operators with Boolean
console.log(true && true);

console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
console.log(!!"");
console.log(!!"hello");
console.log(!!0);
console.log(!!1);
console.log(!!-1);
console.log(!!NaN);


// Automatic type conversion in JavaScript
console.log(1 + "2");
console.log(1 + "2" + 3);
console.log(1 + "2" + "3");
console.log(1 + "2" + "3" + 4);


//Boolean Coersion
var a = 'hello' || '';
console.log(a);
var b = '' || 'world';
console.log(b);
var b = '' || [];
console.log(b);
var b = '' || 0;
console.log(b);
var b = '' || '0';
console.log(b);
var b = '' || 'false';
console.log(b);



// Rational Operators(<,<=,>,>=) in JavaScript
console.log(1 < 2);
console.log(1 > 2);
console.log(1 <= 2);
console.log(1 >= 2);
console.log(1 < 1);
console.log(1 <= 1);
console.log(1 > 1);
console.log(1 >= 1);
console.log(1 < "1");



// Grouping multiple logic statements
// Declare and initialize necessary variables
var age = 20; // Example value for age
var height = 5.9; // Example value for height
var status = 'royalty'; // Example value for status
var hasInvitation = true; // Example value for invitation status

// Grouping multiple logic statements
var isLegal = age >= 18;
var tall = height >= 5.11;
var suitable = isLegal && tall;
var isRoyalty = status === 'royalty';
var specialCase = isRoyalty && hasInvitation;
var canEnterOurBar = suitable || specialCase;

if (canEnterOurBar) {
    console.log('You can enter our bar');
} else {
    console.log('You cannot enter our bar');
}

var age = 20;
var height = 5.9;
var status = 'royalty';
var hasInvitation = true;
var isLegal = age >= 18;
var tall = height >= 5.11;
var suitable = isLegal && tall;
var isRoyalty = status === 'royalty';
var specialCase = isRoyalty && hasInvitation;
var canEnterOurBar = suitable || specialCase;
if (canEnterOurBar) {
    console.log('You can enter our bar');
} else {
    console.log('You cannot enter our bar');
}


var age = 18;
var height = 5.4;
var status = 'single';
var isBeautiful = true;
var isLegal = age >= 18;
var tall = height >= 5.11;
var suitable = isLegal && tall;
var isSingle = status === 'single';
var specialCase = isSingle && isBeautiful;
var canDate = suitable || specialCase;
if (canDate) {
    console.log('You can date our single');
} else {
    console.log('You cannot date our single');
}


var age = 20;
var gender = 'female';
var status = 'single';
var isBeautiful = true;
var isLegal = age >= 18;
var isFemale = gender === 'female';
var suitable = isLegal && isFemale;
var isSingle = status === 'single';
var specialCase = isSingle && isBeautiful;
var canEnterMyRoom = suitable || specialCase;
if (canEnterMyRoom) {
    console.log('You can enter my room');
} else {
    console.log('You cannot my room');
}


// CONDITIONS IN JAVASCRIPT

// Ternary Operator
var age = 20;
var status = (age >= 18) ? 'adult' : 'minor';
console.log(status);
var age = 16;
var status = (age >= 18) ? 'adult' : 'minor';   
console.log(status);

var name = 'Brandon';
var status = (name === 'Brandon') ? 'admin' : 'subscriber';
console.log(status);

var animal = 'kitty';
var result = (animal === 'kitty') ? 'cute' : 'still nice';
console.log(result);

var Daisy = 'ugly';
var result = (Daisy === 'ugly') ? 'cute' : 'still nice';
console.log(result);

var shantel = 'gorgeous';
var result = (shantel === 'gorgeous') ? 'hardworker' : 'smart';
console.log(result);

// Switch statement
var animal = 'kitty';
switch (animal) {
    case 'kitty':
        console.log('cute');
        break;
    case 'doggy':
        console.log('still nice');
        break;
    default:
        console.log('unknown');
        break;
}
var style = 'doggy';
switch (style) {
    case 'kitty':
        console.log('cute');
        break;
    case 'doggy':
        console.log('still nice');
        break;
    default:
        console.log('unknown');
        break;
}
var style = 'ugly';
switch (style) {
    case 'kitty':
        console.log('cute');
        break;
    case 'doggy':
        console.log('still nice');
        break;
    default:
        console.log('unknown');
        break;
}
var shantel = 'gorgeous';
switch (shantel) {
    case 'gorgeous':
        console.log('cute');
        break;
    case 'doggy':
        console.log('still nice');
        break;
    default:
        console.log('unknown');
        break;
}
var daisy = 'ugly';
switch (daisy) {
    case 'gorgeous':
        console.log('cute');
        break;
    case 'ugly':
        console.log('still nice');
        break;
    default:
        console.log('unknown');
        break;
}

var animal = 'Lion';
switch (animal){
    case 'Dog':
        console.log('I will not run since animal !== "Dog"');
        break;
    case 'Cat':
        console.log('I will not run since animal !== "Cat"');
        break;
    default:
        console.log('I will run since animal does not match any other case');
}

var employed = 'marry';
switch (employed){
    case 'Tech':
        console.log('I will marry since employed !== "Tech"');
        break;
    case 'white job':
        console.log('I will not marry since employment !== "white job"');
        break;
    default:
        console.log('I will marry when I want') ;   
}




// If/ Else If / Else control
var animal = 'kitty';
if (animal === 'kitty') {
    console.log('cute');
} else if (animal === 'doggy') {
    console.log('still nice');
} else {
    console.log('unknown');
}

var style = 'ugly';
if (style === 'kitty') {
    console.log('cute');
} else if (style === 'doggy') {
    console.log('still nice');
} else {
    console.log('unknown');
}

var shantel = 'ugly';
if (shantel === 'ugly') {
    console.log('cute');
} else if (style === 'doggy') {
    console.log('still nice');
} else {
    console.log('unknown');
}

var daisy = 'ugly';
if (daisy === 'cute') {
    console.log('cute');
} else if (style === 'doggy') {
    console.log('still nice');
} else {
    console.log('unknown');
}



// ARRAYS IN JAVASCRIPT

// converting array like objects to arrays
var realArray = [ 'a', 'b', 'c', 'd', 'e'];
var arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    length: 5
};
var array = Array.from(arrayLike);
console.log(array);
console.log(realArray);
console.log(arrayLike);
console.log(Array.isArray(arrayLike));
console.log(Array.isArray(realArray));
console.log(Array.isArray(array));
console.log(arrayLike instanceof Array);
console.log(realArray instanceof Array);



// convert array like object to arrays in ES6
var realArray = [ 'a', 'b', 'c', 'd', 'e'];
var arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    length: 5
};
var array = Array.from(arrayLike);
console.log(array);
console.log(realArray);
console.log(arrayLike);
console.log(Array.isArray(arrayLike));
console.log(Array.isArray(realArray));


// now use for...of
var realArray = [ 'a', 'b', 'c', 'd', 'e'];
var arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    length: 5
};
var array = Array.from(arrayLike);
console.log(array);
console.log(realArray);
console.log(arrayLike);
console.log(Array.isArray(arrayLike));
console.log(Array.isArray(realArray));


var realArray = [ 'a', 'b', 'c', 'd', 'e'];
var arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    length: 5
};
var array = Array.from(arrayLike);
console.log(array);
console.log(realArray);

console.log(arrayLike);
console.log(Array.isArray(arrayLike));
console.log(Array.isArray(realArray));
console.log(arrayLike instanceof Array);
console.log(realArray instanceof Array);
console.log(array instanceof Array);
console.log(Array.isArray(array));


var myArrayLike = {
    0: 'Value shantel is smart',
    1: 'Value daisy is ugly',
    length: 2
};

Array.from(myArrayLike).forEach(value => {
    console.log(value); // Outputs 'Value 0' and 'Value 1'
});

Array.from(myArrayLike, value => {
    console.log(value.toUpperCase()); // Outputs 'VALUE 0' and 'VALUE 1'
});

const mappedArray = Array.from(myArrayLike).map(value => value.toLowerCase());
console.log(mappedArray); // Outputs ['value 0', 'value 1']


var myGirlFriends = ['Daisy', 'Shantel', 'Dorcas', 'Shanice'];
myGirlFriends.forEach((value, index) => {
    console.log(index, value);
});
console.log(myGirlFriends.length);
console.log(myGirlFriends[0]);
console.log(myGirlFriends[1]);
console.log(myGirlFriends[2]);
console.log(myGirlFriends[3]);
console.log(myGirlFriends[4]);


var myGirlFriend = {
    0: 'Daisy',
    1: 'Shantel',
    2: 'Dorcas',
    3: 'Shanice',
    length: 4
};
console.log(myGirlFriend[0]);

console.log(myGirlFriend[1]);

console.log(myGirlFriend[2]);
