var fs = require('fs')

const finishReReadFile = () => {
    if (err) return err
        console.log(data.toString())
}

function reReadFile(err) {
    console.log('Finish append file')
    console.log('Begin re reading file', finishReReadFile)
}

const appendFile = (err,data) => {
    if (err) console.log(err)
    console.log(data.toString())
    console.log('Finish read the file')
    console.log('Begin append the file')
    fs.appendFile('input.txt', ' Data to append', reReadFile)
}

console.log('Begin Reading File')
fs.readFile('input.txt', appendFile)

