import { useContext, useState } from 'react'
import './App.css'
import Greet from './Greet'
import HeroSec from './HeroSec'
import ToggleThemeBtn from './ToggleThemeBtn'
import { ThemeContext } from './theme/ThemeProvider'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState('')
  // const [theme, setTheme] = useState('dark')
  const [name, setName] = useState()
  const [msg, setMsg] = useState('')

  const {theme} = useContext(ThemeContext)
  function login(){
   
    if(isLoggedIn){
      setIsLoggedIn(false)
      setLoggedUser('')
    }else{
      setIsLoggedIn(true)
    setLoggedUser({name:"DON",email:"don@gmail.com"})
    }
  }

  function handleChangeTheme(){
    if(theme == "light"){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  function handleSubmit(e){
      e.preventDefault()
      if(name.trim().length === 0){
        console.log(name)
        setMsg("It should not empty")
      }else if(name.trim().length < 3){
        setMsg("length should be greater than 2 characters")
      }else{
      setMsg("Success")
      }
  }
  return (
    <>
    {/* <div className={`${theme == 'light' ? 'lightTheme' : 'darkTheme'}`}> */}
    <div style={{height:"600px", border:'1px solid black'}}>
      <ToggleThemeBtn />
      <div className={`${theme=='light' ? 'paraClassDemoLight':'paraClassDemoDark'}`}>
      <h1 >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, dolore!</h1>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, tempora? Deserunt voluptatem quaerat cumque officiis molestias tempora, distinctio porro. Ipsum?</p>
      </div>
      <HeroSec />
    </div>
     <nav>
      {loggedUser.name}
      <button onClick={login}>{isLoggedIn ? 'Logout' : 'login in'}</button>
     <button onClick={handleChangeTheme}>{theme == "light" ? "dark" : "light"}</button>
     </nav>
     <section>
      {
        isLoggedIn ?  <Greet loggedUser={loggedUser}/> : "Please Login"
      }
      
     </section>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        {msg}
        <button type='submit'>Submit</button>
      </form>


    {/* </div> */}
    </>
  )
}

export default App
