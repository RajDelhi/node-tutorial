//********This a file system test file*********/
const path  = require('path');
let dirPath =  path.join(__dirname,"folder1/folder2");
console.log(dirPath);



const fs = require('fs').writeFileSync;
var status =  fs("fileSystem1.js","//********This a file system test file ssss*********/")
console.warn(status)
return false;