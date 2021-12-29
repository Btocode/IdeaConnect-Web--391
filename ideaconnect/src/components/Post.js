import React from 'react'
// import Comment from './Comment';
import dp from "../images/dp.png";


const Post = (props) => {
  // console.log(props.suggestions.sgName)
  return (
    <div className="pcontainer w-11/12 min-h-full text-gray-700  cmd1:flex shadow-lg ">
      <div className="content p-3 lg:w-9/12 rounded-lg cmd1:w-full bg-white">
        {/* Topbar design */}
        <div className="tpanel flex shadow p-1 rounded-lg">
          <div className="leftitems flex items-center w-1/2 ">
            <img className="h-10 w-10 rounded-full" src={dp} alt="" />

            <p className="ml-3">{props.name}</p>
          </div>
          <div className="rightitems flex justify-end w-1/2 mr-3">
            <button className="btn1 mr-4 px-3 h-8 shadow rounded-xl">Collab</button>
            <button className="btn2 px-3 h-8 shadow rounded-xl">Follow</button>
          </div>
        </div>
        {/* Top panel ends here */}

        <div className="post">
          <div className="post-title text-xl p-2 italic shadow-md">
            <h2>{props.title}</h2>
          </div>
          <div className="postcontainer p-5 text-lg">
            <p>{props.description}</p>
          </div>
        </div>
        {
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
        }
        <div className="downpanel flex w-full flex-col">
          <div className="votecounter flex justify-start p-2 w-full">
            <p className="btn1 bg-upgreen px-2 mr-3 rounded-lg"> {props.upvotes} upvotes</p>
            <p className="btn2 bg-downred px-2 rounded-lg"> {props.downvotes} downvotes</p>
          </div>
          <div className="votebuttons flex justify-evenly p-2 w-full">
            <button className="btn1 bg-upgreen px-5 py-1 rounded-lg"> Upvote</button>
            <button className="btn2 bg-downred px-5 py-1 rounded-lg"> Downvote</button>
          </div>
        </div>
      </div>
      <div className="others lg:w-3/12 cmd1:w-full bg-white shadow-md p-3 m-1 rounded-lg">
        <div className="suggtitle text-xl flex items-center mt-1 mb-2 shadow p-1 rounded-lg">
          <p className="">Suggestions</p>
        </div>
        
        {/* <div className="comment h-52 border-2 border-white p-2 overflow-y-auto bg-cleanwhite">
          { props.suggestions.map(item =>{
            return  <Comment name = {item.firstName} sugg = {item.lastName} key={item.firstName}/>
          })
           
          }

          
          
        </div> */}
        <div className="givesugg flex flex-col w-full">
          <p className=" my-2">Add Suggestion</p>
          <textarea className="self-end w-full h-12 rounded-lg p-2 bg-cleanwhite" name="" id="" placeholder = "Write your text and press Enter" />
        </div>
      </div>
    </div>
  )
}

export default Post
