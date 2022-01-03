import React from 'react'
import {Link} from "react-router-dom"
import dp from "../images/dp.png";

const Notifications = () => {
  return (
    <div className = "flex ">
      <div className="contents ">
          <div className="profile">
            <Link to = "/" className = "flex items-center">
              <img src={dp} className = "h-7 w-7 rounded-full" alt="" />
              <h3 className = "ml-2 text-bgname">Afsan Saeed</h3>
              <p className = "ml-2"> has <span className = "reaction-type">Upvoted</span> on your post</p>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Notifications
