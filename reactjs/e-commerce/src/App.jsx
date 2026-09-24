import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  const [loggedUser,setLoggedUser] = useState()

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setLoggedUser={setLoggedUser} />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="/dashboard" element={<Dashboard loggedUser={loggedUser} setLoggedUser={setLoggedUser} />}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
