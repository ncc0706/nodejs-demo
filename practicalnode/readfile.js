const fs = require('fs');
const path = require('path');


fs.readFile(path.join('/home/node/nodejs/README.md'), {
encoding: 'UTF-8'}, function(err, data){
	if(err) throw err;
	console.log(data);
});
