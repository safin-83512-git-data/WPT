import { useState } from 'react'

function AddProperty() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [guestRooms, setGuestRooms] = useState('')
  const [bedRooms, setBedRooms] = useState('')
  const [bathRooms, setBathRooms] = useState('')

  const onSave = () => {
    console.log(`title = ${title}`)
    console.log(`description = ${description}`)
    console.log(`address = ${address}`)
    console.log(`city = ${city}`)
    console.log(`state = ${state}`)
    console.log(`zipCode = ${zipCode}`)
    console.log(`guestRooms = ${guestRooms}`)
    console.log(`bedRooms = ${bedRooms}`)
    console.log(`bathRooms = ${bathRooms}`)
  }

  const onCancel = () => {}

  return (
    <div>
      <h2 className='page-header'>Add Property</h2>
      <div className='mb-3'>
        <label htmlFor=''>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className='form-control'
        ></textarea>
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Address</label>
        <textarea
          onChange={(e) => setAddress(e.target.value)}
          rows={2}
          className='form-control'
        ></textarea>
      </div>
      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''>City</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''>State</label>
          <select
            onChange={(e) => setState(e.target.value)}
            className='form-control'
          >
            <option value='mh'>Maharashtra</option>
            <option value='kr'>Karnataka</option>
            <option value='goa'>Goa</option>
          </select>
        </div>
        <div className='col'>
          <label htmlFor=''>Zip Code</label>
          <input
            onChange={(e) => setZipCode(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''># Guest Rooms</label>
          <input
            onChange={(e) => setGuestRooms(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''># Bed Rooms</label>
          <input
            onChange={(e) => setBedRooms(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''># Bath Rooms</label>
          <input
            onChange={(e) => setBathRooms(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
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
  )
}

export default AddProperty
