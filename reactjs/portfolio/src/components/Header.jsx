import React from 'react'
import uImage from '../assets/user.png'
import './Header.css'

const Header = (props) => {
    console.log(props)
    const user = props.userDetails
  return (
    <header>
        <div className="container1">
            <div className="textContent">
                <h1>{user.name}</h1>
                <p>{user.description}</p>
                <button>More Info</button>
            </div>
            <div className='imgContent'>
                <img src={uImage} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header