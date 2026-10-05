import React, { useContext } from 'react'
import { ThemeContext } from './theme/ThemeProvider'

const ToggleThemeBtn = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
      <button onClick={toggleTheme}>change Theme</button>

  )
}

export default ToggleThemeBtn