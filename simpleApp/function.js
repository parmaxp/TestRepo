function sum(a, b) {
    let c = a +b;
    console.log(`Sum of ${a} and ${b} is ${c}`);
}

function retSum(a, b) {
    let c = a +b;
    return c;
}

sum(5, 15);
console.log(`Sum is ${retSum(2, 2)}`);

let sum2 = (a, b) => {
    let c = a +b;
    return c;
}

let sum3 = (a, b) => a + b;

let s = sum3(5, 15);
console.log(`Sum = ${s}`);
