import React from 'react'
import Post from '../components/TrendingPost';
import Sidebar from '../components/TrendingSidebar'
import Navbar from "../components/Navbar"

const Trending = () => {
  return (
    <main className = "">
      
      <div className='sticky top-0'>
      <Navbar/>
      </div>
      
      <div className="content flex w-full">
        <div className="sidebar md:block hidden">
          <Sidebar/>
        </div>
        <div className="w-full shadow">
        <p className = "text-center tracking-widest text-lg mt-2 ">Showing results for  <span className = "text-downred tracking-widest">#overall </span> posts</p>
      
        <div className="posts w-full flex flex-col overflow-y-auto">
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
          <div className= "flex justify-center mt-5">
            <Post/>
          </div>
        </div>
        </div>
      </div>
      

    </main>


  );
}

export default Trending
