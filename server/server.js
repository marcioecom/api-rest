const express = require('express')
const app = express()

app.use('/', require('./route/postsRoute'))

app.listen(3000, () => console.log('Server is running...'))
