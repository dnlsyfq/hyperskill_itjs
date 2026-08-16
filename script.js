// let numbers = [1, 2, 4, 6, 7, 10, 5];
//
// console.log((numbers.length) - 1);

function getDifference(marks) {
    return marks[0] - marks[marks.length-1]
}



console.log(getDifference([34 ,56, 23, 54, 43]))



function checkData(data){
    if(Array.isArray(data)){
        console.log(true)
    } else{
        console.log(false)
    }
}

let fruits = []
console.log(fruits.length);

let newArray = new Array(4);
console.log(newArray);