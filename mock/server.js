let express = require('express')

let app = express()
let router = express.Router()


app.get('/', function(req, res){
    res.send('hello world')
})

router.use('/dianping', require('./dianping'))

app.use('/api', router)

let server = app.listen(8888, ()=>{
    let host = server.address().address
    let port = server.address().port
    console.log('server running http//:%s:%s', host, port)
})