import React from 'react'
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = ({loggedUser, setLoggedUser}) => {
  const navigate= useNavigate()

  function handleLogout(){
    setLoggedUser('')
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-Commerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Cart</a>
        <a className="nav-link" href="#">Pricing</a>
      </div>
    </div>
    <div className="d-flex" role="search">
        <FaUser /><span className='px-3'>{loggedUser && loggedUser.name}</span>
        <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
      </div>
  </div>
</nav>
  )
}

export default Navbar