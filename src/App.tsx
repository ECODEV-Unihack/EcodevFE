import Login from 'components/Login/Login'
import Register from 'components/Register/Register'
import HomeLayout from 'layouts/HomeLayout'
import { Route, Routes } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className='App'>
      {/* <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<StaffList />} />
        </Routes>
      </MainLayout> */}
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
