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

