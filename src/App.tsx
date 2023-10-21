import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Splash } from './pages/splash'
import { Login } from './pages/login'
import { Home } from './pages/home'
import { Category } from './pages/category'
import { Room } from './pages/room'
import { Help } from './pages/help'
import { Forgot } from './pages/forgot'
import { Market } from './pages/market'
import { NewAccount } from './pages/new-account'

function App() {

  return (
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<Splash />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/room/:slug' element={<Room />} />
				<Route path='/help' element={<Help />} />
				<Route path='/market' element={<Market />} />
				<Route path='/forgot' element={<Forgot />} />
				<Route path='/new' element={<NewAccount />} />
				<Route path='/category/:category' element={<Category />} />
			</Routes>
    </BrowserRouter>
  )
}

export default App
