import React,{ useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import './App.css'
import Greet from './Greet'
import HeroSec from './HeroSec'
import ToggleThemeBtn from './ToggleThemeBtn'
import { ThemeContext } from './theme/ThemeProvider'

const ChildComponent = React.memo(({getItems})=>{
  console.log("I am Mountining and Reredering")
  return <h1>I am Child Component , and Reredering while getItems changed</h1>
})

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState('')
  // const [theme, setTheme] = useState('dark')
  const [name, setName] = useState()
  const [msg, setMsg] = useState('')

  const {theme} = useContext(ThemeContext)

  const [count, setCount] = useState(50)
let prevCount = useRef()


function expensiveCalculations(num){
  for(let i=0; i<=10000000;i++){}
  return num * num
}

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
  useEffect(()=>{
    prevCount.current = count
  },[count])

  const countSqaure = useMemo(()=>{
    return expensiveCalculations(count)
  },[count])

  const getItems = useCallback(()=>{
    return "Helooo00099999999"
  },[])

  return (
    <>
  <ChildComponent getItems={getItems} />
    <div style={{height:"300px", backgroundColor:"gray"}}>
      <h3>Count: {count}</h3>
      <h3>Previous Value :{prevCount.current}</h3>
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <h4>countSqaure : {countSqaure}</h4>
    </div>


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
