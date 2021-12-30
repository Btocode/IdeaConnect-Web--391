import React,{ useContext,useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'
import AuthContext from '../context/AuthContext'
import '../App.css';



const Navbar = (props) => {
  // let home = false
  // if(props.name === "Home"){
  //   document.getElementById("home").innerHTML = "My First JavaScript";
  //     home = true
  // }
  const {id} = useContext(AuthContext)
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  let url = 'http://127.0.0.1:8000/api/token/manipulate/' + id.user_id + "/"
  useEffect(()=>{
    axios.get(url)
    .then(response => {
      // console.log(response.data)
      setFirstName(response.data.first_name)
      setLastName(response.data.last_name)
      return response.data.email
      
    }).then(json => {
      // setProfile(json)

    })
    .catch(error => {
      console.log(error)
    })

  },[])
 
  return (
    <nav className= 'shadow-md h-14 flex justify-between items-center text-lg bg-gray-900 text-white'>
      <Link to = '/' className = 'pl-8'>
        IdeaConnect
      </Link>
      <div className="div w-4/12 px-4 cursor-pointer flex justify-evenly">
        <Link to = '/' className = ''>
          <p id = "home" >Home</p>
        </Link>
        <Link to = '/trending' className = ''>
        <p id = "trending">Trending</p>
        </Link>
        <NavLink to = '/notification'>
        <p id = "notification">Notification</p>
        </NavLink>
      </div>
      <div className="profile flex pr-5 items-center">
      <Link to = '/profile' >
        {firstName + " "+lastName}
      </Link>
        <Link to = '/profile' >
        <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </Link>
      </div>
    </nav>
 
    
  )
}

export default Navbar
