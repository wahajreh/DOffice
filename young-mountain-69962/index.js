const express = require('express')
const cors = require('cors');

const app = express()
app.use(express.json())

app.use(cors())

const UserRouter = require('./routes/User')
app.use('/Users', UserRouter)

app.listen(process.env.PORT || 8088, () => console.log('Server Started'))