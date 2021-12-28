import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wave1 from "../images/wave.svg";
import wave2 from "../images/wave2.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [username,setUsername] = useState('')
  const [password1,setPassword1] = useState('')
  const [password2,setPassword2] = useState('')
  const [email,setemail] = useState('')
  // const [dateOfBirth,setDate] = useState('')
  // const [gender,setGender] = useState('')

  const registrationRequest = () => {
    if ((username !== "") &&  (password1 !== "") &&  (password2 !== "")){
      if(password1 === password2){
        // const axios = require('axios')
        axios.post('http://127.0.0.1:8000/api/token/create/',
        {
         
          "first_name": firstName,
          "last_name": lastName,
          "username": username,
          "email": email,
          "password": password2
      }
        )
        .then(function (response) {
          if (response.statusText === 'Created') {
            navigate("/login")
          }
          else{
            console.log("Error found")
          }
        })
      }
      else{
        alert("Please check your password")
      }
      
    }
    else{
      alert("No fields are allowed to be empty")
      // console.log("clicked")
  }
}

  return (
    <div className = "w-screen h-screen flex flex-col justify-center items-center">
      <div className="content flex justify-center items-center lg:w-5/12 md1:w-9/12 sm:w-screen cmd1:min-w-5/12 xl:max-w-4/12 mb-24">
        <div className = "w-full flex lg:flex-col md1:flex-row md:flex-row sm:flex-col cmd1:flex-row xl:flex-row" >
          <div className="leftside lg:w-1/3 md1:w-1/3 sm:w-screen cmd1:min-w-1/3 xl:max-w-1/3">
            <h2 className = "text-left text-5xl sm:text-center">Sign Up</h2>
          </div>
          <div className="rightside lg:w-2/3 md1:w-2/3 sm:w-screen cmd1:min-w-2/3 xl:max-w-2/3 flex flex-col">
            <input className = "w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder = "First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input className = "w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder = "Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            <input className = "w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder = "Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <input className = "w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder = "Enter Email" value={email} onChange={(e) => setemail(e.target.value)} required/>
            <input className = "w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="password" placeholder = "Password" value={password1} onChange={(e) => setPassword1(e.target.value)} required/>
            <input className = "w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="password" placeholder = "Retype Password" value={password2} onChange={(e) => setPassword2(e.target.value)} required/>
            {/* <div className="innerdiv">
              <input className = "w-1/3 bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white" type="text" name="" id="" value={dateOfBirth} onChange={(e) => setDate(e.target.value)} placeholder='Age'/>
              <select name="" id="" className = "w-1/3 py-3 bg-bg-text rounded-lg px-4 text-lg text-white ml-4" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="Select">---</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div> */}
            <div className=" w-full justify-center items-center mt-3">
              <button className = "w-2/3 bg-login-bg h-10 rounded-lg text-xl tracking-wider cursor-pointer"  onClick={registrationRequest} >Sign Up</button>
              
            </div>
          </div>
          
        </div>
      </div>
      <div className="bottomdiv fixed w-full bottom-0" >
        <div className="inner max-h-80">
        <img className = "fixed" src={wave1} alt="" />
        <img src={wave2} alt="" />
        </div>
       
      
      </div>
    </div>
  )
}

export default Signup
