import React from 'react'

const Greet = ({loggedUser}) => {
  return (
    <div>Greeting to {loggedUser?.name}</div>
  )
}

export default Greet