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