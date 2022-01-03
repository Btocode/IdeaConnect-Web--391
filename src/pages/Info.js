import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AuthContext from '../context/AuthContext';


const Info = () => {
  const { id } = useContext(AuthContext)
  // console.log(id.user_id,"info Page",id.username);
  const navigate = useNavigate();
  const [resume, setResume] = useState('')
  const [jobtitle, setJobtitle] = useState('')
  const [github, setGithub] = useState('')
  const [linkedin, setLinkedIn] = useState('')
  const [bio, setBio] = useState('')
  const [dateOfBirth, setDate] = useState('')
  const [gender, setGender] = useState('')
  const [programming, setProgramming] = useState('')
  const [language, setLanguage] = useState('')

  const addInfo = () => {

      // const axios = require('axios')
      let url = REACT_APP_BASE_URL + "token/profile/" + id.user_id + "/"
      axios.post(url,
        {
          "user": id.user_id,
          "gender": gender,
          "age": dateOfBirth,
          "jobTitle": jobtitle,
          "programming": programming,
          "languageKnown": language,
          "linkedIn": linkedin,
          "resume": resume,
          "github": github,
          "bio": bio,

          "username": id.username

        }
      )
        .then(function (response) {
          if (response.statusText === 'Created') {
            navigate("/profile")
          }
          else {
            console.log(response)
          }
        })
  

  }

  return (
    <main>
      <Navbar />
      <div className="w-screen h-screen flex flex-col  items-center">
        <div className="content flex justify-center items-center w-full mb-24">
          <div className="w-full flex flex-col items-center" >
            <div className="top mt-20">
              <h2 className="text-left text-3xl sm:text-center mb-6">Update User Information</h2>
            </div>
            <div className="bottom lg:w-2/3 md1:w-2/3 sm:w-screen cmd1:min-w-2/3 xl:max-w-2/3 flex flex-col">


              <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder="Job Title" value={jobtitle} onChange={(e) => setJobtitle(e.target.value)}  />
              <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder="Provide Bio" value={bio} onChange={(e) => setBio(e.target.value)}  />
              <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder="Github link" value={github} onChange={(e) => setGithub(e.target.value)}  />
              <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder="LinkedIn Link" value={linkedin} onChange={(e) => setLinkedIn(e.target.value)}  />
              <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder="Resume Link" value={resume} onChange={(e) => setResume(e.target.value)}  />


              <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder="Programming Skills" value={programming} onChange={(e) => setProgramming(e.target.value)}  />
              <input className="w-full bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white mb-4" type="text" placeholder="KnownLanguage" value={language} onChange={(e) => setLanguage(e.target.value)}  />


              <div className="innerdiv">
                <input className="w-1/3 bg-bg-text h-12 rounded-lg px-4 text-lg text-white placeholder-white" type='number' name="" id="" value={dateOfBirth} onChange={(e) => setDate(e.target.value)} placeholder='Age' />
                <select name="" id="" className="w-1/3 py-3 bg-bg-text rounded-lg px-4 text-lg text-white ml-4" value={gender} onChange={(e) => setGender(e.target.value)} >
                  <option value="Select">---</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className=" w-full justify-center items-center mt-3">
                <button className="w-1/3 bg-login-bg h-10 rounded-lg text-xl tracking-wider cursor-pointer" onClick={addInfo} >Update </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Info
