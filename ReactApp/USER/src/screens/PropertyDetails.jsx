import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import { getPropertyDetails } from '../services/property'
import { toast } from 'react-toastify'
import { config } from '../services/config'
import Toggle from '../components/toggle'

function PropertyDetails() {
  const [details, setDetails] = useState(undefined)

  // get the information sent by the previous screen
  const location = useLocation()

  const loadPropertyDetails = async (id) => {
    const result = await getPropertyDetails(id)
    if (result['status'] == 'success') {
      setDetails(result['data'])
    } else {
      toast.error(result['error'])
    }
  }

  useEffect(() => {
    // read the id sent by Properties screen
    loadPropertyDetails(location.state.id)
  }, [])

  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      {details && (
        <div className='row mt-5'>
          <h2>{details['title']}</h2>
          <img
            className='mt-4'
            style={{
              height: 400,
              width: 600,
              borderRadius: 10,
              objectFit: 'fill',
            }}
            src={`${config.serverUrl}/image/${details['profileImage']}`}
            alt=''
          />

          <h3 className='mt-4'>{details['address']}</h3>
          <div style={{ fontSize: 18, color: 'rgb(34, 34, 34)' }}>
            {details['guests']} guests · {details['bedrooms']} bedroom ·{' '}
            {details['beds']} bed · {details['bathrooms']} bathroom
          </div>

          <hr className='mt-4' />
          <div className='d-flex align-items-center'>
            <i style={{ fontSize: 50 }} class='bi bi-person-circle me-3'></i>{' '}
            <div className='d-flex flex-column'>
              <div style={{ fontWeight: 'bold', fontSize: 20 }}>
                {details['ownerName']}
              </div>
              <div>{details['contactNo']}</div>
            </div>
          </div>
          <hr />

          <Toggle contents={details['details']} />
        </div>
      )}
    </div>
  )
}

export default PropertyDetails
