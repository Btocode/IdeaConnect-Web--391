import { createContext,useState,} from 'react';
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) =>{


  
  let [authtoken, setAuthToken] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
  let [id, setId] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):null)
  // let [username, setUsername] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):null)
  // let [loading, setLoading] =useState(true)
  const uid = ""

  const navigate = useNavigate()

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


  // This part will implement later
  // let updateToken = async ()=>{
  //   let response = await fetch("http://127.0.0.1:8000/auth/jwt/refresh/",{
  //       method : "POST",

  //       headers:{
  //         "Content-Type":'application/json',
          
  //       },
  //       body :JSON.stringify({'refresh': authtoken.refresh}),
  //     })
  //     let data = await response.json()
  //     if(response.status === 200){
  //       setAuthToken(data)
  //       setId(jwt_decode(data.access))
  //       localStorage.setItem('authTokens', JSON.stringify(data))
  //     }
  //     else{
  //       // logoutUser()
  //     }
  // }

  // let uid = username['user_id']
  // console.log(temp[username])
  let contextData = {
      id:id,
      // uid,
      loginUser : loginUser,
      logoutUser:logoutUser
      
  }

  // useEffect(()=>{
  //   let interval = setInterval(()=>{
  //     if(authtoken){
  //       updateToken()
  //     }
  //   },2000)
  //   return ()=> clearInterval(interval)
  // },[authtoken,loading])


    return (
      <AuthContext.Provider value = {contextData}>{children}</AuthContext.Provider>
    )
}
