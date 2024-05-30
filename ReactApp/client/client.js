// import axios
const axios = require('axios')

// server url
const url = 'http://localhost:4000'

async function register() {
  // request body
  const body = {
    firstName: 'bill',
    lastName: 'gates',
    email: 'bill@ms.com',
    password: 'test',
  }

  try {
    // send the request and get the response
    const response = await axios.post(`${url}/user/register`, body)

    // parse the response
    console.log(response.data)
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

// register()

async function login() {
  const body = {
    email: 'amit@test.com',
    password: 'test',
  }

  try {
    const response = await axios.post(`${url}/user/login`, body)
    console.log(response.data)
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

// login()

async function getProfile() {
  try {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhbWl0IiwibGFzdE5hbWUiOiJrdWxrYXJuaSIsImlkIjoxLCJpYXQiOjE3MTY4NzAzMDF9.56Qk_UeqMSwVk7LRAvxnzjuMnrpv4Jir9ym1DBOVp7c`

    // send the token using request header
    const response = await axios.get(`${url}/user/profile`, {
      headers: { token },
    })
    console.log(response.data)
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

getProfile()
