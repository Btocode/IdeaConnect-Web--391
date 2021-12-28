import React from 'react'
import Profile from "../components/intro"

const UserProfile = () => {
  return (
    <div className="flex flex-col ">
      <div className="content w-full flex justify-evenly mt-8">
        <div className="leftdiv w-5/12 h-96 bg-bg-text rounded-2xl">
          <Profile/>
        </div>
        <div className="rightdiv w-5/12 h-96 bg-white rounded-2xl">

        </div>
      </div>
      <div className = "flex w-full justify-around mt-5">
      <div className="bottomdiv  w-10/12 h-44 bg-white rounded-2xl">

      </div>
      </div>
    </div>
  )
}

export default UserProfile
