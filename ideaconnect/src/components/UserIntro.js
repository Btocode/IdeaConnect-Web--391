import React from 'react'
import profile from '../images/dp.png'


const UserIntro = (props) => {
  return (
    <div>

      <div className="topd flex items-center px-5 py-2 mt-4  rounded-t-2xl">
        <div className="w-5/12 h-25">
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
        
      </div>
      <div className="middled flex justify-around mt-5">
        <div className="w-11/12 bg-white rounded-md p-3 text-gray-600 text-left">
          <p>{props.bio}</p>
        </div>
      </div>
     
    </div>
  )
}

export default UserIntro
