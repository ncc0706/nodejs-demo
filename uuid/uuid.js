let uuid = require('uuid/v1');
for(let i=0;i<5;i++){
	let s1 = uuid();
	console.log(s1);
}
const uuidV4 = require('uuid/v4');
console.log(uuidV4());
