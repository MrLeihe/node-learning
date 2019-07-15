const fs = require('fs')
const stream = require('stream')

const readStream = fs.createReadStream(__dirname + '/read.txt')
const writeStream = fs.createWriteStream(__dirname + '/write.txt')

writeStream.on('pipe', (src) => {
    console.log('pipe')
})

readStream.pipe(writeStream)
