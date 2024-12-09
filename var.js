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



// Bitwise operators
console.log(1 & 2); // bitwise AND
console.log(1 | 2); // bitwise OR
console.log(1 ^ 2); // bitwise XOR(exclusive or)
console.log(~1); // bitwise 
console.log(1 << 2); // bitwise left shift
console.log(1 >> 2); // Bitwise right shift >> (Sign-propagating shift) >>> (Zero-ﬁll right shift)
console.log(1 >>> 2);
console.log(1 & 2);
console.log(a = ~0b0011); // bitwise NOT
console.log(a = 0b0011); // bitwise NOT

// Bitwise assignment operators
var a = 0b0011;
a &= 0b0101;
console.log(a);

var a = 0b0011;
a |= 0b0101;
console.log(a);

var a = 0b0011;
a ^= 0b0101;
console.log(a);

var a = 0b0011;
a >>= 0b0011;
console.log(a);

var a = 0b0011;
a >>>= 0b0011;
console.log(a);

var a = 0b0011;
a <<= 0b0011;
console.log(a);



// Incrementing (++)
var a = 1;
console.log(a++);

var a = 1;
console.log(++a);

var a = 5,
    b = a++,
    c = a
console.log(b, c);

var a = 5,
    b = ++a,
    c = a
console.log(b, c);



// Exponentiation (Math.pow() or **)
console.log(Math.pow(2, 3));
console.log(2 ** 3);

var a = 2,
    b = 3,
    c = Math.pow(a, b);
console.log(c);

var a = 2,
    b = 3,
    c = a ** b;
console.log(c);

var a = 16;
var b = Math.pow(a, 1 / 2);
var c = Math.pow(a, 1 / 3);
var d = Math.pow(a, 1 / 4);
console.log(b, c, d);

var a = 16;
var b = a ** (1 / 2);
var c = a ** (1 / 3);
var d = a ** (1 / 4);
console.log(b, c, d);
console.log(16 ** (1 / 2));
console.log(16 ** (1 / 3));
console.log(16 ** (1 / 4));



// Random Integers and Floats
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 10);
console.log(Math.random() * 10 - 10);
console.log(Math.random() * 10 - 10 + 1);
console.log(Math.random() * 10 - 10 + 1 | 0);

function getRandom() {
    return Math.random();
}
console.log(getRandom());

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(0, 10));
console.log(getRandomArbitrary(10, 20));
console.log(getRandomArbitrary(20, 30));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(0, 10));
console.log(getRandomInt(10, 20));
console.log(getRandomInt(20, 30));
console.log(getRandomInt(30, 40));

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(0, 10));
console.log(getRandomIntInclusive(10, 20));
console.log(getRandomIntInclusive(20, 30));
console.log(getRandomIntInclusive(30, 40));


// Addition (+)
console.log(1 + 2);
console.log(1 + '2');

var a = 9,
    b = 3,
    c = a + b;
console.log(c);

null + null;
null + undefined;
null + 1;
null + {};
null + '';
console.log(null + null);
console.log(null + undefined);
console.log(null + 1);
console.log(null + {});
console.log(null + '');
console.log(undefined + null);


// Little / Big endian for typed arrays when using bitwise operators
var isLittleEndian = true;
(() => {
    var buf = new ArrayBuffer(4);
    var buf8 = new Uint8ClampedArray(buf);
    var data = new Uint32Array(buf);
    data[0] = 0x0F000000;
    if (buf8[0] === 0x0f) {
        isLittleEndian = false;
    }
})();
console.log(isLittleEndian);
console.log(0x0F000000);
console.log(0x0000000F);


var myNum = 0x11223344 | 0;
console.log(myNum);

var buf = new ArrayBuffer(4);
console.log(buf);

var data8 = new Uint8ClampedArray(buf);
console.log(data8);

var data32 = new Uint32Array(buf);
console.log(data32);


data32[0] = myNum;
console.log(data32);



// Get Random Between Two Numbers
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Math.floor(Math.random() * 11);
Math.floor(Math.random() * 11) + 10;
Math.floor(Math.random() * 11) + 10 | 0;
Math.floor(Math.random() * 10) + 1;
Math.floor(Math.random() * 16) + 5;
Math.floor(Math.random() * 9) - 10;
console.log(randomBetween(10, 20));
console.log(randomBetween(20, 30));
console.log(randomBetween(30, 40));
console.log(randomBetween(40, 50));



// Simulating events with dierent probabilities
function simulateEvent(numEvents) {
    var event = Math.floor(numEvents * Math.random());
    return event;
}
console.log("Rolled a " + (simulateEvent(6) + 1));
console.log(simulateEvent(10));


// Subtraction (-)

console.log(1 - 2);
console.log(1 - '2');
console.log('1' - '2');
console.log('1' - 2);
console.log('1' - '2');

var a = 9;
var b = 3;
var c = a - b;
console.log(c);


console.log("foo" - 1);
console.log("foo" - "bar");


// Multiplication (*)
console.log(2 * 3);
console.log(2 * '3');
console.log('2' * '3');

console.log('2' * 3);

console.log('2' * '3');

var a = 9;

var b = 3;
var c = a * b;
console.log(c);

console.log("foo" * 1);

console.log("foo" * "bar");
console.log("foo" * "1");


// Getting maximum and minimum

console.log(Math.max(-1, -15));
console.log(Math.max(4, 12));

console.log(Math.min(-1, -15));
console.log(Math.min(4, 12));

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    max = Math.max.apply(Math, arr1),
    min = Math.min.apply(Math, arr1);
console.log(max);
console.log(min);

var arr22 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    max = Math.max(...arr22),
    min = Math.min(...arr22);
console.log(max);
console.log(min);


// Restrict Number to Min/Max Range
function clamp(min, max, val) {
    return Math.min(Math.max(min, +val), max);
}
console.log(clamp(-10, 10, "4.30"));
console.log(clamp(-10, 10, "-4.30"));
console.log(clamp(-10, 10, 8));
console.log(clamp(-10, 10, -8));
console.log(clamp(-10, 10, 12));
console.log(clamp(-10, 10, -15));


// Ceiling and Floor
Math.ceil();
console.log(Math.ceil(0.60));
console.log(Math.ceil(0.40));
console.log(Math.ceil(5.1));
console.log(Math.ceil(-5.1));
console.log(Math.ceil(-5.9));

Math.floor();
console.log(Math.ceil(0.60));
console.log(Math.ceil(0.40));
console.log(Math.ceil(5.1));
console.log(Math.ceil(-5.1));
console.log(Math.ceil(-5.9));


// Getting roots of a number
Math.sqrt(16)
console.log(Math.sqrt(16));

console.log(Math.cbrt(27));

console.log(Math.cbrt(64));

console.log(Math.pow(64, 1 / 6));



// Random with gaussian distribution
function gaussianRandom(mean, stdev) {
    var y2;
    var use_last = false;
    var y1;
    if (use_last) {
        y1 = y2;
        use_last = false;
    } else {
        var x1, x2, w;
        do {
            x1 = 2.0 * Math.random() - 1.0;
            x2 = 2.0 * Math.random() - 1.0;
            w = x1 * x1 + x2 * x2;
        } while (w >= 1.0);
        w = Math.sqrt((-2.0 * Math.log(w)) / w);
        y1 = x1 * w;
        y2 = x2 * w;
        use_last = true;
    }

    var retval = mean + stdev * y1;
    if (retval > 0)
        return retval;
    return -retval;
}

console.log(gaussianRandom(0, 1));
console.log(gaussianRandom(2, 2));
console.log(gaussianRandom(-5.2, 3));
console.log(gaussianRandom(0, -2));
console.log(gaussianRandom(0, 0));
console.log(gaussianRandom(1, 0.5));



// Math.atan2 to ﬁnd direction
var vec = { x: 4, y: 3 };
var dir = Math.atan2(vec.y, vec.x);
console.log(dir);

var line = {
    p1: { x: 100, y: 128 },
    p2: { x: 320, y: 256 }
}
// get the direction from p1 to p2
var dir = Math.atan2(line.p2.y - line.p1.y, line.p2.x - line.p1.x);
console.log(dir);
console.log(dir / Math.PI * 180);


var point1 = { x: 123, y: 294 };
var point2 = { x: 354, y: 284 };
// get the direction from point1 to point2
var dir = Math.atan2(point2.y - point1.y, point2.x - point1.x);
console.log(dir);

console.log(dir / Math.PI * 180);

// Division (/)
console.log(1 / 2);
console.log(1 / '2');


// Sin & Cos to create a vector given direction & distance
var dir = 1.4536; // direction in radians
var dist = 200; // distance
var vec = {};
vec.x = Math.cos(dir) * dist; // get the x component
vec.y = Math.sin(dir) * dist; // get the y component
console.log(vec);
console.log(vec.x);
console.log(vec.y);


// Math.hypot
console.log(Math.hypot(3, 4));

console.log(Math.hypot(4, 3));

var v1 = { x: 10, y: 5 };
var v2 = { x: 20, y: 10 };
var x = v2.x - v1.x;
var y = v2.y - v1.y;
var distance = Math.sqrt(x * x + y * y);
console.log(distance);
console.log(Math.hypot(x, y));


// Periodic functions using Math.sin
function periodicSin(x, period, amplitude, phase) {
    return amplitude * Math.sin(x / period * 2 * Math.PI + phase);
}
console.log(periodicSin(0, 1, 1, 0));


// Decrementing (--)
// The decrement operator ( -- ) decrements numbers by one.
var a = 1;
console.log(a--);
console.log(a);

var a = 1;

console.log(--a);




// Bitwise Operators
console.log(1 & 2);
console.log(1 | 2);
console.log(1 ^ 2);

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}
console.log(isEven(4));
console.log(isEven(5));
console.log(isOdd(4));

console.log(isOdd(5));

function isOdd(n) {
    if (isEven(n)) {
        return false;
    } else {
        return true;
    }
}
console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(6));

console.log(isOdd(7));

function isOdd(n) {
    return !isEven(n);
}
console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(6));

console.log(isOdd(7));


let n = 5;
if (n & 1) {
    console.log("ODD!");
} else {
    console.log("EVEN!");
}
console.log(1 & 1);

console.log(2 & 1);
console.log(3 & 1);
console.log(4 & 1);

console.log(5 & 1);
console.log(6 & 1);

// Bitwise OR
console.log(1 | 2);
console.log(13 | 7);
console.log(13 | 7 | 8);

// Bitwise NOT
console.log(~ -14);
console.log(~ -13);
console.log(~13);
console.log(~0);

// Bitwise XOR
console.log(1 ^ 2);
console.log(13 ^ 7);
console.log(5 ^ 3);
console.log(1 ^ 1);
console.log(-1 ^ 0);

// real-world examples where bitwise operators in JavaScript are useful:

// 1. Checking if a Number is Odd or Even
// Use the bitwise AND operator (&) to determine if a number is odd or even.
function isOdd(number) {
    return (number & 1) === 1;
}
console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(3));
console.log(isOdd(2));
console.log(isOdd(1));
console.log(isOdd(0));

// 2. Swapping Two Numbers Without a Temporary Variable
// The XOR (^) operator can be used to swap two numbers.
shantel = 8;
daisy = 7;
console.log(`Before: shantel = ${shantel}, daisy = ${daisy}`);

// Swap using XOR
shantel = shantel ^ daisy;
daisy = shantel ^ daisy;
shantel = shantel ^ daisy;

console.log(`After: shantel = ${shantel}, daisy = ${daisy}`);


// 3. Toggling Bits (Flipping ON/OFF States)
// Use the XOR (^) operator to toggle a bit. This is useful for managing settings, like enabling/disabling features.
let settings = 0b1010;
const FEATURE_A = 0b0001;

const FEATURE_B = 0b0010;

const FEATURE_C = 0b0100;

const FEATURE_D = 0b1000;
function toggleFeature(feature) {
    settings ^= feature;
}
toggleFeature(FEATURE_A);
toggleFeature(FEATURE_C);
console.log(settings.toString(2));
console.log((settings & FEATURE_A) !== 0);
console.log((settings & FEATURE_B) !== 0);
console.log((settings & FEATURE_C) !== 0);
console.log((settings & FEATURE_D) !== 0);
toggleFeature(FEATURE_A);
console.log(settings.toString(2));


let state = 0b0101; // Initial state: 5 in decimal
let toggleMask = 0b0010; // Mask to toggle the 2nd bit

state = state ^ toggleMask;
console.log(state.toString(2)); // "0111" (decimal: 7)

state = state ^ toggleMask; // Toggle again
console.log(state.toString(2)); // "0101" (back to decimal: 5)


// 4. Bitmasking: Storing and Checking Permissions
// Store multiple boolean flags (like permissions) in a single number and use bitwise operators to check/set permissions.
const READ = 0b0001;
const WRITE = 0b0010;
const EXECUTE = 0b0100;
let permission = READ | WRITE;
console.log((permission & READ) !== 0);
console.log((permission & WRITE) !== 0);
console.log((permission & EXECUTE) !== 0);

permission = permission | EXECUTE;
console.log((permission & READ) !== 0);
console.log((permission & WRITE) !== 0);
console.log((permission & EXECUTE) !== 0);

permission = permission & ~WRITE;
console.log((permission & READ) !== 0);
console.log((permission & WRITE) !== 0);
console.log((permission & EXECUTE) !== 0);

// 5. Optimizing Multiplications and Divisions
// Use the bitwise left shift (<<) and right shift (>>) operators to multiply or divide by powers of 2 efficiently.
x = 5;
y = x << 1;
console.log(y);

z = y >> 1;
console.log(z);

console.log(z === x);
x = 4;
y = x << 2;
console.log(y);
z = y >> 2;
console.log(z);
console.log(z === x);
x = 8;
y = x << 3;
console.log(y);

number = 8;

// Multiply by 2
console.log(number << 1); // 16 (8 * 2)

// Divide by 2
console.log(number >> 1); // 4 (8 / 2)


// 6. Setting Specific Bits
// Use the OR (|) operator to set a specific bit in a number.
let flags = 0b0000;
const FLAG_A = 0b0001;
const FLAG_B = 0b0010;
const FLAG_C = 0b0100;
const FLAG_D = 0b1000;
flags = flags | FLAG_A | FLAG_C;
console.log(flags.toString(2));
console.log((flags & FLAG_A) !== 0);
console.log((flags & FLAG_B) !== 0);
console.log((flags & FLAG_C) !== 0);
console.log((flags & FLAG_D) !== 0);
flags = flags | FLAG_B;
console.log(flags.toString(2));
console.log((flags & FLAG_A) !== 0);
console.log((flags & FLAG_B) !== 0);


daisy = 0b0000; // No daisy set
const DAISY_A = 0b0001;
const DAISY_B = 0b0010;

// Set DAISY_A and DAISY_B
daisy = daisy | DAISY_A | DAISY_B;
console.log(daisy.toString(2)); // "0011" (decimal: 3)


// 7. Clearing Specific Bits
// Use the AND NOT (& ~) operation to clear specific bits.
let options = 0b1111;
const OPTION_A = 0b0001;
const OPTION_B = 0b0010;
const OPTION_C = 0b0100;
const OPTION_D = 0b1000;
options = options & ~OPTION_A & ~OPTION_C;
console.log(options.toString(2));
console.log((options & OPTION_A) !== 0);
console.log((options & OPTION_B) !== 0);
console.log((options & OPTION_C) !== 0);
console.log((options & OPTION_D) !== 0);

options = options & ~OPTION_B;
console.log(options.toString(2));
console.log((options & OPTION_A) !== 0);
console.log((options & OPTION_B) !== 0);
console.log((options & OPTION_C) !== 0);
console.log((options & OPTION_D) !== 0);


// 8. Bitwise NOT for Quick Negative Arithmetic
// The NOT (~) operator can quickly calculate -(n + 1) for use cases like efficient hashing or bounds checking.
number = 5;
let negated = ~number + 1;
console.log(negated);
console.log(-number);
console.log(~number);

x = 5;
console.log(~x); // -6 (equivalent to -(5 + 1))

x = -5;
console.log(~x);
console.log(~-5);
console.log(~(-5 + 1));

console.log(~(-5 - 1));
console.log(~(-5 + 1));
console.log(~(-5 - 1) + 1);
console.log(~(-5 + 1) + 1);


// 9. Checking Power of 2
// Use the AND (&) operator to check if a number is a power of 2. A number is a power of 2 if it has only one 1 in its binary representation.
function isPowerOfTwo(number) {
    return (number & (number - 1)) === 0;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));


function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(0));


function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(4));
// true
console.log(isPowerOfTwo(5));
// false
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));


// 10. Circular Bit Shifts
// Perform circular shifts using the combination of left and right shifts. This is useful in cryptographic algorithms.
function circularLeftShift(number, shift) {
    return (number << shift) | (number >>> (32 - shift));
}
function circularRightShift(number, shift) {
    return (number >>> shift) | (number << (32 - shift));
}
let nums = 0b1010;
let shifted = circularLeftShift(nums, 1);
console.log(shifted.toString(2));
shifted = circularRightShift(nums, 1);
console.log(shifted.toString(2));


function rotateLeft(num, bits) {
    return (num << bits) | (num >>> (32 - bits));
}

function rotateRight(num, bits) {
    return (num >>> bits) | (num << (32 - bits));
}

values = 0b1101; // Binary: 13
console.log(rotateLeft(values, 2).toString(2)); // "110100" (decimal: 52)
console.log(rotateRight(values, 2).toString(2)); // "1100" (decimal: 12)





/// Constructor functions
// Declaring a Constructor Function

function GirlFriend(name) {
    this.name = name;
    this.sound = "Aaah";
}

// Using the constructor function
shantel = new GirlFriend("Shantel");
console.log(shantel.name);  // Outputs: "Tom"
console.log(shantel.sound); // Outputs: "Meow"


// Prototype Property
/**
 * Every function in JavaScript (including constructor functions) has a special property called prototype. 
 * This is used to:
1. Share methods or properties across all instances created by the constructor.
2. Optimize memory usage by avoiding method duplication.
 */
// Adding Methods Using prototype:
GirlFriend.prototype.speak = function () {
    console.log(this.sound);
}
shantel.speak();

// Prototype Inheritance
function GirlFriend(name) {
    this.name = name;
    this.sound = "Aaah";
}
GirlFriend.prototype.speak = function () {
    console.log(this.sound);
}
function BestFriend(name) {
    GirlFriend.call(this, name);
    this.sound = "Aaah";
}
BestFriend.prototype = Object.create(GirlFriend.prototype);
BestFriend.prototype.constructor = BestFriend;

daisy = new BestFriend("Daisy");
daisy.speak();
// Outputs: "Aaah"


// Inheritance using the prototype chain
function GirlFriend(name) {
    this.name = name;
    this.sound = "Aaah";
}
GirlFriend.prototype.speak = function () {
    console.log(this.sound);
}
function BestFriend(name) {
    GirlFriend.call(this, name);
    this.sound = "Aaah";
}
BestFriend.prototype = Object.create(GirlFriend.prototype);

BestFriend.prototype.constructor = BestFriend;
daisy = new BestFriend("Daisy");
daisy.speak();


// Constructor Property
/**
 * Every object created by a constructor function has a constructor property. 
 * This points to the function that created the instance.
 */
console.log(shantel.constructor === GirlFriend);
// Outputs: true
console.log(shantel.constructor.name);    // shantel is an instance of GirlFriend
console.log(daisy.constructor.name);



// instanceof Operator
/**
 * The instanceof operator checks if an object was created by a specific constructor function.
 */
console.log(shantel instanceof GirlFriend);
// Outputs: true
console.log(shantel instanceof BestFriend);
// Outputs: false
console.log(daisy instanceof GirlFriend);
// Outputs: true
console.log(daisy instanceof BestFriend);
// Outputs: true


// Prototype Chain
console.log(shantel.__proto__ === GirlFriend.prototype);
// Outputs: true
console.log(daisy.__proto__ === BestFriend.prototype);
// Outputs: true
console.log(daisy.__proto__.__proto__ === GirlFriend.prototype);
// Outputs: true
console.log(daisy.__proto__.__proto__.__proto__ === Object.prototype);
// Outputs: true
console.log(daisy.__proto__.__proto__.__proto__.__proto__ === null);
// Outputs: true


// Prototype Property
GirlFriend.prototype.speak = function () {
    console.log(this.sound);
}
shantel.speak();
daisy.speak();
console.log(shantel.__proto__ === GirlFriend.prototype);

console.log(daisy.__proto__ === BestFriend.prototype);
console.log(daisy.__proto__.__proto__ === GirlFriend.prototype);
console.log(daisy.__proto__.__proto__.__proto__ === Object.prototype);

console.log(daisy.__proto__.__proto__.__proto__.__proto__ === null);


// Customizing Constructors
/**
 * You can add logic or parameters to customize how objects are created.
 */
function GirlFriend(name, age) {
    this.name = name;
    this.age = age;
    this.sound = "Aaah";
}
GirlFriend.prototype.speak = function () {
    console.log(this.sound);
}
function BestFriend(name, age, hobby) {
    GirlFriend.call(this, name, age);
    this.hobby = hobby;
}
BestFriend.prototype = Object.create(GirlFriend.prototype);
BestFriend.prototype.constructor = BestFriend;
BestFriend.prototype.play = function () {
    console.log(`${this.name} is playing ${this.hobby}.`);
}
daisy = new BestFriend("Daisy", 5, "acting");
daisy.speak();
daisy.play();
console.log(daisy.__proto__ === BestFriend.prototype);

console.log(daisy.__proto__.__proto__ === GirlFriend.prototype);
console.log(daisy.__proto__.__proto__.__proto__ === Object.prototype);

console.log(daisy.__proto__.__proto__.__proto__.__proto__ === null);


/**
 * Benefits of Constructor Functions
Encapsulation: Bundle related data and behavior in one structure.
Reusability: Methods defined on prototype are shared, reducing memory usage.
Ease of Instantiation: Simplify object creation with pre-configured properties.

 */


// Real-World Example
function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
}

Vehicle.prototype.describe = function () {
    console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
};

// Create instances
let car = new Vehicle("Car", 4);
let bike = new Vehicle("Bike", 2);

car.describe(); // Outputs: "This is a Car with 4 wheels."
bike.describe(); // Outputs: "This is a Bike with 2 wheels."


function GirlFriend(type, bodycount) {
    this.type = type;
    this.bodycount = bodycount;
}

GirlFriend.prototype.describe = function () {
    console.log(`This is ${this.type} with ${this.bodycount} bodycount.`);
};

// Create instances
shantel = new GirlFriend("Shantel", 4);
daisy = new GirlFriend("Daisy", 10);

shantel.describe(); // Outputs: "This is a Car with 4 wheels."
daisy.describe(); // Outputs: "This is a Bike with 2 wheels."



// Transition to ES6 Classes
/**
 * Constructor functions have largely been replaced by class syntax, which is more intuitive and provides the same functionality.
 */
class GirlFriends {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.sound = "Aaah";
    }

    speak() {
        console.log(`${this.name} says "${this.sound}"`);
    }
}

shantel = new GirlFriends("Shantel", 4);
shantel.speak();



// Declarations and Assignments
// Modifying constants
const xx = 5;
console.log(xx);

const girlie = {
    name: "Shantel"
};
console.log('The name of the girlie is', girlie.name);

girlie.surname = "Odhiambo";
console.log('The surname of the girlie is', girlie.surname);

girlie.name = "Daisy";
console.log('The name of the girlie is', girlie.name);
console.log('The surname of the girlie is', girlie.surname);
console.log(girlie);
girlie.name = "Shantel";
console.log('The name of the girlie is', girlie.name);
console.log('The surname of the girlie is', girlie.surname);
console.log(girlie);


// Declaring and initializing constants
const yy = 5;
console.log(yy);

const mygirlie = {
    name: "Shantel"
};
console.log('The name of the mygirlie is', mygirlie.name);

const foot = 100;
const bar = false;
console.log(foot);
console.log(bar);


// Declaration
/**
 * The var keyword creates a function-scope variable.
The let keyword creates a block-scope variable.
The const keyword creates a block-scope variable that cannot be reassigned.
A bare declaration creates a global variable.
 */
var x = 5;
console.log(x);

let yyy = 10;
console.log(yyy);

const zz = 15;
console.log(zz);


// Undeﬁned
// The variable is declared but not assigned a value.
let ab;
console.log(ab);

var bc;
console.log(typeof bc === "undefined");
console.log(typeof variableDoesNotExist === "undefined");

console.log(typeof undeclaredVariable);
console.log(typeof undeclaredVariable === "undefined");



// Data Types
// Number
let numb = 42;
console.log(typeof numb);
let pi = 3.14;
console.log(typeof pi);

// String
let message = "I love Shantel!";
console.log(typeof message);
let girlname = "Daisy";
console.log(typeof girlname);
let empty = "";
console.log(typeof empty);
let space = " ";
console.log(typeof space);
let myname = "Shantel";
console.log(typeof myname);

// Arrays
let mynumbers = [1, 2, 3];
console.log(typeof mynumbers);
let names = ["Shantel", "Daisy", "Atieno"];

console.log(typeof names);
let mixed = [1, "two", true];

console.log(typeof mixed);
let emptyArray = [];
console.log(typeof emptyArray);

// Objects
let person = { name: "Shantel", age: 30 };
console.log(typeof person);
let emptyObject = {};
console.log(typeof emptyObject);
let nullObject = null;
console.log(typeof nullObject);
let undefinedObject = undefined;
console.log(typeof undefinedObject);

// Boolean
let isTrue = true;
console.log(typeof isTrue);
let isFalse = false;
console.log(typeof isFalse);
let isGreaterThan = 5 > 3;
console.log(typeof isGreaterThan);
let isLessThan = 3 < 5;
console.log(typeof isLessThan);
let isNull = null;
console.log(typeof isNull);
let isUndefined = undefined;

console.log(typeof isUndefined);
let isZero = 0;
console.log(typeof isZero);
let isOne = 1;
console.log(typeof isOne);


// Symbol
let sym = Symbol("unique");

console.log(typeof sym);
let sym2 = Symbol("unique");
console.log(typeof sym2);
let sym3 = Symbol("unique");
console.log(typeof sym3);


// BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);
let bigInt2 = BigInt("1234567890123456789012345678901234567890");
console.log(typeof bigInt2);


// Null
let nullValue = null;
console.log(typeof nullValue);
let nullObject2 = null;
console.log(typeof nullObject2);

// Undefined
let undefinedValue;
console.log(typeof undefinedValue);
let undefinedObject2 = undefined;
console.log(typeof undefinedObject2);


// Function
function greet() {
    console.log("Hello!");
}
console.log(typeof greet);

let greet2 = function () {
    console.log("Hello!");
};
console.log(typeof greet2);

// Date
let date = new Date();
console.log(typeof date);

let date01 = new Date("2023-01-01");
console.log(typeof date01);


// Object
let obj11 = {};
console.log(typeof obj11);



/// Mathematic operations and assignment
let az = 5;
let bz = 3;
let cz = az + bz;
console.log(cz);

var a = 9,
    b = 3;
b += a;
console.log(b);

// Decrement by
var d = 5;
d -= 2;
console.log(d);

var a = 9,
    b = 3;
b -= a;
console.log(b);

// Multiply by
var d = 5;
d *= 2;
console.log(d);

var a = 9,
    b = 3;
b *= a;
console.log(b);

var a = 909,
    b = 3;
b *= a;
console.log(b);

// Divide by
var d = 10;
d /= 2;
console.log(d);

var a = 9,
    b = 3;
b /= a;

console.log(b);

var a = 909,
    b = 3;
b /= a;
console.log(b);

// Raised to the power of

var d = 5;
d **= 2;
console.log(d);

var a = 9,
    b = 3;
console.log(b **= a);
console.log(b);
console.log(a);

console.log(b **= a);

console.log(b);
console.log(a);

// Modulus
var d = 5;

d %= 2;

console.log(d);
var a = 9,
    b = 3;

b %= a;
console.log(b);



// Assignment
let x1 = 5;
let y1 = 3;
let z1 = x1 + y1;
console.log(z1);

let x2 = 5;
let y2 = 3;
x2 += y2;
console.log(x2);

let x3 = 5;
let y3 = 3;
x3 -= y3;
console.log(x3);

let x4 = 5;
let y4 = 3;
x4 *= y4;
console.log(x4);

let x5 = 5;
let y5 = 3;
x5 /= y5;
console.log(x5);



/// Loops
// Standard "for" loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Description
/*A for loop is commonly used for iterating over a range of numbers or indices. It requires three parts:

1. Initialization: Starts the loop counter (e.g., var i = 0).
2. Condition: Runs the loop while the condition is true (e.g., i < 100).
3. Increment/Decrement: Updates the loop counter after each iteration (e.g., i++).*/

for (var i = 0; i < 100; i++) {
    console.log(i);
}

// Real-World Example
// Display a list of product IDs on an e-commerce website:
var productIds = [101, 102, 103, 104];
for (var i = 0; i < productIds.length; i++) {
    //console.log(productIds[i]);
    console.log("Product ID: " + productIds[i]);
}


// 2. Multiple Declarations
// Description
/**
 * A for loop can also be used to cache the length of an array or perform multiple declarations in its initialization section. 
 * This can improve performance when dealing with large arrays.
 */
var array = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0, len = array.length; i < len; i++) {
    sum += array[i];
}
console.log(sum);

var vowels = [a, e, i];
for (var i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
}

// Real-World Example
// Iterate through navbar items on a website:
var navBar = ["Home", "About", "Contact"];
for (var i = 0, len = navBar.length; i < len; i++) {
    console.log("Navbar: " + navBar[i]);

}

// Iterate through menu items on a website:
var menuItems = ['Home', 'About', 'Services', 'Contact'];
for (var i = 0; i < menuItems.length; i++) {
    console.log("Menu Item: " + menuItems[i]);
}


// 3. Changing the Increment
// Description
/*You can customize the increment by changing the step size.
Instead of increasing by 1 (i++), you can increment by 2 (i += 2), or any other value.
For example, you can increase by 2 (i += 2) or any other value.*/

for (var i = 0; i < 100; i += 2) {
    console.log(i);
}
for (var i = 0; i < 100; i += 3) {
    console.log(i);
}

for (var i = 0; i < 100; i += 4) {
    console.log(i);
}
for (var i = 0; i < 100; i += 5) {
    console.log(i);
}
for (var i = 0; i < 100; i += 6) {
    console.log(i);
}

//Real-World Example
// Log every second entry in a leaderboard:
var leaderboard = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (var i = 0; i < leaderboard.length; i += 2) {
    console.log("Leaderboard: " + leaderboard[i]);
}
// Log every third entry in a leaderboard:
var leaderboard = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (var i = 0; i < leaderboard.length; i += 3) {
    console.log("Leaderboard: " + leaderboard[i]);
}
// Log my girlfriends  in a leaderboard:
var leaderboard = ["Shantel", "Bob", "Charlie", "David", "Daisy", "Frank"];
for (var i = 0; i < leaderboard.length; i += 4) {
    console.log("Leaderboard: " + leaderboard[i]);
}


// 4. Decremented Loop
// Description
// You can iterate backward by initializing the counter with a high value and decrementing it with each iteration.
for (var i = 100; i > 0; i--) {
    console.log(i);
}
for (var i = 100; i > 0; i -= 2) {
    console.log(i);
}
for (var i = 100; i > 0; i -= 3) {
    console.log(i);
}
for (var i = 100; i > 0; i -= 4) {
    console.log(i);
}
for (var i = 100; i > 0; i -= 5) {
    console.log(i);
}
// Real-World Example
// Countdown timer for a game:

console.log("Starting countdown...");
for (var i = 10; i > 0; i--) {
    console.log(i);
}

console.log("Game over!");
console.log("Starting countdown...");

for (var i = 10; i > 0; i -= 2) {
    console.log(i);
}
console.log("Game over!");

console.log("Countdown:");
for (var seconds = 10; seconds >= 0; seconds--) {
    console.log(seconds);
}
console.log("Go!");


console.log("Countdown:");
for (var seconds = 10; seconds >= 0; seconds -= 2) {
    console.log("Start!")
}

// Summary of Variations
/**
 * 1. Standard "for" loops: Used for iterating over a range of numbers or indices.
 * 2. Multiple Declarations: Allows caching the length of an array or performing multiple declarations.
 * 3. Changing the Increment: Allows customization of the increment step size.
 * 4. Decremented Loop: Allows iterating backward by decrementing the counter.
 * 5. Real-World Example: Demonstrates common use cases in real-world scenarios.
 */
/**
 * 
Variation	                    Purpose	                                     Example
Standard Usage	          Iterating through indices or numbers	                 for (var i = 0; i < 10; i++)

Multiple Declarations	  Cache values or manage multiple variables in the loop	 for (var i = 0, len = arr.length; i < len; i++)

Changing the Increment	  Skip steps or create patterns in iteration	             for (var i = 0; i < 10; i += 2)

Decremented Loop	      Iterate in reverse order	                             for (var i = 10; i >= 0; i--)
 */




/// "for ... of" loop
// Overview of for...of Loop
// The for...of loop provides an elegant and concise syntax for iterating over iterable objects, such as arrays, strings, sets, maps, and other collections.

//Advantages of for...of
/* 
1. Conciseness: Simplifies the syntax for iterating through array elements or other iterables.
2. Safety: Avoids issues associated with for...in (e.g., iterating over prototype properties).
3. Flexibility: Unlike .forEach(), supports break, continue, and return. 
*/

// Usage Examples
//1. Arrays
// The for...of loop iterates over array elements directly, without requiring an index.
const iterable = [10, 20, 30];
for (let value of iterable) {
    console.log(value);
}
// Real-World Example:
// Iterating over an array of colors for a color picker:
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color: " + color);
}
// Iterating over an array of my girlfriends:
const mygirlfriend = ["Shantel", "Daisy", "Atieno"];
for (let mygirlfriends of mygirlfriend) {
    console.log("Mygirlfriend: " + mygirlfriend);

}
// Iterating over an array of numbers:
var numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log("Number: " + number);
}
// Iterating over an array of objects:
var objects = [{ name: "Shantel" }, { name: "Daisy" }, { name: "Atieno" }];
for (let object of objects) {
    console.log("Girlfriend: " + object.name);
}
// Iterating over an array of strings:
var strings = ["Shantel", "Daisy", "Atieno"];
for (let string of strings) {
    console.log("Girlfriend: " + string);
}


// 2. Strings
// Strings are treated as sequences of Unicode characters in for...of loops.
var string = "abcdef";
for (let chr of string) {
    console.log(chr);
}
var strings = "abc";
for (let chr of string) {
    console.log(chr);
}

// Real-World Example:
// Display each character in a username:
const username = "JaTech";
for (let char of username) {
    console.log("Character: " + char)
}


// 3. Sets
// The for...of loop works seamlessly with Set objects, automatically handling duplicate values.
const names1 = ['bob', 'alejandro', 'zandra', 'anna', 'bob'];
const uniqueNames = new Set(names1);
for (let name of uniqueNames) {
    console.log("Name: " + name);
}
// Real-World Example:
// Iterate over unique tags in a blog post:
const tags = new Set(['javascript', 'webdev', 'programming']);
for (let tag of tags) {
    console.log("Tags:", tags)
}


// 4. Maps
// The for...of loop iterates over key-value pairs in Map objects. 
// You can use destructuring to extract keys and values.
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let [key, value] of map) {
    console.log("Key:", key, "Value:", value);
}
const map1 = new Map()
    .set('abc', 1)
    .set('def', 2);

for (const iteration of map1) {
    console.log(iteration); // Logs ['abc', 1] and then ['def', 2]
}
for (const [key, value] of map1) {
    console.log(key, value); // Logs 'abc' and then 'def'
}
for (const key of map1.keys()) {
    console.log(key); // Logs 'abc' and then 'def'
}
const map2 = new Map()
    .set('abc', 1)
    .set('def', 2);

for (const [key, value] of map2) {
    console.log(`${key} is mapped to ${value}`);
}

// Real-World Example:
// Iterate over key-value pairs in a product catalog:
const catalog = new Map([
    ['T-shirt', 19.99],
    ['Jeans', 49.99],
    ['Sneakers', 79.99]
]);
for (let [product, price] of catalog) {
    console.log("Product:", product, "Price:", price);
}
// Iterate over user settings stored in a map:
const userSettings = new Map()
    .set('theme', 'dark')
    .set('fontSize', '16px');

for (const [key, value] of userSettings) {
    console.log(`${key}: ${value}`);
}



// 5. Plain Objects
/*The for...of loop does not work directly on plain objects. However, you can iterate over an object's keys using Object.keys().*/
const obj100 = { a: 1, b: 2, c: 3 };
for (let key of Object.keys(obj100)) {
    console.log("Key:", key, "Value:", obj100[key]);
}
const someObject = { name: 'Shantel', age: 25 };
for (let key of Object.keys(someObject)) {
    console.log(`${key}: ${someObject[key]}`);
}
// Real-World Example:
// Display a user's profile details:
const userProfile = {
    name: "Shantel",
    age: 25,
    city: "Nairobi"
};
for (let key of Object.keys(userProfile)) {
    console.log("Key:", key, "Value:", userProfile[key]);
}
const userProfile1 = { username: 'johnDoe', email: 'john@example.com' };
for (let key of Object.keys(userProfile1)) {
    console.log(`${key}: ${userProfile1[key]}`);
}


// Summary of for...of Support
/**
 *   Iterable	                 Behavior
    Array	                     Iterates through each element directly.

    string	                     Treats the string as a sequence of characters.

    Set	                         Iterates over unique values, ignoring duplicates.

    Map                          Iterates over key-value pairs (with optional destructuring).

    Object	                      Not supported directly; use Object.keys() or Object.entries() instead.
 */



// for...in Loop
/**
 * 
 * The for...in loop iterates over enumerable properties of an object.
 *  It is primarily intended for objects rather than arrays, as it can include properties from the prototype chain.

Cautions:
1. Prototype Properties: Includes properties from the prototype chain unless filtered with hasOwnProperty().
2. Not for Arrays: May behave unexpectedly with arrays, as it iterates over keys (indexes), not values.

 */
var object = {
    a: "foo",
    b: "bar",
    c: "baz",
};

// Define a non-enumerable property
Object.defineProperty(object, 'a', { enumerable: false });

for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`object.${key}, ${object[key]}`);
    }
}

var girlfriends = {
    a: "Atieno",
    d: "Daisy",
    s: "Shantel",
};
Object.defineProperty(girlfriends, 'a', { enumerable: false });

for (let key in girlfriends) {
    if (girlfriends.hasOwnProperty(key)) {
        console.log(`girlfriends.${key}, ${girlfriends[key]}`);
    }
}

// Real-World Example: Filtering Object Properties
// Iterating over an object of user preferences:
const preferences = {
    theme: "dark",
    fontsize: "16px",
    notification: "true",
    privateMode: false,
    language: "English"

};

for (let key in preferences) {
    console.log(`preferences.${key}, ${preferences[key]}`);
}

for (let key in preferences) {
    if (preferences.hasOwnProperty(key)) {
        console.log(`preferences.${key}, ${preferences[key]}`);
    }
}
for (let key in preferences) {
    if (preferences.hasOwnProperty(key)) {
        console.log(`preferences.${key}, ${preferences[key]}`);
    }
}


// while Loops
// Overview of while Loops
// The while loop executes a block of code as long as a specified condition is true.
// It is useful when the number of iterations is not known in advance.
// Syntax:
/*while (condition) {
    // code block to be executed
}*/
// Example:
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Standard While Loop
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// While Loop with a Break
var i = 0;
while (i < 10) {
    if (i === 5) break;
    console.log(i);
    i++;
}
// While Loop with a Continue
var i = 0;
while (i < 10) {
    i++;
    if (i === 5) continue;
    console.log(i);
}
// While Loop with a Nested Loop
var i = 0;
while (i < 5) {
    let j = 0;
    while (j < 5) {
        console.log(`(${i}, ${j})`);
        j++;
    }
    i++;
}
// While Loop with a Do-While Loop
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// While Loop with a Switch Statement
var i = 0;
while (i < 5) {
    switch (i) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        default:
            console.log("Other");
    }
    i++;
}
// Decremented Loop
var i = 5;
while (i > 0) {
    console.log(i);
    i--; // Equivalent to i = i - 1
}
// While Loop with a Function Call
function decrement(x) {
    return x - 1;
}
var i = 5;
while (i > 0) {
    console.log(i);
    i = decrement(i);
}
// While Loop with a Function Call
function decrement(x) {
    return x - 1;
}
var i = 5;
while (i > 0) {
    console.log(i);
    i = decrement(i);
}
// Real-World Example:
// Countdown timer for a game:
var seconds = 10;
while (seconds > 0) {
    console.log(seconds);
    seconds--;
}
console.log("Go!");



// continue in Loops
// The continue statement skips the remaining code in the current iteration and jumps to the next iteration.

// Example 1: continue in for Loop
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
// Example 2: continue in while Loop
var i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}
// Example 3: continue in do-while Loop
var i = 0;
do {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
} while (i < 5);
// Example 4: continue in for...of Loop
var numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    if (number === 3) {
        continue;
    }
    console.log(number);
}
// Example 5: continue in for...in Loop
var object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    if (key === 'b') {
        continue;
    }
    console.log(`${key}: ${object[key]}`);
}
// Example 6: continue in while Loop
var i = 0;

while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}
// Example 7: continue in do-while Loop
var i = 0;
do {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
} while (i < 5);
// Example 8: continue in for...of Loop
var numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    if (number === 3) {
        continue;
    }
    console.log(number);
}
// Example 9: continue in for...in Loop
var object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    if (key === 'b') {
        continue;
    }
    console.log(`${key}: ${object[key]}`);
}
// Example 10: continue in while Loop
var i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}


/// Break Specific Nested Loops
// The break statement can be used to exit nested loops.
// Example 1: Break in Nested for Loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
// Example 2: Break in Nested while Loop
var i = 0;
while (i < 3) {
    var j = 0;
    while (j < 3) {
        if (i === 1 && j === 1) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
        j++;
    }
    i++;
}
// Example 3: Break in Nested do-while Loop
var i = 0;
do {
    var j = 0;
    do {
        if (i === 1 && j === 1) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
        j++;
    } while (j < 3);
    i++;
} while (i < 3);

// Example 4: Break in Nested for...of Loop
var numbers = [[1, 2], [3, 4], [5, 6]];
for (let pair of numbers) {
    for (let number of pair) {
        if (number === 4) {
            break;
        }
        console.log(number);
    }
}
// Example 5: Break in Nested for...in Loop
var object = { a: [1, 2], b: [3, 4], c: [5, 6] };
for (let key in object) {
    for (let value of object[key]) {
        if (value === 4) {
            break;
        }
        console.log(`${key}: ${value}`);
    }
}

// Example 6: Break in Nested while Loop
var i = 0;
while (i < 3) {
    var j = 0;
    while (j < 3) {
        if (i === 1 && j === 1) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
        j++;
    }
    i++;
}
// Example 7: Break in Nested do-while Loop
var i = 0;
do {
    var j = 0;
    do {
        if (i === 1 && j === 1) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
        j++;
    } while (j < 3);
    i++;
} while (i < 3);
// Example 8: Break in Nested for...of Loop
var numbers = [[1, 2], [3, 4], [5, 6]];
for (let pair of numbers) {
    for (let number of pair) {
        if (number === 4) {
            break;
        }
        console.log(number);
    }
}
// Example 9: Break in Nested for...in Loop
var object = { a: [1, 2], b: [3, 4], c: [5, 6] };
for (let key in object) {
    for (let value of object[key]) {
        if (value === 4) {
            break;
        }
        console.log(`${key}: ${value}`);
    }
}
// Example 10: Break in Nested while Loop
var i = 0;
while (i < 3) {
    var j = 0;
    while (j < 3) {
        if (i === 1 && j === 1) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
        j++;
    }
    i++;
}

// Summary

/**
 * 
Loop Type	                                 Use Case	                   Key Notes
for...in	                        Iterating object keys	               Avoid using on arrays. Check with hasOwnProperty() to avoid prototype.

while	                            Execute until condition is false	   Can run zero or more times. 

do...while	                        Execute block at least once	           Runs block before condition check.

continue	                        Skip current iteration	               Useful in both for and while loops.

break with Labels	                Exit specific nested loops	           Labels improve control over nested flow.
 */




// FUNCTIONS
// fUNCTIONS in JavaScript provide organized and reusable code blocks for performing specific tasks. 
// They are essential for breaking down complex problems into smaller, manageable pieces, and for improving code readability and maintainability.

// Function Declaration
// A function declaration defines a named function that can be called later in the code.
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Daisy");
greet("brandon");
greet("Shantel");

// Function Expression
// A function expression defines an anonymous function and assigns it to a variable.
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));
console.log(add(5, 7));
console.log(add(8, 9));


// Function Scoping
// Variables declared inside a function are only accessible within that function.
function greet() {
    var message = "Hello, Daisy!";
    console.log(message);
}
greet();

function foo2() {
    var message = "Hello, Shantel!";
    console.log(message);
}
foo2()

function greet() {
    var message = "hello, Brandon";
    console.log(message);
}
greet()

function exampleScope() {
    var innerVar = "I am scoped to this function.";
    console.log(innerVar); // Accessible here
}

// console.log(innerVar); // Error: innerVar is not defined

function firstFunction() {
    var message = "Hello from the first function!";
    console.log(message);
}

function secondFunction() {
    var message = "Hello from the second function!";
    console.log(message);
}

firstFunction();  // Output: Hello from the first function!
secondFunction(); // Output: Hello from the second function!

// Nested Functions
// A function inside another function has access to variables from the outer function (closure).
function outerFunction() {
    var outerMessage = "I am in the outer function.";

    function innerFunction() {
        console.log(outerMessage); // Accessible here
    }

    innerFunction();
}

outerFunction(); // Output: I am in the outer function.

// Real-World Example: 
// 1. Password Validation
function validatePassword(password) {
    var minLength = 8; // Scoped to this function
    if (password.length >= minLength) {
        console.log("Password is valid.");
    } else {
        console.log("Password must be at least " + minLength + " characters long.");
    }
}

// minLength is not accessible here
validatePassword("mypassword123"); // Output: Password is valid.
validatePassword("short");         // Output: Password must be at least 8 characters long.
validatePassword("password123");
validatePassword("pass");
validatePassword("password123456789");

// Real-World Application Scenarios
// 1. Private Variables in Functions
// For example, in a shopping cart system, you might want to keep the total cost private.
function shoppingCart() {
    var total = 0; // Scoped to this function

    function addItem(price) {
        total += price;
        console.log("Item added. Total is now $" + total);
    }

    function checkout() {
        console.log("Final total: $" + total);
        total = 0; // Reset total after checkout
    }

    return { addItem, checkout };
}

const cart = shoppingCart();
cart.addItem(10); // Item added. Total is now $10
cart.addItem(20); // Item added. Total is now $30
cart.checkout();  // Final total: $30

// 2. Encapsulation in Libraries
// Libraries often use function scoping to prevent exposing variables to the global scope.

/*(function() {
    var privateVar = "I am private.";

    function privateFunction() {
        console.log(privateVar);
    }

    // Expose only what is necessary
    window.myLibrary = {
        publicFunction: function() {
            privateFunction();
        }
    };
})();

myLibrary.publicFunction(); // Output: I am private.
// console.log(privateVar); // Error: privateVar is not defined*/


// Currying
// Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument.
/**
 * Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. 
 * Instead of accepting all arguments at once, the function takes the first argument and returns another function that takes the next argument, and so on, until all arguments have been provided.
 */

/**
 * Why Currying?
1. Code Reusability: Currying allows functions to be reused by partially applying them with some arguments.
2. Improved Readability: It helps break down complex functions into smaller, simpler functions.
3. Functional Programming: Currying aligns with the principles of functional programming, encouraging immutability and pure functions.
4. Custom Function Creation: Allows developers to create specific versions of functions by fixing certain arguments.
 */

// Syntax of Currying
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

// Usage
const multiplyBy2 = multiply(2); // Returns a function
console.log(multiplyBy2(5)); // Output: 10
console.log(multiply(3)(4)); // Output: 12

// Manual Currying Implementation
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// Usage
//console.log(add(1)(2)(3)); // Output: 6

// Using Arrow Functions for Currying
const add1 = a => b => c => a + b + c;

// Usage
console.log(add1(1)(2)(3)); // Output: 6

// Currying with Modern JavaScript Libraries
// Many modern JavaScript libraries like Lodash provide built-in utilities for currying. 
// For example, Lodash's _.curry:
const _1 = require('lodash');

const add9 = (a, b, c) => a + b + c;

const curriedAdd = _1.curry(add9);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6


// Real-World Examples
// 1. Math Operations
// Currying is useful when creating reusable math functions:
function add(a, b, c) {
    return a + b + c;
}
const curriedAdd1 = a => b => c => a + b + c;
console.log(curriedAdd1(1)(2)(3));
console.log(curriedAdd1(1, 2)(3));

const divide = a => b => a / b;

const divideBy2 = divide(2);
console.log(divideBy2(10)); // Output: 0.2
console.log(divide(10)(2)); // Output: 5

// 2. Event Handlers in Web Development
// Currying can simplify event handling in React or vanilla JavaScript:
function handleEvent(element) {
    return function (eventType) {
        return function (callback) {
            element.addEventListener(eventType, callback);
        };
    };
}

// Usage
//const button = document.querySelector("button");
//handleEvent(button)("click")(() => console.log("Button clicked!"));

// 3. API Request Configuration
// Currying helps in creating pre-configured API request functions:
const fetchApi = baseUrl => endpoint => params =>
    fetch(`${baseUrl}/${endpoint}?${new URLSearchParams(params)}`)
        .then(response => response.json());

// Usage
//const fetchGitHub = fetchApi("https://api.github.com");
//const fetchUsers = fetchGitHub("users");
//fetchUsers({ since: 100 }).then(data => console.log(data));


// 4. Logging Utilities
//Currying simplifies logging utilities where different log levels are pre-configured:
const log = level => message => console.log(`[${level}] ${message}`);
const errorLog = log("ERROR");
const infoLog = log("INFO");
const debugLog = log("DEBUG");
errorLog("This is an error message");
infoLog("This is an info message");
debugLog("This is a debug message");

// 5. DOM Manipulation
// Currying can be used to create reusable DOM manipulation functions:
const setStyle = element => property => value => {
    element.style[property] = value;
};
/*const setWidth = setStyle(document.body);
setWidth("width")("100%");
setWidth("height")("100vh");
setWidth("background-color")("black");
setWidth("color")("white");*/


// Benefits of Currying
/**
 * Benefits of Currying
Reusability: Create specialized functions from generalized ones.
Functional Composition: Easier to compose functions and build pipelines.
Partial Application: Fix some arguments while leaving others dynamic.
Improved Readability: Break down complex functions into smaller, simpler ones.
Improved Debugging: Easier to trace errors in nested function calls.


// Limitations of Currying
Performance: Currying may lead to performance overhead for deeply nested calls.
Readability: Excessive currying can make code less readable for developers unfamiliar with the concept.
Error Handling: Debugging nested functions can sometimes be more complex.


 */

// Currying vs Partial Application
// Currying and partial application are related but not identical:
/**
 *     Aspect	            Currying	                                              Partial Application
 *
     Definition	           Converts a function into a sequence of unary functions.	  Creates a new function by fixing some arguments of the original function.

     Arguments	           Takes one argument at a time.	                          Takes multiple arguments at once.

     Return Value	       Returns a new function for each argument.	              Returns a new function that is already applied some arguments.

     Example	           f(a)(b)(c)	                                               f(a, b)(c)
 */

// Practical Currying Exercise
// Create a function that filters an array based on a condition using currying:
function filterArray(arr, condition) {
    return arr.filter(condition);
}
const isEven2 = num => num % 2 === 0;

const isOdd2 = num => num % 2 !== 0;

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterArray(numbers2, isEven2));
console.log(filterArray(numbers2, isOdd2));


const filterBy = condition => array => array.filter(condition);

// Usage
const isEven3 = num => num % 2 === 0;
const filterEvens = filterBy(isEven3);

console.log(filterEvens([1, 2, 3, 4, 5])); // Output: [2, 4]


/**
 * Conclusion
Currying is a powerful technique in functional programming that promotes reusability, composability, and clarity in code. 
While it may take some practice to fully understand and leverage currying, it can significantly improve your ability to write modular, maintainable, and elegant JavaScript code.
 */



// Immediately Invoked Function Expressions (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined. 
// It allows developers to create private scopes and avoid polluting the global scope.

// Syntax of IIFE
// The IIFE syntax involves wrapping a function in parentheses and immediately invoking it:
(function () {
    // Code inside the IIFE
})();
// The parentheses at the end cause the function to be executed immediately.

// Example
(function () {
    var message = "Hello, IIFE!";
    console.log(message);
})();

(function () {
    console.log("This is an IIFE!");
})();
/**
 * Key Parts:

Function Expression: The function is wrapped in () to indicate it's an expression, not a declaration.
Invocation: The () at the end invokes the function immediately.

 */


//  Why Use IIFE?
/**
 *
1. Avoid Polluting the Global Scope: Variables inside the IIFE are not accessible outside of it, reducing the risk of name collisions.
2. Private Variables: Create private variables that cannot be accessed by other scripts.
3. Encapsulation: Group related code together in its own scope.
4. Initialization Code: Often used to run setup or initialization code when a script is loaded.
 */

(function () {
    console.log("Hello from an IIFE!");
})();

//  IIFE with Parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("Shantel");

//  IIFE with Return Value
const result2 = (function (a, b) {
    return a + b;
})(3, 4);
console.log(result2);

// IIFE with Different Syntax Styles
// 1. Arrow Function IIFE
(() => {
    console.log("Arrow function IIFE");
})();
// 2. Function Declaration IIFE
(function () {
    console.log("Function declaration IIFE");
})();
// 3. Function Expression IIFE
(function () {
    console.log("Function expression IIFE");
})();
// 4. Async IIFE
(async function () {
    console.log("Async IIFE");
})();

// 5. IIFE with Parameters and Return Value
const result3 = (function (a, b) {
    return a + b;
})(3, 4);
//6. Named Function IIFE
// You can give the function a name, though the name is only accessible within the IIFE:
(function namedIIFE() {
    console.log("Named IIFE");
})();
// 7. IIFE with Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE with IIFE");
})();
// 8. IIFE with Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE with IIFE");
})();


// Real-World Applications of IIFE
// 1. Prevent Global Variable Pollution
// IIFE can be used to create a private scope for variables, preventing them from polluting the global scope.
(function () {
    var privateVar = "I am private.";
    console.log(privateVar);
})();

// 2. Module Pattern
// IIFE is often used to implement the Module Pattern, which helps organize code into reusable modules:
var myModule = (function () {
    var privateVar = "I am private.";

    function privateFunction() {
        console.log(privateVar);
    }

    return {
        publicFunction: function () {
            privateFunction();
        }
    };
})();
myModule.publicFunction();


// 3. Polyfill or Shim
// IIFE can be used to provide polyfills for older browsers:
(function () {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback) {
            for (var i = 0; i < this.length; i++) {
                callback(this[i], i, this);
            }
        };
    }
})();
[1, 2, 3].forEach(function (item) {
    console.log(item);
});


// 4. Initializing Code
// Run setup code immediately when a script is loaded:
(function () {
    const appConfig = {
        apiUrl: "https://api.example.com",
        theme: "dark"
    };

    console.log("App initialized with config:", appConfig);
})();

// 5. Asynchronous Code
// IIFE can be used to encapsulate asynchronous code:
(function () {
    setTimeout(function () {
        console.log("Async code executed.");
    }, 1000);
})();
// 6. Event Listeners
// IIFE can be used to attach event listeners to elements:


// Combining IIFE with Other Concepts
// 1. IIFE and Closures
// IIFE can capture a state or create closures:
const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
})();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1


// 2. IIFE in Event Handling
// IIFE can be used to handle events in a private scope:
/*(function () {
    const button = document.getElementById("myButton");
    button.addEventListener("click", function () {
        console.log("Button clicked!");
    });
})();*/

// 3. IIFE in Asynchronous Code
// IIFE can be used to encapsulate asynchronous code:
(function () {
    setTimeout(function () {
        console.log("Async code executed.");
    }, 1000);
})();

/**
 * 
Immediately Invoked Function Expressions (IIFE)
Definition:
An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined. It allows developers to create private scopes and avoid polluting the global scope.

Syntax of IIFE
The IIFE syntax involves wrapping a function in parentheses and immediately invoking it:

javascript
Copy code
(function () {
    console.log("This is an IIFE!");
})();
Key Parts:

Function Expression: The function is wrapped in () to indicate it's an expression, not a declaration.
Invocation: The () at the end invokes the function immediately.
Why Use IIFE?
Avoid Polluting the Global Scope: Variables inside the IIFE are not accessible outside of it, reducing the risk of name collisions.
Private Variables: Create private variables that cannot be accessed by other scripts.
Encapsulation: Group related code together in its own scope.
Initialization Code: Often used to run setup or initialization code when a script is loaded.
Examples of IIFE
1. Basic Example
javascript
Copy code
(function () {
    console.log("Hello from an IIFE!");
})();
Output:

csharp
Copy code
Hello from an IIFE!
2. IIFE with Parameters
IIFE can accept arguments:

javascript
Copy code
(function (name) {
    console.log(`Hello, ${name}!`);
})("Shantel");
Output:

Copy code
Hello, Shantel!
IIFE with Different Syntax Styles
Arrow Function IIFE
javascript
Copy code
(() => {
    console.log("IIFE with an arrow function!");
})();
Named Function IIFE
You can give the function a name, though the name is only accessible within the IIFE:

javascript
Copy code
(function myIIFE() {
    console.log("Named IIFE");
})();
Real-World Applications of IIFE
1. Prevent Global Variable Pollution
javascript
Copy code
(function () {
    var privateVar = "I am private";
    console.log(privateVar);
})();

// console.log(privateVar); // Error: privateVar is not defined
2. Module Pattern
IIFE is often used to implement the Module Pattern, which helps organize code into reusable modules:

javascript
Copy code
const myModule = (function () {
    let privateCounter = 0;

    function increment() {
        privateCounter++;
        console.log(privateCounter);
    }

    function reset() {
        privateCounter = 0;
        console.log("Counter reset.");
    }

    return {
        increment,
        reset
    };
})();

myModule.increment(); // Output: 1
myModule.increment(); // Output: 2
myModule.reset();     // Output: Counter reset.
3. Polyfill or Shim
IIFE can be used to provide polyfills for older browsers:

javascript
Copy code
(function () {
    if (!Array.prototype.customMethod) {
        Array.prototype.customMethod = function () {
            console.log("Custom method added to Array prototype.");
        };
    }
})();
4. Initializing Code
Run setup code immediately when a script is loaded:

javascript
Copy code
(function () {
    const appConfig = {
        apiUrl: "https://api.example.com",
        theme: "dark"
    };

    console.log("App initialized with config:", appConfig);
})();
Combining IIFE with Other Concepts
1. IIFE and Closures
IIFE can capture a state or create closures:

javascript
Copy code
const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
})();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
2. IIFE in Event Handling
javascript
Copy code
(function () {
    document.getElementById("myButton").addEventListener("click", function () {
        console.log("Button clicked!");
    });
})();
Advantages of IIFE

Encapsulation: Keeps code isolated from the global scope.
Immediate Execution: Useful for initialization tasks.
Avoid Conflicts: Reduces the risk of variable or function name conflicts.

Disadvantages of IIFE
Readability: Can be confusing for beginners due to the syntax.
Debugging: Debugging IIFE code can be slightly harder as variables are not accessible in the global scope.

 */