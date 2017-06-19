const fs = require('fs');


fs.writeFile('message.txt','Hello Node.js\n', function(err, data){
	if(err) throw err;
	console.log('Writing is down!');
});

