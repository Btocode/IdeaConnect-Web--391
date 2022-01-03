import React, { useState,useEffect } from 'react'
import Profile from "../components/UserIntro"
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';



const ProfielView = ()=> {
  
  
  // const [allinfo,setAllinfo] = useState([])
  
  const [info,setAllinfo] = useState([])

  const {id} = useParams()
  console.log(id);
  let url = 'http://127.0.0.1:8000/api/token/profile/' + id + "/"
  console.log(url);
  useEffect(()=>{
    axios.get(url)
    .then(response => {
      // console.log(response.data)
      return response.data
      
    }).then(json => {
      setAllinfo(json)
      console.log(json, "This one from profile")

    })
    .catch(error => {
      console.log(error)
    })

  },[])

  const [profile,setProfile] = useState([])
  
  let url1 = 'http://127.0.0.1:8000/api/token/manipulate/' + id + "/"
  useEffect(()=>{
    axios.get(url1)
    .then(response => {
      // console.log(response.data)
      return response.data
      
    }).then(json => {
      setProfile(json)
      

    })
    .catch(error => {
      console.log(error)
    })

  },[])

  // console.log(profile)
    // console.log("Profile elements",this.state.profile[0],"Ends here")
  console.log(profile.first_name)
    
    return (
      
      <div className="flex flex-col ">
      <Navbar/>
        <div className="content w-full flex justify-evenly mt-8">
          <div className="leftdiv lg:w-7/12 md:w-8/12 sm:w-full pb-5 bg-bg-text rounded-2xl" key = {id}>
            <Profile name = {profile.first_name + " " +profile.last_name}  job = {info.jobTitle} bio = {info.bio} gender = {info.gender}/>
          </div>
        </div>
        <div className = "flex w-full justify-around mt-5">
        <div className="bottomdiv  w-10/12 h-44 bg-white rounded-2xl flex text-lg">
          <div className="left w-1/2 p-4 flex flex-col justify-center ">
          <h2 className=''>Gender: <span className='text-xl italic text-downred'>{info.gender}</span></h2>
          <h2>Age: <span className='text-xl italic text-downred'>{info.age}</span></h2>
          <h2>Email: <span className=' italic text-downred'>{info.email}</span></h2>
          </div>
          <div className="right w-1/2 p-4 flex flex-col justify-center">
          <h2>Programming Language: <span className='text-xl italic text-downred'>{info.programming}</span></h2>
          <h2>Spoken Language: <span className='text-xl italic text-downred'>{info.languageKnown}</span></h2>
          </div>

        </div>
        </div>
      </div>
    )
  
  


  }

export default ProfielView

