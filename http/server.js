const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
    console.log(request.headers)
    response.end('ok')
})

server.listen(3000)

console.log('server start on 3000 port')