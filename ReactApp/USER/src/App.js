import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from './screens/Login'
import Register from './screens/Register'
import Properties from './screens/Properties'
import PropertyDetails from './screens/PropertyDetails'
import Profile from './screens/Profile'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='properties' element={<Properties />} />
        <Route path='property-details' element={<PropertyDetails />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
