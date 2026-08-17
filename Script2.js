function getArrayWithLength(string) {
    return Array.from(string);
}

console.log(getArrayWithLength("Hello"));

console.log(getArrayWithLength("Hello JS Arrays"));



function createDuplicateArray(element, n) {
    return Array(n).fill(element);
}
console.log(createDuplicateArray("x", 5)); // Output: ["x", "x", "x", "x", "x"]

let arr = [{name: 'Joe', age: 25}, {name: 'Moe', age: 30}, {name: 'Doe', age: 35}];
let newArr = arr.map(obj => ({...obj, olderAge: obj.age + 5}));
console.log(newArr);


const people = {
    'person1': 'Kate Ferguson',
    'person2': 'Frederick Dixon',
    'person3': 'Victor Johnston'
};

console.log(Object.keys(people));

function employeeAndCompany(employees){
    employees.forEach((employee) => {
        console.log(`Employee ${employee.name} works for ${employee.company}`);
    });
}


employeeAndCompany([{"name":"Bruce Reese","email":"diam.sed@augue.org","company":"Velit Pellentesque Institute"},{"name":"Clarke Eaton","email":"tempor@arcused.ca","company":"Duis Ltd"}])