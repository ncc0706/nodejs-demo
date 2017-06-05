const crypto = require('crypto');
const fs = require('fs');

const hashNames = crypto.getHashes();

/**
 * 进行hash操作
 */
function hash(hashname){
	let time1, time2;
	let hash = crypto.createHash(hashname);
	time1 = new Date();
	fs.readFile('./crypto', (err, data) => {
		if(err) console.log('失败');
	//	console.log(data);
		hash.update(data);
		time2 = new Date();
		console.log('加密时间: ' + (time2-time1) + 'ms','加密值: ' + hash.digest('hex'), ' 加密方式: ' + hashname);
	})
}

function hashTings(){
	hashNames.forEach(function(hashname){
		hash(hashname);
//		console.log(hashname);
	});
}

hashTings();
