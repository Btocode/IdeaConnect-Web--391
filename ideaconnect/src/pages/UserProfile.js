import React, { useContext,useState,useEffect } from 'react'
import Profile from "../components/intro"
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import Navbar from '../components/Navbar'



const UserProfile = ()=> {
  
  
  const [profile,setProfile] = useState([])
  
  const {id} = useContext(AuthContext)
  let url = 'http://127.0.0.1:8000/api/token/profile/' + id.user_id + "/"
  console.log(url);
  let userProfile = []
  useEffect(()=>{
    axios.get(url)
    .then(response => {
      // console.log(response.data)
      return response.data
      
    }).then(json => {
      setProfile(json)
      console.log(json, "This")

    })
    .catch(error => {
      console.log(error)
    })

  },[])

  // console.log(profile)
    // console.log("Profile elements",this.state.profile[0],"Ends here")
    for (let index = 0; index < profile.length; index++) {
      if (profile[index].user === 1) {
        // console.log(profile[index], "id:" , id)
        userProfile = profile[index]

        break
      }
      else{
        console.log("failed to do so")
      }
      
    }
    
    return (
      
      <div className="flex flex-col ">
      <Navbar/>
        <div className="content w-full flex justify-evenly mt-8">
          <div className="leftdiv w-5/12 h-96 bg-bg-text rounded-2xl">
            <Profile/>
          </div>
          <div className="rightdiv w-5/12 h-96 bg-white rounded-2xl">
  
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
