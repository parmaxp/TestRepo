let arr1 = [1, 2, 3, 4];
let arr2 = [10, 20, 30, 40];
let results = [];

for(let i = 0; i < arr1.length; i++) {
    results[i] = arr1[i] + arr2[i];
}

console.log(results);