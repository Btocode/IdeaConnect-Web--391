import jwt_decode from 'jwt-decode';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) =>{


  
  let [authtoken, setAuthToken] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)

  let [profile,setProfile] = useState([]);

  // let [profile, setProfile] = useState(()=> localStorage.
  // getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
  
  let [id, setId] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):null)
  // let [username, setUsername] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):null)
  // let [loading, setLoading] =useState(true)
  // const uid = ""

  const navigate = useNavigate()

// get user profile infos
//   let url = process.env.REACT_APP_BASE_URL + 'token/profile/' + id.user_id + "/"
//   let userProfileInfo =()=>{
//     axios.get(url)
//     .then(response => {
//       // console.log(response.data)
//       return response.data
      
//     }).then(json => {
//       setProfile(json)
//       console.log(json, "This is from Auth")

//     })
//     .catch(error => {
//       console.log(error)
//     })

// }

// get user profile infos




  let loginUser = async (e ) =>{
    e.preventDefault()
    // console.log(e.target.email.value)
      let response = await fetch("http://127.0.0.1:8000/api/token/",{
        method : "POST",

        headers:{
          "Content-Type":'application/json',
          
        },
        body :JSON.stringify({'username':e.target.username.value,'password':e.target.password.value}),
      })
      let data = await response.json()
      // console.log("data:", data)

      if(response.status === 200){
        setAuthToken(data)
        setId(jwt_decode(data.access))
        // setUsername(jwt_decode(data.access).username)
        localStorage.setItem('authTokens', JSON.stringify(data))
        navigate('/')

      }
      else{
        alert(data.detail)
      }
  }



  // console.log(username.username)
  let logoutUser = () =>{
    setAuthToken = null
    setId = null
    localStorage.removeItem('authTokens')
    navigate('/login')
    window.location.reload()
  }


  // const downvoteGiven =()=>{

  // }
 
  let contextData = {
      id:id,
      authtoken:authtoken,
      // upvoteGiven:upvoteGiven,
      // downvoteGiven:downvoteGiven,
      // uid,
      loginUser : loginUser,
      logoutUser:logoutUser,
      
  }

 


    return (
      <AuthContext.Provider value = {contextData}>{children}</AuthContext.Provider>
    )
}
