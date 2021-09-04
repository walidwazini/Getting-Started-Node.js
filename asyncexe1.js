var fs = require('fs')

console.log('Begin reading file')

fs.readFile('input.txt', function (err, data){
    if (err) return console.log(err)
        console.log(data.toString())
        console.log('Finish reading the line')
        console.log('Begin append the file')
        fs.appendFile('input.txt', 'Append asynch', function(err){
            console.log('Finish appending the file')
            console.log('Begin re read the file')
            fs.readFile('input.txt', (err) => {
                if (err) return console.log(err)
                console.log(data.toString())
            })
        })
})
