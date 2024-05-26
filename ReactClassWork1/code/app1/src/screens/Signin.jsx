import { useState } from 'react'

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => {
    if (email.length == 0) {
      alert('enter valid email')
    } else if (password.length == 0) {
      alert('enter password')
    } else {
      console.log(`email = ${email}`)
      console.log(`password = ${password}`)
    }
  }

  return (
    <div>
      <h2 className='page-header'>Signin</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <button onClick={onLogin} className='btn btn-success'>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default Signin
