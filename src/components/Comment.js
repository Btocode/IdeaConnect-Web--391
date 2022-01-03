import React from 'react'
import dp from "../images/dp.png";

const Comment = (props) => {
  return (
    <div className="suggcontent flex flex-col w-full bg-gray-300 shadow-md rounded-lg bg-white mb-2 ">
            <div className="topbar flex">
              <img className="h-7 w-7 rounded-full mx-2 mt-2" src={dp} alt="" />
              <p className="text-md text-black mt-3">{props.name}</p>
            </div>
            <p className="px-4 text-sm">{props.sugg}</p>
          </div>
  )
}

export default Comment
