import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProjectDetails from './pages/ProjectDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/project/:ID' element={<ProjectDetails />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App