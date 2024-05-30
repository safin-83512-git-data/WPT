const express = require('express')
const db = require('../db')
const router = express.Router()
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')

router.post('/login', (request, response) => {
  const { email, password } = request.body

  // create the query
  const statement = `select id, firstName, lastName from user where email = ? and password = ?`

  // encrypt the password
  const encryptedPassword = String(crypto.SHA256(password))

  // execute the query
  db.pool.query(statement, [email, encryptedPassword], (error, users) => {
    if (error) {
      response.send(utils.createError(error))
    } else {
      // check if user exists
      if (users.length == 0) {
        response.send(utils.createError('user does not exist'))
      } else {
        const { firstName, lastName, id } = users[0]

        // create a token
        const token = jwt.sign({ firstName, lastName, id }, config.secret)

        // send the token to the client
        response.send(
          utils.createSuccess({
            firstName,
            lastName,
            token,
          })
        )
      }
    }
  })
})

router.post('/register', (request, response) => {
  // object destructure
  const { firstName, lastName, email, password } = request.body

  // create the query
  const query = `insert into user (firstName, lastName, email, password) values (?, ?, ?, ?);`

  // encrypt the password
  const encryptedPassword = String(crypto.SHA256(password))

  // execute the query
  db.pool.execute(
    query,
    [firstName, lastName, email, encryptedPassword],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.get('/profile', (request, response) => {
  // construct the statement
  const statement = `select firstName, lastName, email from user where id = ?`

  db.pool.query(statement, [request.user.id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router
