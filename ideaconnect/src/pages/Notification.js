import React from 'react'
import Notifications from "../components/Notifications"
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Notification = () => {
  // return (
  //   <div>
  //     <div className="notifications w-full flex flex-col justify-center items-center ">
        

  //     </div>
  //   </div>
  // )
  return (
    <main className="flex flex-col">
      <div className="navbar w-full sticky top-0 z-50 ">
        <Navbar page = "Notification"/>
      </div>

      <div className="content w-full flex">
        <aside className="sidebar w-72 h-72 bg-blue-bg sticky top-12 md:block hidden">
          <Sidebar />
        </aside>
        <div className="posts w-full flex flex-col overflow-y-auto">
          <div className='post flex justify-center mt-5'>
          <Link to = '/viewpost' className="items w-11/12 bg-bgnoti mt-4 p-1 hover:shadow-lg cursor-pointer">
          <Notifications/>
        </Link>  
          </div>
        </div>
      </div>
    </main>

  );
}

export default Notification
