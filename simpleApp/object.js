let person1 = {
    firstName: "Jonn",
    lastName: "Black",
    age: 25,
    eyeColor: "Blue",
    fullName: function () { return this.firstName + " " + this.lastName; }
};

let person2 = {
    fullName: {
        firstName: "Jonn",
        lastName: "Black",
    },
    age: 25,
    eyeColor: "Blue",
    vehicles: ["VW", "BMW"]
};

console.log(person1);
console.log(person1.firstName);
console.log(`Full Name: ${person1.fullName()}`);