const router = require('express').Router()

// router.use('/contestverify', require('./contestverify'))

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log(req.headers.host)
    next()
}
router.use(requestTime)

router.get('/', (req, res) => {
    console.log("done")
})



module.exports = router

