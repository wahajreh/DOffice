const express = require('express')
const router = express.Router()

const { getAllUser } = require('../helper/user.helper')

// Getting all
router.get('/', async (req, res) => {
    try {
        getAllUser()
            .catch((ch) => {
                console.log(ch)
            })
            .then((th) => {
                console.log(th)
                res.json(th)
            })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router