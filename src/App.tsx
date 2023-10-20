import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Splash } from './pages/splash'
import { Login } from './pages/login'
import { Home } from './pages/home'

function App() {

  return (
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<Splash />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				{/* <Route path='/room/:id' element={<Login />} />
				<Route path='/new' element={<NewAccount />} /> */}
			</Routes>
    </BrowserRouter>
  )
}

export default App
