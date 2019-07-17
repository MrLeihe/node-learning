const http = require('http')
const queryString = require('querystring')

const options = {
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: '3000',
    path: '/',
    method: 'GET',
    Connection: 'keep-alive',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

/* client get */
const client = http.request(options, (res) => {
    res.setEncoding('utf-8')

    let data = ''
    res.on('data', chunk => {
        console.log('chunk-------------->:', chunk)
        data += chunk
    })
    res.on('end', () => {
        // console.log(data)
    })
})
client.end()

/* client post */
// const optionsPost = {
//     method: 'POST',
//     protocol: 'http:',
//     hostname: '127.0.0.1',
//     port: '3000',
//     path: '/post',
//     headers: {
//         'Connection': 'keep-alive',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// }

// const clientPost = http.request(optionsPost, (res) => {
//     res.pipe(process.stdout)
// })

// const postBody = {
//     name: 'tony',
//     language: 'English'
// }

// clientPost.write(queryString.stringify(postBody))
// clientPost.end()

// clientPost.on('socket', (res) => {
//     console.log('socket event')
// })

// clientPost.on('response', (res) => {
//     console.log('response event')
// })