import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { getProfile, updateProfile } from '../services/admin'
import { toast } from 'react-toastify'

function Profile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const loadMyProfile = async () => {
    const result = await getProfile()
    if (result['status'] == 'success') {
      const { firstName, lastName, email, phoneNumber } = result['data']
      setFirstName(firstName)
      setLastName(lastName)
      setPhone(phoneNumber)
      setEmail(email)
    } else {
      toast.error(result['error'])
    }
  }

  useEffect(() => {
    loadMyProfile()
  }, [])

  const onSave = async () => {
    if (firstName.length == 0) {
      toast.warn('Please enter first name')
    } else if (lastName.length == 0) {
      toast.warn('please enter last name')
    } else if (phone.length == 0) {
      toast.warn('please enter phone number')
    } else {
      const result = await updateProfile(firstName, lastName, phone)

      // 20 == '20'  => true
      // 20 === '20' => false

      if (result['status'] === 'success') {
        toast.success('Successfully updated your profile')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Profile</h2>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col'>
          <div className='row mb-3'>
            <div className='col'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                value={firstName}
                className='form-control'
              />
            </div>
            <div className='col'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                value={lastName}
                className='form-control'
              />
            </div>
          </div>
          <div className='row mb-5'>
            <div className='col'>
              <label htmlFor=''>Email</label>
              <input
                disabled
                readOnly
                type='text'
                value={email}
                className='form-control'
              />
            </div>
            <div className='col'>
              <label htmlFor=''>Phone Number</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type='text'
                value={phone}
                className='form-control'
              />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              <button onClick={onSave} className='btn btn-success me-2'>
                Save
              </button>
            </div>
            <div className='col'></div>
          </div>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  )
}

export default Profile
