import React, { useContext,useState,useEffect } from 'react'
import Profile from "../components/intro"
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import Navbar from '../components/Navbar'



const UserProfile = ()=> {
  
  
  // const [allinfo,setAllinfo] = useState([])
  
  const [info,setAllinfo] = useState([])


  const {id} = useContext(AuthContext)
  let url = 'http://127.0.0.1:8000/api/token/profile/' + id.user_id + "/"
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
  
  let url1 = 'http://127.0.0.1:8000/api/token/manipulate/' + id.user_id + "/"
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
          <div className="leftdiv w-5/12 h-96 bg-bg-text rounded-2xl" key = {id}>
            <Profile name = {profile.first_name + " " +profile.last_name}  job = {info.jobTitle} bio = {info.bio} gender = {info.gender}/>
          </div>
        </div>
        <div className = "flex w-full justify-around mt-5">
        <div className="bottomdiv  w-10/12 h-44 bg-white rounded-2xl">
  
        </div>
        </div>
      </div>
    )
  
  


  }

export default UserProfile
