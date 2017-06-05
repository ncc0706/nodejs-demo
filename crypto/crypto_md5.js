const crypto = require('crypto');
const md5 = crypto.createHash('md5');
md5.update('abc123');
let str = md5.digest('hex');
console.log(str);
