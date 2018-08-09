let vehicles = ["VW", "BMW", "Audi", "MB"];

for(let i = 0; i < vehicles.length; i++) {
    console.log(`Name: ${vehicles[i]}`);
}

for(let elem of vehicles) {
    console.log(`Name: ${elem}`);
}