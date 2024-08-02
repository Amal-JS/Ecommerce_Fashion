import { useState } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const Login = ()=>{

    const [username,setUsername]  = useState('')
    const [password,setPassword]  = useState('')
    const navigate = useNavigate()
    const [toggleError,setToggleError]  = useState(false)
    const [toggleEmptyValueWarning,setToggleEmptyValueWarningr]  = useState(false)

    const handleValues = (evt)=>{

        setToggleError(false)
        setToggleEmptyValueWarningr(false)
        const {id,value}  = evt.target
        id == 'username' ? setUsername(value) : setPassword(value)
    }
console.log(username,password)
    const handleSubmit = async (evt)=>{
        evt.preventDefault()
        if(username.length == 0 || password.length == 0){
            console.log(username.length,password.length)
            setToggleEmptyValueWarningr(true)
            return
        }
        const response = await axios.post('http://localhost:8000/',{username:username,password:password})
        if(response.data.userExists){
            localStorage.setItem('userId',response.data.userId)
            navigate('/')
            console.log('goes')
        }else{
            setToggleError(true)
        }
    }
    return (
        <div>
            <Header/>
            <div className="flex justify-center items-center">
                

<form className="min-w-[500px] mx-auto bg-white my-16 rounded-2xl border-2 border-black-400 p-5">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
    <input type="username" id="username"   onChange={(evt)=>{handleValues(evt)}} className="bg-white text-black border-2 border-black p-2 rounded-2xl" placeholder="name@flowbite.com"  />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Your password</label>
    <input type="password"   onChange={(evt)=>{handleValues(evt)}} id="password" className="bg-white text-black border-2 p-2 border-black rounded-2xl"  />
  </div>
  {
    toggleError && <p className="text-red-600 text-xl my-2">Invalid Credentials.</p>
  }
  
  {
    toggleEmptyValueWarning && <p className="text-red-600 text-xl my-2">Fill both values.</p>
  }
  
  <button onClick={(evt)=>{handleSubmit(evt)}} className="bg-black text-white p-3 w-24 rounded-2xl">Login</button>
</form>


            </div>

            <p > username : user , password : user</p>
        </div>
    )
}