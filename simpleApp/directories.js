let fs = require('fs');

fs.mkdir('stuff', function(){
    fs.readFile('readFile.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data);
    });
});

