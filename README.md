Turns Object to JSON 
```
let person = {name: 'John', age: 30, city: 'New York'};

function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

JSON.stringify(person, replacer);
console.log(JSON.stringify(person, replacer));
```

Null
```
null means that the variable was explicitly assigned an empty or non-existent value

let name = null; 
console.log(name); // null
```


Undefined
```
The undefined value is returned when a variable is declared but isn't set.

let count; 
console.log(count); // undefined 

let person = {
  age: 27
};

console.log(person.name); // undefined

function getDetails(a) {
  console.log(a);
}

getDetails(); // undefined

console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
```

Function

* Function Declaration - available for function hosting
```
function sayHi(name) {
  alert('Hello' + ' ' + name);
}

sayHi("Joe"); // "Hello Joe"
```

* Function Expression
```aiignore
let sum = function(a, b) {
  return a + b;
}

sum(2, 3);
```

* Arrow Function
```
let sum = (a, b) => {
  return a + b;
}

sum(2, 3);
```

* Function constructor
```
const mult = new Function("a", "b", "return a * b");

let x = mult(4, 3); // x = 12

const mult = function (a, b) {return a * b};

let x = mult(4, 3); // x = 12
```

* Anonymous Function
```
function alertMessage(text) {
  console.log(text());
}

alertMessage(function () {
  return "Hello world!";
});

// Hello world! will be printed in the console


function alertMessage(text) {
  console.log(text());
}

const textFunc = function () {
  return "Hello world!";
};

alertMessage(textFunc);

// Hello world! will be printed in console
```

```
(function () {
  console.log('Hello world!');
})();

// Same thing just in arrow function syntax

(() => {
  console.log('Hello world!');
})();

// 'Hello world!' will be printed to the console
```

```
(function (text) {
  console.log(text);
})("Hello world!");

// 'Hello world!' will be printed to the console
```


```aiignore
Array.isArray(arr) // true or false
```

```
let newArray = new Array(4); // 4 empty item
let platforms = new Array('JetBrains', 'Hyperskill', 'WebStorm', 'PyCharm');
```

### Array methods

* fill() returns a modified version of an array by changing the array's elements to a fixed value. 
```
fill(value, start, end)


const myNumbers = [1, 4, 7, 10, 15];

// fill with 0 from position 1 until position 3
console.log(myNumbers.fill(0, 1, 3)); // [1, 0, 0, 10, 15]

console.log(myNumbers.fill(13)); // [13, 13, 13, 13, 13]

// fill with 5 from position 2
console.log(myNumbers.fill(5, 2)); // [13, 13, 5, 5, 5]

let numberArray = new Array(6).fill(2); // [2, 2, 2, 2, 2, 2]
```

* from - The Array.from() method creates a new Array instance from an array-like or iterable object (such as a Map).
```
Array.from(object, mapFunction, thisValue)

object: is the object to convert to an array. This is a required field.

mapFunction: is the map function to call on each element of the array. This is an optional field.

thisValue: is a value to use as this when executing the mapFunction — also an optional field. (The this keyword will be discussed in a future topic.)

Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']

function createArray(...arguments) {
  return Array.from(arguments);
}

createArray(2, 4, 6); // [2, 4, 6]

Array.from([3, 5, 7], x => x * x); // [9, 25, 49]
```

* of
  Array.of() was brought in with Javascript version ES6. It creates a new array instance that includes the given arguments, regardless of the type or number of inputs.
```
Array.of(15); // [15]

Array.of(101, 202, 303); // [101, 202, 303]

Array.of(undefined); // [undefined]


```

### Objects

* methods keys(), values() and entries()
```
Object.keys(emp_object)

let employee = {
  'name': 'Bruce Reese',
  'email': 'diam.sed@augue.org',
  'company': 'Velit Pellentesque Institute'
};

const employeeKeys = Object.keys(employee);

employeeKeys.forEach((key) => console.log(key));

employeeKeys.forEach((key) => console.log(employee[key]));

employeeKeys.forEach(key => {
  if (key === 'company') {
    employee[key] = "Stiedemann Group";
  }
});




```

* methods values()

```
Object.values(objectName)

employeeValues.forEach((value) => console.log(value));

employeeValues.forEach((value) => console.log(employee[value]));

```

* methods entries()
  returns the key-value pair of each pair in an array
```aiignore

const employeeEntries = Object.entries(employee);

console.log(employeeEntries);
/* 
[
  [ 'name', 'Bruce Reese' ],
  [ 'email', 'diam.sed@augue.org' ],
  [ 'company', 'Velit Pellentesque Institute' ]
]
*/

employeeEntries.forEach((entries) => {
  const key = entries[0];
  const value = entries[1];

  console.log(`Key: ${key}, Value: ${value}`);
});

// Key: name, Value: Bruce Reese
// Key: email, Value: diam.sed@augue.org
// Key: company, Value: Velit Pellentesque Institute

```

```aiignore

function getProductPrices(products) {
    return Object.entries(products).map(([product, price]) => {
        return `${product}: $${price}`;
    }).join('\n');
}
const prices = getProductPrices(products);
console.log(prices);
```

### Boolean

```aiignore
console.log(!false);  // true
console.log(!true);   // false
console.log(!!true);  // true

console.log(true || 0);      // true
console.log(false && "sun"); // false
console.log(1 || 0);         // 1

console.log(!false && !true);   // false
console.log(!(false && !true)); // true
```

### Conversion

```aiignore

+"4" // 4

String(123);   // "123"
String(false); // "false"
String(-12.3); // "-12.3"
String(true);  // "true"

"3" + 4                        // "34"
4 + ""                         // "4"
true + "detective"             // "truedetective"
"You are " + 25 + " years old" // "You are 25 years old"

Number("1");    // 1
Number(" 37 "); // 37
Number("");     // 0
Number("\n3");  // 3
Number("\n");   // 0
Number("\t");   // 0
Number(true);   // 1
Number(false);  // 0

true + 43 // 44
3 - false // 3
10 / "5"  // 2
-true     // -1
+"85"     // 85

Boolean(1);            // true
Boolean(0);            // false
Boolean("Am I nice?"); // true
Boolean("");           // false   


// false: false, undefined, null, 0, NaN, and "". All other values are converted to true
!!3                      // true
0 || "go"                // "go"
"Master" && "Margarita"  // "Margarita"
```