import {HashRouter,Routes,Route} from 'react-router-dom'
import './app.scss' 
import Index from '@/views/home/index' 
import Login from '@/views/home/login'
import UserInfo from '@/views/user/info' 
function App() {
  return (
		<HashRouter basename="/">
			<Routes>
				<Route path="/" element={<Index/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/user/info" element={<UserInfo/>}/>
			</Routes>
		</HashRouter>
  )
}
export default App
