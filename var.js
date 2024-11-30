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

function reverseString(str) {
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
console.log(string[4]);


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
console.log(string.indexOf("o"));
console.log(string.indexOf("foo"));

var string = "Hello, World!";
console.log(string.lastIndexOf("o"));
console.log(string.lastIndexOf("foo"));


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
    day: 'numeric',
    month: 'short',
    year: 'numeric'
});
console.log(today);

var tomorrow = new Date().toString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
    weekday: 'long',
    era: 'numeric',
    timeZoneName: 'short'

});
console.log(tomorrow);


var DateObject = (function () {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var date = function (str) {
        this.set(str);
    };
    date.prototype = {
        set: function (str) {
            var dateDef = str ? new Date(str) : new Date();
            this.day = dateDef.getDate();
            this.dayPadded = (this.day < 10) ? ("0" + this.day) : "" + this.day;
            this.month = dateDef.getMonth() + 1;
            this.monthPadded = (this.month < 10) ? ("0" + this.month) : "" + this.month;
            this.monthName = monthNames[this.month - 1];
            this.year = dateDef.getFullYear();
        },
        get: function (properties, separator) {
            var separator = separator ? separator : '-'
            ret = [];
            for (var i in properties) {
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
console.log(x && y);

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
console.log(T() || F());
console.log(F() || T());


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
switch (animal) {
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
switch (employed) {
    case 'Tech':
        console.log('I will marry since employed !== "Tech"');
        break;
    case 'white job':
        console.log('I will not marry since employment !== "white job"');
        break;
    default:
        console.log('I will marry when I want');
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
var realArray = ['a', 'b', 'c', 'd', 'e'];
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
var realArray = ['a', 'b', 'c', 'd', 'e'];
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
var realArray = ['a', 'b', 'c', 'd', 'e'];
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


var realArray = ['a', 'b', 'c', 'd', 'e'];
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

/*
// Assuming this code is run in a browser
var divs = document.getElementsByTagName('div'); // NodeList
var divArray = Array.from(divs); // Convert to Array
console.log(divArray); // Outputs an Array of div elements
*/

function example() {
    const argsArray = Array.from(arguments); // Convert arguments to Array
    console.log(argsArray); // Outputs an Array of the arguments
}
example(1, 2, 3, 4); // Logs [1, 2, 3, 4]


// Convert Array-like Objects to Arrays in ≤ ES5
var realArray = ['a', 'b', 'c', 'd', 'e'];
var arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    length: 5
};
var array = Array.prototype.slice.call(arrayLike);
console.log(array);
console.log(realArray);
console.log(arrayLike);
console.log(Array.isArray(arrayLike));
console.log(Array.isArray(realArray));
console.log(Array.isArray(array));

console.log(arrayLike instanceof Array);
console.log(realArray instanceof Array);
console.log(array instanceof Array);
console.log(Array.isArray(array));
console.log(Array.isArray(realArray));
console.log(Array.isArray(arrayLike));
console.log(arrayLike instanceof Array);


// Convert a NodeList to an Array
//var divs = document.getElementsByTagName('div'); // NodeList
//var divArray = Array.prototype.slice.call(divs); // Convert NodeList to Array
//console.log(divArray); // Logs an Array of div elements

// Convert arguments into an Array
function getArgs() {
    var argsArray = Array.prototype.slice.call(arguments); // Convert arguments to Array
    console.log(argsArray); // Logs [1, 2, 3]
}
getArgs(1, 2, 3, 'shantel, daisy'); // Call the function

// Convert array-like object with a length property
var arrayLike = { 0: 'Value 0', 1: 'Value 1', length: 2 };
var realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray); // Logs ['Value 0', 'Value 1']



// using call() method
// Convert a NodeList to an Array

// Convert arguments into an Array
function getArgs() {
    var argsArray = Array.prototype.slice.call(arguments);
    console.log(argsArray); // Logs [1, 2, 3]
}
getArgs(1, 2, 3); // Call the function

// Convert array-like object
var arrayLike = { 0: 'Value 0', 1: 'Value 1', length: 2 };
var realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray); // Logs ['Value 0', 'Value 1']




// Reducing Values in JavaScript
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

var myGirlFriends = ['Daisy', 'Shantel', 'Dorcas', 'Shanice'];
var concatenatedString = myGirlFriends.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, '');
console.log(concatenatedString);

// Array sum in reducing values in javascript
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

var myGirlFriends = ['Daisy', 'Shantel'];
var concatenatedString = myGirlFriends.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, '');
console.log(concatenatedString);

// flatten array of objects in reducing values in javascript
var objects = [{ name: 'Daisy' }, { name: 'Shantel' }, { name: 'Dorcas' }, { name: 'Shanice' }];
arrayOfNames = objects.reduce(function (accumulator, currentValue) {
    accumulator.push(currentValue.name);
    return accumulator;
}, []);
console.log(arrayOfNames);



//MAPPING VALUES IN JAVASCRIPT
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (number) {
    return number * 2;

});
var myGirlFriends = ['Daisy', 'Shantel', 'Dorcas', 'Shanice'];
var capitalizedNames = myGirlFriends.map(function (name) {
    return name.toUpperCase();
});
console.log(doubledNumbers);
console.log(capitalizedNames);
console.log(numbers);
console.log(myGirlFriends);

var myGirlFriends = ['Daisy', 'Shantel', 'Dorcas', 'Shanice'];
var capitalizedNames = myGirlFriends.map(function (name) {
    return name.toUpperCase();
});
console.log(capitalizedNames);


// Filtring Object Arrays in JavaScript
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

var girlFriends = [
    { name: 'Daisy', age: 22 },
    { name: 'Shantel', age: 25 },
    { name: 'Dorcas', age: 30 },
    { name: 'Shanice', age: 35 }
];
var youngGirlFriends = girlFriends.filter(function (girlFriend) {
    return girlFriend.age < 30;
});
console.log(youngGirlFriends);

var dreamCars = [
    { model: 'Dodge', year: 2015 },
    { model: 'Ford', year: 2016 },
    { model: 'Toyota', year: 2017 },
    { model: 'Nissan', year: 2018 }
];
var bestMyCars = dreamCars.filter(function (dreamCars) {
    return dreamCars.year > 2014;
});
console.log(bestMyCars);

// Suppose we want to get all odd number in an array:

var numbers = [1, 2, 3, 4, 5];
var oddNumbers = numbers.filter(function (number) {
    return number % 2 !== 0;
});
console.log(oddNumbers);

// shortened to (n => n % 2)

var numbers = [1, 2, 3, 4, 5];
var oddNumbers = numbers.filter(n => n % 2);
console.log(oddNumbers)

var age = [{
    name: 'Daisy',
    age: 22
}, {
    name: 'Shantel',
    age: 25
}, {
    name: 'Dorcas',
    age: 30
}, {
    name: 'Shanice',
    age: 35
}];
var friendsAllowedAtMine = age.filter(function (age) {
    return age.age < 30;
});
console.log(friendsAllowedAtMine);

var people = [{
    name: 'Daisy',
    age: 22
}, {
    name: 'Shantel',
    age: 25
}, {
    name: 'Dorcas',
    age: 30
}, {
    name: 'Shanice',
    age: 35
}];
var allowedAtOurBar = people.filter(function (people) {
    return people.age > 30;
});
console.log(allowedAtOurBar);



/// Sorting Arrays in JavaScript
var numbers = [1, 2, 3, 4, 5];

var sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedNumbers);

var girls = ['shantel', 'daisy', 'shanice', 'dorcas'];
var sortedGirls = girls.sort(function (shantel, daisy) {
    return shantel - daisy;
});
console.log(sortedGirls);

// Default Sort
var items = ['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'];
var sortedItems = items.sort();
console.log(sortedItems);

// Alphabetical Sort
var items = ['s', 't', 'a', 'K', 'o', 'v', 'E', 'r', 'W',];
var sortedItems = items.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(sortedItems);

// String sorting by length (longest ﬁrst)
var animals = ['cat', 'donkey', 'elephant', 'goat', 'penguins'];
var sortedAnimals = animals.sort(function (a, b) {
    return b.length - a.length;
});
console.log(sortedAnimals);

// String sorting by length (shortest ﬁrst)
var animals = ['cat', 'donkey', 'elephant', 'goat', 'penguins'];
var sortedAnimals = animals.sort(function (a, b) {
    return a.length - b.length;
});
console.log(sortedAnimals);

// Numerical Sort (ascending)
var numbers = [1, 2, 3, 4, 5];
var sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedNumbers);

// Numerical Sort (descending)
var numbers = [101, 201, 301, 401, 501];
var sortedNumbers = numbers.sort(function (a, b) {
    return b - a;
});
console.log(sortedNumbers);

// Sorting array by even and odd numbers
var numbers = [1, 2, 3, 4, 5, 9, 13, 22, 28, 17, 100, 202, 505, 1000];
var sortedNumbers = numbers.sort(function (a, b) {
    return (a & 1) - (b & 1) || a - b;
});
console.log(sortedNumbers);

// Date Sort (descending)
var dates = [
    new Date('2024-01-01'),
    new Date('2023-01-01'),
    new Date('2022-01-02'),
    new Date('2021-01-03'),
    new Date('2020-01-04'),
    new Date('2029-01-05')
];
var sortedDates = dates.sort(function (a, b) {
    return b - a;
});
console.log(sortedDates);

var dates = [
    new Date(2007, 11, 10),
    new Date(2014, 2, 21),
    new Date(2009, 6, 11),
    new Date(2016, 7, 23)
];
dates.sort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});
// the date objects can also sort by its difference
// the same way that numbers array is sorting
dates.sort(function (a, b) {
    return b - a;
});
console.log(dates);


// Array Iteration in JavaScript
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number);
});
var myGirlFriends = ['Daisy', 'Shantel', 'Dorcas', 'Shanice'];

myGirlFriends.forEach(function (name) {
    console.log(name);
});
console.log(myGirlFriends);
console.log(numbers);

for (var i = 0, length = 10; i < length; i++) {
    console.log(i);
}

var myGirlFriends = ['Daisy', 'Shantel', 'Dorcas', 'Shanice'];
myGirlFriends.forEach(function (name) {
    console.log(name);
});
console.log(myGirlFriends);

for (var i = myArray.length - 1; i > -1; i--) {
    console.log(myArray[i]);
};

// using A while loop for Array Iteration in JavaScript
var myArray = [1, 2, 3, 4, 5];
var i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

var key = 0;
while (value = myArray[key++]) {
    console.log(value);
}

// using for...in loop for Array Iteration in JavaScript
var myArray = [1, 2, 3, 4, 5];
for (var key in myArray) {
    console.log(myArray[key]);
}
var myArray = [1, 2, 3, 4, 5];
for (var key in myArray) {
    console.log(key);
}
var myArray = [1, 2, 3, 4, 5];
for (var key in myArray) {
    console.log(myArray[key]);
}
var myArray = [11, 22, 33, 44, 55];
for (var key in myArray) {
    console.log(key);

}

// using for...of loop for Array Iteration in JavaScript
var myArray = [1, 2, 3, 4, 50];
for (var value of myArray) {
    console.log(value);
}
var myGirlFriend = ['Shartel', 'Daisy', 'NaN'];
for (var value of myGirlFriend) {
    console.log(value)
}

// using Array.prototype.keys() for Array Iteration in JavaScript
var myArray = [1, 2, 3, 4, 5];
var iterator = myArray.keys();
for (var key of iterator) {
    console.log(key);
}

var myArray = [1, 2, 3, 4, 5];
var iterator = myArray.keys();
for (var key of iterator) {
    console.log(myArray[key]);
}
var myArray = [1, 2, 3, 4, 5];
var iterator = myArray.keys();
for (var key of iterator) {
    console.log(key);
}

var myArray = [1, 2, 3, 4];
for (let i of myArray.keys()) {
    var twoValue = myArray[i] * 2;
    console.log("2 * value is: %d", twoValue);
}

// using Array.prototype.forEach() for Array Iteration in JavaScript
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function (value) {
    console.log(value);
});

var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function (value) {
    console.log(value);
});
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function (value) {
    console.log(value);
});

[1, 2, 3, 4].forEach(function (value, index, arr) {
    var twoValue = value * 2;
    console.log("2 * value is: %d", twoValue);
});

var myArray = [1, 2, 3, 4];
for (var i = 0; i < myArray.length; ++i) {
    var twoValue = myArray[i] * 2;
    console.log("2 * value is: %d", twoValue);
}

var myArray = [10, 20, 30, 40];
for (var i = 0; i < myArray.length; ++i) {
    var twoValue = myArray[i] * 2;
    console.log("2 * value is: %d", twoValue);
}

var myArray = [1, 2, 3, 4],
    i = 0, sum = 0;
while (i++ < myArray.length) {
    sum += i;
}
console.log(sum);

var myArray = [19, 29, 39, 49],
    i = 0, sum = 0;
while (i++ < myArray.length) {
    sum += i;
}
console.log(sum);



// using Array.prototype.every for Array Iteration in JavaScript
var myArray = [1, 2, 3, 4, 5];
var allEven = myArray.every(function (value) {
    return value % 2 === 0;

});
console.log(allEven);

var myArray = [1, 2, 3, 4, 5];
var allEven = myArray.every(function (value) {
    return value % 2 === 0;

});
console.log(allEven);

var myArray = [1, 2, 3, 4, 5];
var allEven = myArray.every(function (value) {
    return value % 2 === 0;

});
console.log(allEven);

// using Array.prototype.some for Array Iteration in JavaScript
var myArray = [1, 2, 3, 4, 5];
var someEven = myArray.some(function (value) {
    return value % 2 === 0;

});
console.log(someEven);

var myArray = [1, 2, 3, 4, 5];
var someEven = myArray.some(function (value) {
    return value % 2 === 0;

});
console.log(someEven);


// using jQuery.each() , in jQuery: Array Iteration in JavaScript
const { JSDOM } = require("jsdom");
const $ = require("jquery")(new JSDOM().window);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
$.each(myArray, function (index, value) {
    console.log(value);
});

var myArray = [1, 22, 333, 44, 444, 555, 66, 777,];
$.each(myArray, function (index, value) {
    console.log(value);
});


// using _.each() , in Underscore.js: Array Iteration in JavaScript
var _ = require("underscore");

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
_.each(myArray, function (value) {
    console.log(value);
});

var _ = require("underscore");

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
_.each(myArray, function (value) {
    console.log(value);
});

var myArray = [10, 2, 3, 4, 5, 6, 7, 8, 90];
_.each(myArray, function (value) {
    console.log(value);
});


// Destructuring an Array in JavaScript
var myArray = [1, 2, 3, 4, 5];
var [first, shantel, daisy, shanice, dorcas] = myArray;
console.log(first);
console.log(shantel);
console.log(daisy);
console.log(shanice);
console.log(dorcas);

var myArray = [1, 2, 3, 4, 5];
var [first, second, third, fourth, fifth] = myArray;
console.log(first);
console.log(second);

console.log(third);
console.log(fourth);
console.log(fifth);


var triangle = [3, 4, 5];
var [length, height, hypotenuse] = triangle;

console.log(length); // → 3
console.log(height); // → 4
console.log(hypotenuse === 5); // → true

var girlFriends = [shantel, daisy];
var [first, second] = girlFriends;
console.log(first);
console.log(second);
console.log(girlFriends);
console.log(shantel);
console.log(daisy);



// Removing duplicate elements in an Array in JavaScript
var myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
var uniqueArray = [...new Set(myArray)];

console.log(uniqueArray);
console.log(myArray);
console.log(myArray.length);
console.log(uniqueArray.length);
console.log(uniqueArray);


// Array comparison 
// For simple array comparison you can use JSON stringify and compare the output strings:
var a = [1, 2, 3];
var b = [1, 2, 3];
console.log(JSON.stringify(a) === JSON.stringify(b));
// → true

var a = [1, 2, 3];
var b = [1, 2, 3, 4];
console.log(JSON.stringify(a) === JSON.stringify(b));

var lovedGirlfriends = ['Shantel', 'Daisy', 'Shanice', 'Dorcas'];
var allowedGirlfriends = ['Shantel', 'Daisy', 'Shanice', 'Dorcas'];
console.log(JSON.stringify(lovedGirlfriends) === JSON.stringify(allowedGirlfriends));

var lovedGirlfriends = ['Shantel', 'Daisy', 'Shanice', 'Dorcas'];
var allowedGirlfriends = ['Shantel', 'Daisy', 'Shanice', 'Dorcas'];

console.log(JSON.stringify(lovedGirlfriends) === JSON.stringify(allowedGirlfriends));


// You can use a recursive function to compare arrays.

// This function will compare the length of the arrays and their elements recursively:
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!compareArrays(arr1[i], arr2[i])) {
                return false;
            }
        } else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
var a = [1, 2, 3];

var b = [1, 2, 3];
console.log(compareArrays(a, b));
// → true

var a = [1, 2, 3];

var b = [1, 2, 3, 4];
console.log(compareArrays(a, b));

// → false

var a = [1, [2, 3]];
var b = [1, [2, 3]];
console.log(compareArrays(a, b));



// Reversing arrays in JavaScript
var myArray = [1, 2, 3, 4, 5];
var reversedArray = myArray.reverse();

console.log(reversedArray);

var myArray = [1, 2, 3, 4, 5];

var reversedArray = myArray.reverse();

console.log(reversedArray);

var myArray = [1, 2, 3, 4, 5];
var reversedArray = myArray.reverse();
console.log(reversedArray);

var myArray = [1, 2, 3, 4, 5];
var reversedArray = myArray.reverse();
console.log(reversedArray);

var myGirls = ['daisy', 'shantel', 'shanice', 'dorcas'];
var reversedGirls = myGirls.reverse();
console.log(reversedGirls);


// Shallow cloning an array in JavaScript
var myArray = [1, 2, 3, 4, 5];
var clonedArray = [...myArray];
console.log(clonedArray);

var myArray = [1, 2, 3, 4, 5];
var clonedArray = [...myArray];
console.log(clonedArray);


// Concatenating Arrays in JavaScript
var myArray = [1, 2, 3, 4, 5];
var myArray2 = [6, 7, 8, 9, 10];
var concatenatedArray = myArray.concat(myArray2);
console.log(concatenatedArray);

// Concatenating Multiple Arrays in JavaScript 
var myArray = [1, 2, 3, 4, 5];
var myArray2 = [6, 7, 8, 9, 10];
var myArray3 = [11, 12, 13, 14, 15];
var concatenatedArray = myArray.concat(myArray2, myArray3);
console.log(concatenatedArray);

// Concatenating Arrays in JavaScript Without Copying the First Array
var myArray = [1, 2, 3, 4, 5];

var myArray2 = [6, 7, 8, 9, 10];
var myArray3 = [11, 12, 13, 14, 15];
var concatenatedArray = myArray.concat(myArray2, myArray3);
console.log(concatenatedArray);


// Merge two array as key value pair in JavaScript

var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"];
var result = rows.reduce(function (result, field, index) {
    result[columns[index]] = field;
    return result;
}, {})
console.log(result);

var columns = ["Name", "Number", "Size", "Location", "Age"];
var rows = ["Shantel", "5", "petite", "Fsvl", "25"];
var result = rows.reduce(function (result, field, index) {
    result[columns[index]] = field;
    return result;

}, {})
console.log(result);

var columns = ["Name", "Number", "Size", "Location", "Age"];
var rows = ["Daisy", "4", "short$chubby", "Hall20", "22"];
var result = rows.reduce(function (result, field, index) {
    result[columns[index]] = field;
    return result;

}, {})
console.log(result);



// Array spread / rest in JavaScript

let arr = [1, 2, 3, ...[4, 5, 6]];
console.log(arr);

arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr)

let num = [1, 2, 3, ...[..."456"].map(x => parseInt(x))];
console.log(num)

let arr2 = [..."1234567890"].map(x => parseInt(x));
console.log(arr2);


// Filtering values in array in JavaScript
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredArray = myArray.filter(function (value) {
    return value % 2 === 0;

});
console.log(filteredArray);

var myGirls = ['Shantel', 'Daisy', 'Shanice', 'Dorcas'];
var knownGirls = myGirls.filter(function (value) {
    return value.length > 5;
    // return value % 2 === 5;


});
console.log(knownGirls);

// Filter falsy values in an array in JavaScript
var filtered = [0, undefined, {}, null, '', true, 5].filter(Boolean);
console.log(filtered);


// Searching an Array in JavaScript
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var found = myArray.find(function (value) {
    return value > 5;
});
console.log(found);

let myGirl = [
    { name: "shantel" },
    { name: "daisy" }
];
var shantel = myGirl.find(myGirls => myGirls.name === "shantel");
console.log(shantel);


// Convert a String to an Array in JavaScript
var myGirls = "Shantel Shartel";
var myArray = myGirls.split(" ");
console.log(myArray);

var strArray = "StackOverflow".split("");
console.log(strArray);

var myFavGirl = "Shantel Shartel Atieno Odhiambo".split("");
console.log(myFavGirl);

var strArray = [..."sky is dark and it has started raining"];
console.log(strArray)



/// Removing items from an array in Javascript using Shift, Pop, Splice, Delete, Array.prototype.length

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.shift();
console.log(myArray);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.pop();
console.log(myArray);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.splice(0, 1);
console.log(myArray);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.splice(0, 2);
console.log(myArray);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete myArray[0];
console.log(myArray);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.length = 0;
console.log(myArray);

array = [1, 2, 3, 4, 5];
array.length = 2;
console.log(array);



// Removing all elements in an array in JavaScript
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.length = 4;
console.log(myArray);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.length = 0;
console.log(myArray);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.length = 0;
console.log(myArray);


// Finding the minimum or maximum element
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var min = Math.min(...myArray);
console.log(min);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var max = Math.max(...myArray);
console.log(max);

var myArray = [1, 2, 3, 4, 99, 20];
var maxValue = Math.max(...myArray);
var minValue = Math.min(...myArray);
console.log(maxValue);
console.log(minValue);

var maxValue = myArray[0];
for (var i = 1; i < myArray.length; i++) {
    var currentValue = myArray[i];
    if (currentValue > maxValue) {
        maxValue = currentValue;
    }
}
console.log(maxValue);


var minValue = myArray[0];
for (var i = 1; i < myArray.length; i++) {
    var currentValue = myArray[i];
    if (currentValue < minValue) {
        minValue = currentValue;
    }
}
console.log(minValue);


var myArray = [1, 2, 3, 4];
myArray.reduce(function (a, b) {
    return Math.min(a, b);
});
myArray.reduce(function (a, b) {
    return Math.max(a, b);
});
console.log(myArray);


var myArray = [1, 2, 3, 4];
var min = Math.min(...myArray);
var max = Math.max(...myArray);
console.log(min);
console.log(max);

myArray.reduce((a, b) => Math.min(a, b));
myArray.reduce((a, b) => Math.max(a, b));
console.log(myArray);


function myMax(array) {
    return array.reduce(function (maxSoFar, element) {
        return Math.max(maxSoFar, element);
    }, -Infinity);
}
myMax([3, 5]);
myMax([]);
Math.max.apply(null, []);
Math.max.apply(null, [3, 5]);
Math.max.apply(null, [3, 5, 7]);
Math.max.apply(null, [3, 5, 7, 9]);
Math.max.apply(null, [3, 5, 7, 9, 11]);
Math.max.apply(null, [3, 5, 7, 9, 11, 13]);
console.log(myMax([3, 5]));
console.log(myMax([]));
console.log(Math.max.apply(null, []));
console.log(Math.max.apply(null, [3, 5]));
console.log(Math.max.apply(null, [3, 5, 7]));
console.log(Math.max.apply(null, [3, 5, 7, 9]));
console.log(Math.max.apply(null, [3, 5, 7, 9, 11]));
console.log(Math.max.apply(null, [3, 5, 7, 9, 11, 13]));



// Standard Array Initialization

var myArray = new Array();
myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;

myArray[3] = 4;

console.log(myArray);

var array = [1, 2, 3, 4];
var array2 = new Array(1, 2, 3, 4);
var arr3 = new Array();
console.log(array, array2, arr3);

var arr4 = new Array(4);
console.log(arr4);

var arr5 = new Array("foo");
console.log(arr5);

//Array.of(21, "Hello", "World");
//console.log(Array.of(21, "Hello", "World"));
var arr5 = Array.of(21, "Hello", "World");
console.log(arr5);

var arr6 = Array.of(21, "Hello", "World");
console.log(arr6);

var newArray = Array.from({ length: 5 }, (_, index) => Math.pow(index, 4));
console.log(newArray);



// Joining array elements in a string 
var myArray = [1, 2, 3, 4, 5];
console.log(["hello", "", "world"].join(myArray));

var myGirls = ['Shantel, Daisy, Dorcas, Shanice'];
console.log(["I", "hate", "", "them"].join(myGirls));


// Removing/Adding elements using splice() in JavaScript

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myArray.splice(2, 3);
console.log(myArray);

var values = [1, 2, 3, 4, 5, 6, 7, 9]
var i = values.indexOf(3);
if (i >= 0) {
    values.splice(i, 1);
}
console.log(values);

// The splice() method can also be used to add elements to an array.
var values = [1, 2, 4, 5, 3];
var i = values.length + 1;
values.splice(i, 0, 6, 7, 8);
console.log(values)

var girls = ['shantel', 'daisy'];
var i = girls.length + 1;
girls.splice(i, 'shanice', 'dorcas');
console.log(girls);

var values = [1, 2, 4, 5, 3];
var i = values.length + 1;
values.splice(i, 0, 6, 7, 8);
console.log(values);



/// The entries() method
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
var letters = ['a', 'b', 'c'];
for (const [index, element] of letters.entries()) {
    console.log(index, element);
}

var girls = ['shantel', 'daisy', 'shanice', 'dorcas'];
for (const [index, element] of girls.entries()) {
    console.log(index, element);
}

// Remove value from array
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.splice(2, 3);
console.log(myArray);

//array.filter(function(val) { return val !== to_remove; });
//console.log(array);



/// Flattening Arrays
function flattenES6(arr) {
    return [].concat(...arr);
}
var arrL1 = [1, 2, [3, 4]];
console.log(flattenES6(arrL1));

var arrL2 = [1, 2, [3, 4, [5, 6]]];
console.log(flattenES6(arrL2));
console.log(flattenES6(arrL2).flat());
console.log(flattenES6(arrL2).flat(2));



// Append / Prepend items to Array using Unshift, Push
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.unshift(0);
console.log(myArray);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.push(11, 22, 555, 777, 888);
console.log(myArray);



// Object keys and values to array
var myObject = { a: 1, b: 2, c: 3, d: 4, e: 5 };
var myKeys = Object.keys(myObject);
console.log(myKeys);

var myValues = Object.values(myObject);
console.log(myValues);

var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
};
var array = [];
for (var people in object) {
    array.push([people, object[people]]);
}
console.log(array);

var girlFriend = {
    name: "Shantel",
    age: 25,
    location: "Fsvl",
    size: "petite",
    number: 5,
    color: "lightskin"
};
var array = [];
for (var girl in girlFriend) {
    array.push([girl, girlFriend[girl]]);
}
console.log(array);



/// Logical connective of values using .some , .every, OR and AND
[false, false].some(function (value) {
    return value;
});
[false, false].every(function (value) {
    return value;
});
[true, true].some(function (value) {
    return value;
});
[true, true].every(function (value) {
    return value;
});
[true, false].some(function (value) {
    return value;
});
console.log([true, false].some(function (value) {
    return value;
}));
[true, false].every(function (value) {
    return value;
});
console.log([true, false].every(function (value) {
    return value;
}));
console.log([true, true].some(function (value) {
    return value;
}));
console.log([true, true].every(function (value) {
    return value;
}));
console.log([true, false].some(function (value) {
    return value;
}));


// Checking if an object is an Array
// Array.isArray(obj) returns true if the object is an Array , otherwise false .
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Array.isArray(myArray));

Array.isArray([])
Array.isArray([1, 2, 3])
Array.isArray({})
Array.isArray(1)
console.log(Array.isArray([]));

[] instanceof Array;
1 instanceof Array;
console.log([] instanceof Array);


// Insert an item into an array at a speciﬁc index
// Simple item insertion can be done with Array.prototype.splice method:
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.splice(2, 0, 'foo');
console.log(myArray);

Array.prototype.insert = function (index) {
    this.splice.apply(this, [index, 0].concat(
        Array.prototype.slice.call(arguments, 1)));
    return this;
};
["a", "b", "c", "d"].insert(2, "X", "Y", "Z").slice(1, 6);
console.log(["a", "b", "c", "d"].insert(2, "X", "Y", "Z").slice(1, 6));


Array.prototype.insert = function (index) {
    index = Math.min(index, this.length);
    arguments.length > 1
        && this.splice.apply(this, [index, 0].concat([].pop.call(arguments)))
        && this.insert.apply(this, arguments);
    return this;
};
["a", "b", "c", "d"].insert(2, "V", ["W", "X", "Y"], "Z").join("-");
console.log(["a", "b", "c", "d"].insert(2, "V", ["W", "X", "Y"], "Z").join("-"));



// Sorting multidimensional array

var array = [
    ["key1", 10],
    ["key2", 3],
    ["key3", 40],
    ["key4", 20]
];
array.sort(function (a, b) {
    return a[1] - b[1];
})
array.sort((a, b) => a[1] - b[1]);
console.log(array);




// Test all array items for equality
// The .every method tests if all array elements pass a provided predicate test.
[1, 2, 1].every(function (item, i, list) { return item === list[0]; });
[1, 1, 1].every(function (item, i, list) { return item === list[0]; });
console.log()



/// OBJECTS IN JAVASCRIPT
// Shallow cloning
var obj = { a: 1, b: 2 };
var obj2 = Object.assign({}, obj);
console.log(obj2);

const existing = { a: 1, b: 2, c: 3 };
const clone = Object.assign({}, existing);
console.log(clone);

const existing1 = { a: 1, b: 2, c: 3 };
const { ...clone1 } = existing;
console.log(clone1);

var obj = { a: 0, b: { c: 0 } };
var objclone = Object.assign({}, obj);
console.log(objclone);

var existing2 = { a: 1, b: 2, c: 3 };
var clone2 = {};
for (var prop in existing) {
    if (existing.hasOwnProperty(prop)) {
        clone[prop] = existing[prop];
    }
}
console.log(clone2);


// Object.freeze
var obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3;
console.log(obj);

var obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3;
console.log(obj);

console.log(Object.isFrozen(obj));
console.log(Object.isFrozen({}));
console.log(Object.isFrozen([]));
console.log(Object.isFrozen(new Date()));
console.log(Object.isFrozen(new RegExp()));
console.log(Object.isFrozen(new Map()));
console.log(Object.isFrozen(new Set()));


// Object Cloning
var obj = { a: 1, b: 2 };
var objclone = JSON.parse(JSON.stringify(obj));
console.log(objclone);

var obj = { a: 1, b: 2 };
var objclone = Object.assign({}, obj);
console.log(objclone);

var obj = { a: 1, b: 2 };
var objclone = Object.create(obj);
console.log(objclone);

var obj = { a: 1, b: 2 };
var objclone = { ...obj };
console.log(objclone);

var obj = { a: 1, b: 2 };
var objclone = Object.fromEntries(Object.entries(obj));
console.log(objclone);

var obj = { a: 1, b: 2 };
var objclone = Object.fromEntries(Object.entries(obj));
console.log(objclone);

var obj = { a: 1, b: 2 };
var objclone = Object.fromEntries(Object.entries(obj));
console.log(objclone);



/// Object properties iteration
var obj = { a: 1, b: 2 };
for (var prop in obj) {
    console.log(prop, obj[prop]);

}
console.log(Object.keys(obj));

var girlFriend = {
    name: "Shantel",
    age: 25,
    location: "Fsvl",
    size: "petite",
    number: 5,
    color: "lightskin"
};
for (var prop in girlFriend) {
    console.log(prop, girlFriend[prop]);
};
console.log(Object.keys(girlFriend));

var obj = { a: 1, b: 2 };
Object.keys(obj).forEach(function (key) {
    console.log(key, obj[key]);
});
console.log(Object.keys(obj));



// object.assign
var obj = { a: 1, b: 2 };
var objclone = Object.assign({}, obj);
console.log(objclone);

var user = {
    firstName: "Bran"
};
Object.assign(user, { lastName: "Don", age: 39 });
var obj = Object.assign({}, user);
console.log(user);
console.log(obj);

var obj1 = {
    a: 1
};
var obj2 = {
    b: 2
};
var obj3 = {
    c: 3
};
var obj = Object.assign(obj1, obj2, obj3);
console.log(obj);
console.log(obj1);
console.log(obj2);

var var_1 = 'abc';
var var_2 = true;
var var_3 = 10;
var var_4 = null;
var var_5 = Symbol('foo');
var obj = Object.assign({}, var_1, null, var_2, undefined, var_3, var_4, var_5);
console.log(obj);


// Object rest/spread (...)
var obj = { a: 1, b: 2 };
var objclone = { ...obj };
console.log(objclone);

var obj = { a: 1 };
var obj2 = { ...obj, b: 2, c: 3 };
var obj3 = { ...obj, b: { c: 2 } };
console.log(obj2);
console.log(obj3);



// Object.deﬁneProperty
var obj = { a: 1 };
Object.defineProperty(obj, 'b', {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(obj);
console.log(obj.b);
console.log(Object.keys(obj));

console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.getOwnPropertyNames(obj));


// Accesor properties (get and set)
var obj = {
    a: 1,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
};
console.log(obj.a);
console.log(obj.b);
obj.c = 10;

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

// Object.is
console.log(Object.is(25, 25));
console.log(Object.is("foo", "foo"));
console.log(Object.is("foo", "bar"));
console.log(Object.is([], []));
console.log(Object.is(null, null));
console.log(Object.is(true, false));
console.log(Object.is(true, 1));
console.log(Object.is([], {}));


// Dynamic / variable property names
var obj = { a: 1 };
var objclone = { [obj.a]: 2 };
console.log(objclone);

// Arrays are Objects
var anObject = {
    foo: 'bar',
    length: 'interesting',
    '0': 'zero!',
    '1': 'one!'
};
var anArray = ['zero.', 'one.'];

console.log(anArray[0], anObject[0]);
console.log(anArray[1], anObject[1]);
console.log(anArray.length, anObject.length);
console.log(anArray.foo, anObject.foo);


// Object property existence
var obj = { a: 1 };
console.log('a' in obj);
console.log('b' in obj);
console.log('toString' in obj);
console.log(obj.hasOwnProperty('a'));


// Object.seal
var obj = { a: 1 };
Object.seal(obj);
obj.a = 2;
console.log(obj);
delete obj.a;
console.log(obj);
obj.b = 3;
console.log(obj);



// Convert object's values to array
var obj = { a: 1, b: 2, c: 3 };
var values = Object.values(obj);
console.log(values);

var obj = {
    a: "hello",
    b: "this is",
    c: "javascript!",
};
var array = Object.keys(obj)
    .map(function (key) {
        return obj[key];
    });
console.log(array);



// Retrieving properties from an object

// Methods of retrieving properties :
// 1. for..in loop
var obj = { a: 1, b: 2, c: 3 };
for (var prop in obj) {
    console.log(prop, obj[prop]);
};
console.log(Object.keys(obj));
console.log(Object.values(obj));


var x = { a: 10, b: 3 }, props = [];
for (prop in x) {
    props.push(prop);
}
console.log(props);
console.log(Object.keys(x))
console.log(Object.values(x))

var x = { a: 10, __proto__: { b: 10 } }, props = [];
for (prop in x) {
    props.push(prop);
}
console.log(props);
console.log(Object.keys(x))
console.log(Object.values(x))

var x = { a: 10 }, props = [];
Object.defineProperty(x, "b", { value: 5, enumerable: false });
for (prop in x) {
    props.push(prop);
}
console.log(props);
console.log(Object.keys(x))
console.log(Object.values(x))



// 2. Object.keys() function
var obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

var x = { a: 10, b: 3 }, props;
props = Object.keys(x);
console.log(props);
console.log(Object.keys(x))
console.log(Object.values(x))

var x = { a: 10, __proto__: { b: 10 } }, props;
props = Object.keys(x);
console.log(props);

var x = { a: 10 }, props;
props = Object.keys(x);
console.log(props);

var x = { a: 10 }, props;
Object.defineProperty(x, "b", { value: 5, enumerable: false });
props = Object.keys(x);
console.log(props);

var x = { a: 10 }, props;
Object.defineProperty(x, "b", { value: 5, enumerable: true });
props = Object.keys(x);
console.log(props);

var x = { a: 10 }, props;
Object.defineProperty(x, "b", { value: 5, enumerable: true, configurable: false });
props = Object.keys(x);
console.log(props);


// 3. Object.getOwnProperties() function
var obj = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.entries(obj));
console.log(Object.getOwnPropertyDescriptor(obj));

var x = { a: 10, b: 3 }, props;
props = Object.getOwnPropertyNames(x);
console.log(props);

var y = { a: 10, __proto__: { b: 10 } }, props;
props = Object.getOwnPropertyNames(y);
console.log(props);

var z = { a: 10 }, props;
Object.defineProperty(z, "b", { value: 5, enumerable: false });
props = Object.getOwnPropertyNames(z);
console.log(props);

var girlFriend = {
    name: "Shantel",
    age: 25,
    location: "Fsvl",
    size: "petite",
    number: 5,
    color: "lightskin"
};
for (var prop in girlFriend) {
    console.log(prop, girlFriend[prop]);
};
console.log(Object.keys(girlFriend));
console.log(Object.values(girlFriend));
console.log(Object.entries(girlFriend));
console.log(Object.getOwnPropertyNames(girlFriend));
console.log(Object.getOwnPropertySymbols(girlFriend));


// A technique for retrieving all (own, enumerable, non enumerable, all prototype level) properties from an object
function getAllProperties(obj, props = []) {
    return obj == null ? props :
        getAllProperties(Object.getPrototypeOf(obj),
            props.concat(Object.getOwnPropertyNames(obj)));
}
var x = { a: 10, __proto__: { b: 5, c: 15 } };
//adding a non enumerable property to first level prototype
Object.defineProperty(x.__proto__, "d", { value: 20, enumerable: false });
console.log(getAllProperties(x));
console.log(Object.keys(x));
console.log(Object.values(x));
console.log(Object.entries(x)); //returns an array of key-value pairs
console.log(Object.getOwnPropertyNames(x));
console.log(Object.getOwnPropertySymbols(x));
console.log(Object.getOwnPropertyDescriptor(x, "a"));
console.log(Object.getOwnPropertyDescriptor(x, "b"));
console.log(Object.getOwnPropertyDescriptor(x, "c"));
console.log(Object.getOwnPropertyDescriptor(x, "d"));
console.log(Object.getOwnPropertyDescriptor(x, "e"));



// Read-Only property
var obj = { a: 1 };
Object.defineProperty(obj, 'b', {
    value: 2,
    writable: false,
    enumerable: true,
    configurable: true
});
console.log(obj);

var a = {};
Object.defineProperty(a, 'foo', {
    value: 'original',
    writable: false
});
a.foo = 'new';
console.log(a.foo);

var b = {};
Object.defineProperty(b, 'bra', {
    value: 'changed',
    writable: 'false'
});
b.bra = 'old';
console.log(b.bra);


// Non enumerable property
var obj = { a: 1 };
Object.defineProperty(obj, 'b', {
    value: 2,
    writable: true,
    enumerable: false,
    configurable: true
});
console.log(obj);

var obj = {};
Object.defineProperty(obj, "foo", { value: 'show', enumerable: true });
Object.defineProperty(obj, "bar", { value: 'hide', enumerable: false });
for (var prop in obj) {
    console.log(obj[prop]);
}
console.log(Object.keys(obj));

console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.getOwnPropertyDescriptor(obj, "foo"));


// Lock property description
var obj = { a: 1 };
Object.defineProperty(obj, 'b', {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: false
});
console.log(obj);


// Object.getOwnPropertyDescriptor
var obj = { a: 1 };
Object.defineProperty(obj, 'b', {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));

var girlFriend = {
    name: "Shantel",
    age: 25,
    location: "Fsvl",
    size: "petite",
    number: 5,
    color: "lightskin"
};
for (var prop in girlFriend) {
    console.log(prop, girlFriend[prop]);
};
console.log(Object.keys(girlFriend));


// Descriptors and Named Properties
var obj = { a: 1 };
Object.defineProperty(obj, 'b', {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
console.log(Object.getOwnPropertyDescriptor(obj, 'b'));

var girlFriend = {
    name: "Shantel",
    age: 25,
    location: "Fsvl",
    size: "petite",
    number: 5,
    color: "lightskin"
};
for (var prop in girlFriend) {
    console.log(prop, girlFriend[prop]);
};


// Object.keys
var obj = {
    a: "hello",
    b: "this is",
    c: "javascript!"
};
var keys = Object.keys(obj);
console.log(keys);

var girlFriend = {
    name: "Shantel",
    age: 25,
    location: "Fsvl",
    size: "petite",
    number: 5,
    color: "lightskin"
};
var keys = Object.keys(girlFriend);
console.log(keys);



// Properties with special characters or reserved words
myObject['special property ☺'] = 'it works!'
console.log(myObject['special property ☺'])

myObject[123] = 'hi!' // number 123 is automatically converted to a string
console.log(myObject['123']) // notice how using string 123 produced the same result
console.log(myObject['12' + '3']) // string concatenation
console.log(myObject[120 + 3]) // arithmetic, still resulting in 123 and producing the same result
console.log(myObject[123.0]) // this works too because 123.0 evaluates to 123
console.log(myObject['123.0']) // this does NOT work, because '123' != '123.0'


// Creating an Iterable object
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log(myIterable)

var myIterableObject = {};
// An Iterable object must define a method located at the Symbol.iterator key:
myIterableObject[Symbol.iterator] = function () {
    // The iterator should return an Iterator object
    return {
        // The Iterator object must implement a method, next()
        next: function () {
            // next must itself return an IteratorResult object
            if (!this.iterated) {
                this.iterated = true;
                // The IteratorResult object has two properties
                return {
                    // whether the iteration is complete, and
                    done: false,
                    // the value of the current iteration
                    value: 'One'
                };
            }
            return {
                // When iteration is complete, just the done property is needed
                done: true
            };
        },
        iterated: false
    };
};
for (var c of myIterableObject) {
    console.log(c);
}

var myIterableObject = {};
myIterableObject[Symbol.iterator] = function () {
    return {
        next: function () {
            if (!this.iterated) {
                this.iterated = true;
                return {
                    done: false,
                    value: 'One'
                };
            }
            return {
                done: true
            };
        },
        iterated: false
    };
};
for (var c of myIterableObject) {
    console.log(c);
}
console.log([...myIterableObject]);
console.log(Array.from(myIterableObject));
console.log(Array.of(...myIterableObject));
console.log(Array.of(myIterableObject));



// Iterating over Object entries - Object.entries()
var obj = { a: 1, b: 2, c: 3 };
for (var [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
console.log(Object.entries(obj));
console.log(Object.entries(obj).map(function (entry) {
    return entry[0] + entry[1];
}));
console.log(Object.entries(obj).map(([key, value]) => key + value));
console.log(Object.entries(obj).map(([key, value]) => key + value).join(''));
console.log(Object.entries(obj).map(([key, value]) => key + value).join(' '));
console.log(Object.entries(obj).map(([key, value]) => key + value).join(' '));


// Object.values()
var obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.values(obj).map(function (value) {
    return value * 2;
}));
console.log(Object.values(obj).map(value => value * 2));
console.log(Object.values(obj).map(value => value * 2).join(''));





// / ARITHMETIC (Math)
// Constants
console.log(Math.E); // Euler's constant and the base of natural logarithms
console.log(Math.PI); //
console.log(Math.LN2); //
console.log(Math.LN10); // natural logarithm of 10
console.log(Math.LOG2E); // base 2 logarithm of E
console.log(Math.LOG10E); // base 10 logarithm of E
console.log(Math.SQRT1_2); // square root of 1/2
console.log(Math.SQRT2); // square root of 2

// Methods
console.log(Math.abs(-10)); // returns the absolute value of a number
console.log(Math.acos(1)); // returns the arccosine of a number
console.log(Math.acosh(2)); // returns the hyperbolic arccosine of a number
console.log(Math.asin(1)); // returns the arcsine of a number
console.log(Math.asinh(1)); // returns the hyperbolic arcsine of a number
console.log(Math.atan(1)); // returns the arctangent of a number in the range (-PI/2, PI/2)
console.log(Math.atan2(1, 1)); // returns the arctangent of the quotient of its arguments
console.log(Math.atanh(1)); // returns the hyperbolic arctangent of a number
console.log(Math.cbrt(8)); // returns the cube root of a number
console.log(Math.ceil(1.1)); // returns the smallest integer greater than or equal to a number
console.log(Math.clz32(1)); // returns the number of leading zero bits in the 32-bit binary representation of a number
console.log(Math.cos(1)); // returns the cosine of a number
console.log(Math.cosh(1)); // returns the hyperbolic cosine of a number
console.log(Math.exp(1)); // returns Ex, where E is Euler's constant
console.log(Math.expm1(1)); // returns subtracting 1 from e raised to the power of the specified number
console.log(Math.floor(1.1)); // returns the largest integer less than or equal to a number
console.log(Math.fround(1.1)); // returns the nearest single precision float representation of a number
console.log(Math.hypot(3, 4)); // returns the square root of the sum of squares of its arguments
console.log(Math.imul(2, 2)); // returns the result of a 32-bit integer multiplication
console.log(Math.log(1)); // returns the natural logarithm of a number
console.log(Math.log10(1)); // returns the base 10 logarithm of a number
console.log(Math.log1p(1)); // returns the natural logarithm of 1 + a number
console.log(Math.log2(2)); // returns the base 2 logarithm of a number
console.log(Math.max(1, 2)); // returns the largest of zero or more numbers
console.log(Math.min(1, 2));// returns the smallest of zero or more numbers
console.log(Math.pow(2, 2)); // returns the value of a base raised to a power
console.log(Math.random()); // returns a pseudo-random number between 0 and 1
console.log(Math.round(1.1));



// Remainder / Modulus (%)
console.log(5 % 2); // 1
console.log(5 % -2);
console.log(-5 % 2);


// Rounding
var a = Math.round(2.3);
var b = Math.round(2.7);
var c = Math.round(2.5);
var d = Math.round(-2.5);
var e = Math.round(-2.7);
var f = Math.round(-2.3);
var g = Math.round(-2.7);
console.log(a, b, c, d, e, f, g);


var a = Math.ceil(2.3)
var b = Math.ceil(2.7)
var c = Math.ceil(2.5)
var d = Math.ceil(-2.5)
console.log(a, b, c, d);


var a = Math.floor(2.3);
var b = Math.floor(2.7);
var c = Math.floor(2.5);
var d = Math.floor(-2.5);
console.log(a, b, c, d);


2.3 | 0;
-2.3 | 0;
NaN | 0;
Infinity | 0;
-Infinity | 0;
console.log(2.3 | 0);
console.log(-2.3 | 0);
console.log(NaN | 0);
console.log(Infinity | 0);
console.log(-Infinity | 0);

Math.trunc(2.3);
Math.trunc(-2.3);
Math.trunc(2147483648.1);
Math.trunc(-2147483649.1);
Math.trunc(NaN);
Math.trunc(Infinity);
Math.trunc(-Infinity);
Math.trunc(Infinity);
console.log(Math.trunc(2.3));
console.log(Math.trunc(-2.3));
console.log(Math.trunc(2147483648.1));
console.log(Math.trunc(-2147483649.1));
console.log(Math.trunc(NaN));
console.log(Math.trunc(Infinity));
console.log(Math.trunc(-Infinity));
console.log(Math.trunc(Infinity));


// Trigonometry
// All angles below are in radians. An angle r in radians has measure 180 * r / Math.PI in degrees.

// 1. Sine
// Math.sin(r); This will return the sine of r , a value between -1 and 1.
console.log(Math.sin(1));
console.log(Math.sin(1) / Math.PI);
console.log(Math.sin(1) / Math.PI * 180);


// Math.asin(r); This will return the arcsine (the reverse of the sine) of r .
console.log(Math.asin(1));
console.log(Math.asin(1) / Math.PI);
console.log(Math.asin(1) / Math.PI * 180);


// Math.asinh(r); This will return the hyperbolic arcsine of r .
console.log(Math.asinh(1));
console.log(Math.asinh(1.1752011936438014));
console.log(Math.asinh(1.1752011936438014) / Math.PI);
console.log(Math.asinh(1.1752011936438014) / Math.PI * 180);


// 2. Cosine
// Math.cos(r); This will return the cosine of r , a value between -1 and 1
console.log(Math.cos(1));
console.log(Math.cos(1) / Math.PI);
console.log(Math.cos(1) / Math.PI * 180);


// Math.acos(r); This will return the arccosine (the reverse of the cosine) of r .
console.log(Math.acos(1));
console.log(Math.acos(1) / Math.PI);
console.log(Math.acos(1) / Math.PI * 180);


// Math.acosh(r); This will return the hyperbolic arccosine of r .
console.log(Math.acosh(1));
console.log(Math.acosh(1.1752011936438014));
console.log(Math.acosh(1.1752011936438014) / Math.PI);
console.log(Math.acosh(1.1752011936438014) / Math.PI * 180);


//3. Tangent
// Math.tan(r); This will return the tangent of r , a value between -1 and 1.
console.log(Math.tan(1));


// Math.atan(r); This will return the arctangent (the reverse of the tangent) of r . Note that it will return an angle in radians between -π/2 and π/2 .
console.log(Math.atan(1));
console.log(Math.atan(1) / Math.PI);
console.log(Math.atan(1) / Math.PI * 180);

// Math.atan2(y, x); This will return the arctangent of the quotient of its arguments. Note that it will return an angle in radians between -π and π .
console.log(Math.atan2(1, 1));
console.log(Math.atan2(1, 1) / Math.PI);
console.log(Math.atan2(1, 1) / Math.PI * 180);
console.log(Math.atan2(1, 1) / Math.PI * 180 + 180);

// Math.atanh(r); This will return the hyperbolic arctangent of r .
console.log(Math.atanh(1));
console.log(Math.atanh(1.1752011936438014));
console.log(Math.atanh(1.1752011936438014) / Math.PI);
console.log(Math.atanh(1.1752011936438014) / Math.PI * 180);
console.log(Math.atanh(1.1752011936438014) / Math.PI * 180 + 180);
