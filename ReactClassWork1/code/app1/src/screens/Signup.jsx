import { useState } from 'react'

function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onSave = () => {
    console.log(`first name = ${firstName}`)
    console.log(`last name = ${lastName}`)
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
    console.log(`confirm password = ${confirmPassword}`)
  }
  const onCancel = () => {}

  return (
    <div>
      <h2 className='page-header'>Signup</h2>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <div className='col'></div>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
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
              <label htmlFor=''>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <button onClick={onSave} className='btn btn-success me-2'>
                Save
              </button>
              <button onClick={onCancel} className='btn btn-danger'>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  )
}

export default Signup
