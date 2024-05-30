import { useDispatch } from 'react-redux'
import { config } from '../services/config'
import { cutString } from '../utils'
import { addToCart } from '../features/cartSlice'

function Property({ property, onClick }) {
  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addToCart())
  }

  return (
    <div className='col-3'>
      <div className='card'>
        <img
          onClick={onClick}
          style={{ height: 200, cursor: 'pointer' }}
          src={`${config.serverUrl}/image/${property['profileImage']}`}
          className='card-img-top'
          alt=''
        />
        <div className='card-body'>
          <h5 style={{ fontWeight: 'bold' }} className='card-title'>
            {cutString(property['title'])}
          </h5>
          <div className='card-text'>
            <span style={{ fontWeight: 'bold', fontSize: 18 }}>
              ₹{property['rent']}
            </span>{' '}
            night
          </div>
          <div>
            <button onClick={onAddToCart} className='btn btn-success'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
