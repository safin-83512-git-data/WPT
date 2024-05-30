import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const cart = useSelector((state) => {
    return state.cart
  })

  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary bg-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          MyAirbnb
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                to='/properties'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Properties
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Cart ({cart.items})
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
