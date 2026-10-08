import React, { useContext } from 'react'
import { ThemeContext } from './theme/ThemeProvider'

const HeroSec = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div style={{ height: "300px" }}>
      <h4 style={{
        color: theme == 'light' ? '#000' : '#fff',
        backgroundColor: theme == 'light' ?
          '#fff' : '#000'
      }}>HeroSec</h4>
      <p className={`paraOne ${theme == 'light' ?
        'paraClassDemoLight' : 'paraClassDemoDark'}`}
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, alias!</p>
    </div>
  )
}

export default HeroSec