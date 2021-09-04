var fs = require('fs')

console.log('Begin Reading File')
var data = fs.readFileSync('input.txt')
console.log(data.toString())
console.log('Program finish reading file')

//  Add something at the end iof the file
console.log('Begin appending file')
fs.appendFileSync('input.txt', '')
console.log('Finish appending file')

console.log('Begin re-reading file')
var newData = fs.readFileSync('input.txt')
console.log(newData.toString())
console.log('Finish re-reading file')