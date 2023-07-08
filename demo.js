let local_random = require('./random-integer');

function indexOf(arr, value) {
    for (const i in arr) {
        console.log(i);
        if (arr[i] === value) {
            console.log("find index " + i);
            return i;
        }
    }

    return -1;
}

let arr = [12, 23, 34, 45];
indexOf(arr, 23);




let result = arr.map(Math.sqrt);
console.log(result);

result = [1, 2, 3, 4].map(function (x) {
    return x * 10;
});
console.log(result);




// arrow function
let average = (x, y) => {
    return (x + y) / 2;
};
console.log(average(10, 20));

let state = (x, y) => ({ name: "test", type: "object" });
console.log(state(1, 2));




// var variable's scope exist out of {} block
// for (var i = 0; i < 10; i++) {
//     setTimeout(()=> console.log(i), 500 * i);
// }

// let variable's scope is inside {} block
// for (let i = 0; i < 10; i++) {
//     setTimeout(()=> console.log(i), 500 * i);
// }




// OOP
// function-valued property
let harry = {
    name: "Harry",
    salary: 10000,
    printSalary: function () {
        console.log(this.name + "\'s salary is: " + this.salary);
    },
};
harry.printSalary();

// syntactic sugar
harry = {
    name: "Harry",
    salary: 20000,
    printSalary() {
        console.log(this.name + "\'s salary is: " + this.salary);
    },
};
harry.printSalary();


// prototype
console.log(Object.prototype);


let testArr = [1, 2, '3', '4'];
console.log(testArr);


// module
console.log(local_random);
console.log('random number -> ' + local_random());
console.log('random number -> ' + local_random());
console.log('random number -> ' + local_random());


/**
 * loop
 * 
 * for/of
 * The for/of loop works with iterable objects.
 * 
 * for/in
 * for/in loop works with any object.
 * 
 * When working with arrays, you almost always want to use for/of instead of for/in.
 *  
 */
console.log("+++++++++++ for/of +++++++++++");
let datas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (const data of datas) {
    sum += data;
}
console.log(sum);

console.log("+++++++++++ for/in +++++++++++");
for (const key in datas) {
    console.log(key);
}

let obj = { x: 1, y: 2, z: 3 }
let entry = Object.entries(obj);
console.log(entry);
let str = '';
for (const [k, v] of entry) {
    str += k + v;
}
console.log(str);
