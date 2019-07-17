const http = require('http')

http.get('http://127.0.0.1:3000/hello?name=stone&age=18', (res) => {
    console.log(res.statusMessage)
    console.log(res.statusCode)
    console.log(res.httpVersion)
    console.log('4、返回正文：')
    res.pipe(process.stdout)
})
