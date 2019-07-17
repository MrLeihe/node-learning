const http = require('http')
const url = require('url')
const queryString = require('querystring')

// 获取 get 请求参数
// http.createServer((req, res) => {
//     console.log(`请求地址：${req.url}`)
//     console.log(`请求方法：${req.method}`)
//     const urlObj = url.parse(req.url)
//     const queryObj = queryString.parse(urlObj.query)
//     console.log(queryObj)
//     res.end('ok')
// }).listen(3000)

// 获取 post 请求参数
const server = http.createServer((req, res) => {
    let body = ''
    req.on('data', (chunk) => {
        body += chunk
    })

    req.on('end', () => {
        console.log('body', body)
        console.log(req.headers["content-type"])
        res.end('success')
    })

    req.socket.on('close', () => {
        console.log('客户端请求close')
    })
})

server.listen(3000)



