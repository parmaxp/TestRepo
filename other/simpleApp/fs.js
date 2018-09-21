let fs = require('fs');

fs.readFile("readFile.txt", "utf8", 
    function(err, data) {
        if (err) throw err;
        console.log(data);
});

fs.writeFile('myFile.txt', 'Hello content!',
    function (err) {
        if (err) throw err;
        console.log('Saved!'); 
});

//update files
fs.appendFile('myFile.txt', 'Hello updated content!', 
    function (err) {
        if (err) throw err;
        console.log('Saved!'); 
});

//delete files
fs.appendFile('myFile.txt', 
    function (err) {
        if (err) throw err;
        console.log('Saved!'); 
});