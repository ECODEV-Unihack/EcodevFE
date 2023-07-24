import HomeLayout from 'layouts/HomeLayout'
import { Route, Routes } from 'react-router-dom'

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
      </Routes>
    </div>
  )
}

export default App
