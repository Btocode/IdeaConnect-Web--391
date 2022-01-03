import React, {useEffect, useState, useContext } from 'react'
import AuthContext from '../context/AuthContext';
import dp from "../images/dp.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const CreatePost = () => {
  let navigate = useNavigate();
  const { id } = useContext(AuthContext)
  let uid = id['user_id']

  const [ideaTitle, setideaTitle] = useState('')
  const [ideaDesc, setideaDesc] = useState('')
  const [ideaTags, setideaTags] = useState('')

  const postIdea = (e) => {
    e.preventDefault()
    
    if ((ideaTitle !== "") && (ideaDesc !== "") && (ideaTags !== "")) {
      
      let response = axios.post('http://127.0.0.1:8000/api/token/ideas/',
        {
          "ideaTitle": ideaTitle,
          "ideaDesc": ideaDesc,
          "ideaTags": ideaTags,
          "author": uid,
          // 'upvotes':[uid],
          // 'downvotes':[uid]

        }
      ).then((response)=> {
          if(response.status === 201){
            navigate("/")
          }
      
          
        })
    
    }
    else {
      alert("Fields cannot be empty")
    }

  }

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




  return (
    <main className="flex flex-col">
      <div className="navbar w-full sticky top-0 z-50 ">
        <Navbar page="Home" />
      </div>

      <div className="content w-full flex">
        <aside className="sidebar w-72 h-72 bg-blue-bg sticky top-12 md:block hidden">
          <Sidebar />
        </aside>
        <div className="posts w-full flex flex-col ">
          <div className='post flex justify-center mt-5'>
            <form  onSubmit={postIdea} className="pcontainer w-10/12 min-h-full text-gray-700 shadow-lg flex flex-col ">
              <div className="content p-3 rounded-lg  bg-white">
                {/* Topbar design */}
                <div className="tpanel flex shadow p-1 rounded-lg">
                  <div className="leftitems flex items-center w-1/2 ">
                    <img className="h-10 w-10 rounded-full" src={dp} alt="" />

                    <p className="ml-3"> {profile.first_name + " " +profile.last_name}</p>
                  </div>
                  <div className="rightitems flex justify-end w-1/2 mr-3">
                    <input type="submit" value="Submit" className='bg-upgreen h-8 px-4 py-1 rounded-lg text-white '  />
                  </div>
                </div>
                {/* Top panel ends here */}

                <div className="post">
                  <div className="post-title text-xl p-2 italic shadow-md">
                    <input className='w-full p-1 rounded-md text-md' type="text" placeholder='Provide a title here' value={ideaTitle} onChange={(e) => setideaTitle(e.target.value)} required />
                  </div>
                  <div className="postcontainer p-5 text-lg shadow-md">
                    <textarea className='w-full rounded-md p-2' name="" id="" cols="30" rows="10" placeholder='Provide Proper Description for your Project ' value={ideaDesc} onChange={(e) => setideaDesc(e.target.value)} required ></textarea>
                  </div>
                </div>


              </div>
              <div className="others bg-white w-full shadow-md p-2 m-1 rounded-lg flex">
                <div className="suggtitle text-xl flex items-center mt-1 mb-2 shadow p-1 rounded-lg px-4 py-1">
                  <p className="">Tags</p>
                </div>
                <div className="suggtitle text-xl flex items-center mt-1 mb-2 shadow rounded-lg w-full">
                  <input className='w-full px-5 rounded-md' type="text" placeholder='eg. #ml #ai #mlp #rnn #cnn' value={ideaTags} onChange={(e) => setideaTags(e.target.value)} required />
                </div>



              </div>
            </form>
            </div>
          </div>
        </div>
    </main>

  )
}


export default CreatePost;