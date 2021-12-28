import React from 'react'
import {Link} from "react-router-dom"
import dp from "../images/dp.png";


const Post = () => {
  return (
    <div className="pcontainer w-11/12 min-h-full text-gray-700  cmd1:flex shadow-lg">
      <div className="content p-3 lg:w-9/12 rounded-lg cmd1:w-full bg-white">
        {/* Topbar design */}
        <div className="tpanel flex shadow p-1 rounded-lg">
          <div className="leftitems flex items-center w-1/2 ">
            <img className="h-10 w-10 rounded-full" src={dp} alt="" />

            <p className="ml-3">Afsan Saeed</p>
          </div>
          <div className="rightitems flex justify-end w-1/2 mr-3">
            <button className="btn1 mr-4 px-3 h-8 shadow rounded-xl">Collab</button>
            <button className="btn2 px-3 h-8 shadow rounded-xl">Follow</button>
          </div>
        </div>
        {/* Top panel ends here */}

        <div className="post">
          <div className="post-title text-xl p-2 italic shadow-md">
            <h2>Speak and search from Quran</h2>
          </div>

        </div>
        <div className="tagcontainer">
          <ul className="inline">
            <li className="inline ml-2">
              <button>#machinelearning</button>
            </li>
            <li className="inline ml-2">
              <button>#artificialintelligence</button>
            </li>
            <li className="inline ml-2">
              <button>#deeplearning</button>
            </li>
          </ul>
        </div>
        <div className="downpanel flex w-full flex-col">


        </div>
      </div>
      <div className="others lg:w-3/12 cmd1:w-full bg-white shadow-md p-3 m-1 rounded-lg">
        <div className="votecounter flex flex-col p-2 w-full">

          <div className="w-full flex">
            <p className="btn1 bg-upgreen px-2 mr-3 rounded-lg w-1/2"> 12k upvotes</p>
            <p className="btn2 bg-downred px-2 rounded-lg w-1/2"> 22 downvotes</p>
          </div>
          <div className="viewButton w-full mt-5">
            <Link to = '/viewpost' className = "">
            <button className=" w-full shadow-lg px-2 py-1 rounded-xl hover:bg-upgreen">View this Idea</button>
            </Link>
            
          </div>
        </div>


      </div>
    </div>
  )
}

export default Post
