import React from 'react'
import profile from '../images/dp.png'
import {Link} from 'react-router-dom';


const intro = (props) => {
  return (
    <div>

      <div className="topd flex items-center px-5 py-2 mt-4  rounded-t-2xl">
        <div className="w-3/12 h-25">
          <img
            className="rounded-full h-20 w-20"
            src={profile}
            alt=""
          />
        </div>
        <div className="w-9/12">
          <h1 className="text-lg font-semibold text-white">{props.name}</h1>
          <p className="text-gray-400">{props.job}</p>
        </div>
        <div className="w-2/12 text-bgnoti text-right">
        <Link to = "/info">Add data</Link>
        </div>
      </div>
      <div className="middled flex justify-around mt-5">
        <div className="w-11/12 bg-white rounded-md p-3 text-gray-600 text-left">
          <p>{props.bio}</p>
        </div>
      </div>
      <div className="bottomd flex w-full justify-around text-center mt-8">
        <div className="leftb w-1/3 flex flex-col content-center items-center">
          <p className="text-cleanwhite">Followers</p>
          <div className="div h-16 w-16 bg-white rounded-full flex items-center hover:bg-login-bg cursor-pointer">
            <p className="text-center w-full">120</p>
          </div>
        </div>
        <div className="middleb  w-1/3 flex flex-col content-center items-center">
          <p className="text-cleanwhite">Following</p>
          <div className="div h-16 w-16 bg-white rounded-full flex items-center hover:bg-login-bg cursor-pointer">
            <p className="text-center w-full">120</p>
          </div>
        </div>
        <div className="rightb  w-1/3 flex flex-col content-center items-center">
          <p className="text-cleanwhite">Friends</p>
          <div className="div h-16 w-16 bg-white rounded-full flex items-center hover:bg-login-bg cursor-pointer">
            <p className="text-center w-full">120</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default intro
