const figlet = require('figlet');//Frist do "npm install figlet "then after that ,Imported figlet

figlet('Node js is love', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});