import React,{useContext} from 'react'
import wave1 from "../images/wave.svg"
// import { useState } from 'react'
import wave2 from "../images/wave2.svg"
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'

const Login = () => {

  const {loginUser} = useContext(AuthContext)

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const loginRequest = () => {
  //   console.log("clicking")
  //   if ((email !== "") && (password !== "")) {

  //     // const axios = require('axios')

  //   }
  //   else {
  //     alert("Incorrect User Information")
  //     // console.log("clicked")
  //   }
  // }


  return (

    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <form onSubmit={loginUser} className="content flex justify-center items-center lg:w-5/12 md1:w-9/12 sm:w-screen cmd1:min-w-5/12 xl:max-w-4/12">
        <div className="w-full" >
          <div className="container h-auto flex flex-col justify-center items-center">
            <div className="title flex flex-col justify-center items-center">
              <h1 className="text-5xl text-bg-text">Sign in</h1>
              <p className="text-bg-text text-lg mt-5 mb-2">Sign in to make your idea live</p>
            </div>
            <div className="inputs flex-col flex w-full">
              {/* <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4 " type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> */}
              <input type="text" name = 'username'  placeholder = 'Enter Your Username' className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4 " required/>
              {/* <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white" type="password" name="" id="" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> */}
              <input type="password" name = 'password'  placeholder = 'Enter Password Here'className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white" required/>
            </div>
            <div className="selection flex items-center justify-between w-full mt-2">
              <div className="optleft flex-row flex items-center">
                <input className="h-4 w-4 bg-bg-text mr-2 ml-7 cursor-pointer" type="checkbox" name="" id="" />
                <p className="mt-1">Remember me</p>
              </div>
              <Link to="/">
                <p>Forget Password?</p>
              </Link>
            </div>
            <div className="submit w-full justify-center items-center mt-3">
              {/* <input className="w-full bg-login-bg h-10 rounded-lg text-xl tracking-wider cursor-pointer" type="submit" value="Login" onClick={loginRequest} /> */}
              <input type="submit" name = 'submit' className="w-full bg-login-bg h-10 rounded-lg text-xl tracking-wider cursor-pointer"/>
            </div>
            <div className="signup flex w-full mt-4 text-lg text-bg-text">
              <Link to="/signup">
                <p>Create an account</p>
              </Link>
            </div>
          </div>
        </div>
      </form>
      <div className="bottomdiv fixed w-full bottom-0" >
        <div className="inner max-h-80">
          <img className="fixed" src={wave1} alt="" />
          <img src={wave2} alt="" />
        </div>
      </div>
    </div>
  )

}

export default Login
