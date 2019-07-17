const dns = require('dns')
const option = {all: true}
dns.resolve4('www.meituan.com', (err, address, faimly) => {
    if(err) throw err
    console.log(address)
})