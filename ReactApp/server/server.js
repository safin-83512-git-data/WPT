const express = require('express')
const utils = require('./utils')
const jwt = require('jsonwebtoken')
const config = require('./config')

// used for adding logging
const morgan = require('morgan')

const app = express()

// used to parse the request json body object
app.use(express.json({ limit: '10mb' }))

// used to parse the request url encoded body object
app.use(express.urlencoded({ limit: '10mb' }))

// use morgan middleware
app.use(morgan('combined'))

// middleware
// - function gets called before calling any of the end points
app.use((request, response, next) => {
  console.log('inside a middleware1')
  next()
})

app.use((request, response, next) => {
  console.log('inside a middleware2')
  next()
})

app.use((request, response, next) => {
  console.log('inside a middleware3')
  next()
})

// add a middleware to check the token
app.use((request, response, next) => {
  // check if the API requires token
  if (request.url == '/user/login' || request.url == '/user/register') {
    // skip checking the token
    next()
  } else {
    // get the token from headers
    const token = request.headers['token']

    // check if token is present
    if (!token || token.length == 0) {
      response.send(utils.createError('missing token'))
    } else {
      try {
        // check the token's validity
        const payload = jwt.verify(token, config.secret)

        // add the payload to the request
        request.user = payload

        // go the next function
        next()
      } catch (ex) {
        response.send(utils.createError('invalid token'))
      }
    }
  }
})

app.get('/', (request, response) => {
  response.send('welcome')
})

// add the routers
const userRouter = require('./routes/user')

app.use('/user', userRouter)

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
