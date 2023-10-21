import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Splash } from './pages/splash'
import { Login } from './pages/login'
import { Home } from './pages/home'
import { Category } from './pages/category'

function App() {

  return (
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<Splash />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				{/* <Route path='/new' element={<NewAccount />} />
				<Route path='/forgot' element={<Forgot />} />
				<Route path='/room/:slug' element={<Room slug="slug" />} /> */}
				<Route path='/category/:slug' element={<Category slug="slug" />} />
			</Routes>
    </BrowserRouter>
  )
}

export default App
