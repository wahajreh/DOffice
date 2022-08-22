// require('dotenv').config();
const express = require('express')
const server = express()
const cors = require('cors');
const cookieParser = require('cookie-parser');

//db connection
// require('./db/db.config')
// require('./helper/orm.helper')()

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

server.use(cookieParser())
server.use(express.json())
server.use(express.urlencoded({
    extended: false
}))
server.use(cors(corsOptions))

// server.listen(PORT, () => console.log('server running at ', PORT))
// routes
server.use('/api', (req, res, next) => {

    if (!req.headers['x-auth']) {
        console.log(req.headers)
        console.log("index")
        return next(require('./routes'))
        next()
    }
    else {
        res.send()
    }


})

module.exports = server