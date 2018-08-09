let vehicles = ["Saab", "Volvo", "BMW", "Skoda"];

try {
    for(let i = 0; i < 5; i++) {
        if (i > 3)
            throw new Error("Wrong array element index")
        console.log(`Manufacturer - ${vehicles[i]}`);
    }
} catch (error) {
   console.log(`Error was caught`);
   console.log(`Error message was: ${error.message}`) 
}