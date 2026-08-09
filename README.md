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