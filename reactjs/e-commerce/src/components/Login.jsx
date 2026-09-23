import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [savedUser,setSavedUser] = useState()
    const navigate = useNavigate()

    const handleLogin = (event)=>{
        event.preventDefault()
        
        const payload = {
            email:email,
            password:password
        }
        console.log(payload)
        if(payload.email == savedUser.email){
            if(payload.password == savedUser.password){
                navigate('/dashboard')
            }else{
                toast.error("Password Incorrect")
            }
            }else{
                toast.error("Invali email")
            }
        }


    function fetchData(){
       const savedUser1 = JSON.parse(localStorage.getItem("b87"))
       setSavedUser(savedUser1)
       console.log("saved user", savedUser1)
    }
useEffect(()=>{
    console.log("*************")
    fetchData()
},[])
    return (
        <div className="container w-50 mt-5">
            <div className="container p-4 rounded-5"
                style={{backgroundColor:"#d2d2d2"}}
            >
            <h3>Login here ...</h3>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary me-2">Login</button>
                <Link to="/register">If not Registered</Link>
            </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login


// bootstrap 
// onchange 
// onsubmit 
// event 
// reactToastify 
// navigate 