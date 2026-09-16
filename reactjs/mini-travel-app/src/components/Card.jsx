import React from 'react'

const Card = ({city}) => {
    console.log(city)
    function handleClick(){
        
    }
  return (
    <div>Card
        <br />
        {city.name}
        <br />
        {city.info.slice(0,50)}... <span
        style={{color:'blue'}}
        onClick={handleClick}
        >Read More</span>
    </div>
  )
}

export default Card