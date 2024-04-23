import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom"
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home'
import Search from './components/Search'
import Auth from './components/auth/Auth'
import UserProfile from './components/UserProfile'
import Profile from './components/Profile'
//import Search from './components/Search'
//import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/search' element={<Search/>}/>
      <Route exact path='/auth' element={<Auth/>}/>
      <Route exact path='/userprof' element={<UserProfile/>}/>
      <Route exact path='/prof' element={<Profile/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
