let person = {"first_name": "CoolGuy", "last_name": "TheBestTesterEver", "online": true};
let string = JSON.stringify(person);
let obj = JSON.parse(string);

console.log(person);
console.log( string);
console.log(obj);