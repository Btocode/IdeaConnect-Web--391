import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import dp from "../images/dp.png";
// import Comment from './Comment';
import REACT_APP_BASE_URL from "../utils/URLs";



const Post = (props) => {
  const navigate = useNavigate()
  // console.log(props.suggestions.sgName)


  const { id, authtoken } = useContext(AuthContext)
  const token = authtoken.access
  // console.log(token)
  let taglist = props.tags.split(" ")
  let time = props.time.split("T")

  const upvotes = []
  const downvotes = []

  let url = ""

  const handleNavigate =() => {
    navigate(`/viewprofile/${props.author}`);
  }

  useEffect(() => {
    url = REACT_APP_BASE_URL + 'token/idea/upvote/' + props.id + "/"
    axios.get(url)
      .then(response => {
        upvotes.push(response.data.upvotes)
        downvotes.push(response.data.downvotes)
        return response.data

      }).then(json => {
        // console.log(upvotes[0], " Test ", downvotes[0]);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])



  const upvoteHandler = () => {
    // remove vote
    const removeVote = (x) => {
      // console.log('removing')
      for (let i = 0; i < x.length; i++) {
        if (x[i] === id.user_id) {
          x.splice(i, 1);
        }
        // console.log(x, "remote");
      }
    }
    // add vote 
    const addVote = (p) => {
      p.push(id.user_id)
    }

    for (let index = 0; index < upvotes.length; index++) {
      if (upvotes[0].includes(id.user_id)) {
        // console.log('TRUE')
        removeVote(upvotes[0])
      }
      else if (upvotes[0].length === 0) {
        // console.log('I am here');
        addVote(upvotes[0])
      }
      else {
        //  upvotes.push(id.user_id);
        addVote(upvotes[0])
        // console.log("something else");
      }
    }

    // Starting 
    let vote = async (e) => {
      // e.preventDefault()
      // console.log(e.target.email.value)
      console.log(JSON.stringify({ 'upvotes': upvotes[0], 'downvotes': downvotes[0], 'pk': props.id }));
      let response = await fetch(url, {
        method: "PUT",

        headers: {
          "Content-Type": 'application/json',

        },
        body: JSON.stringify({ 'upvotes': upvotes[0], 'downvotes': downvotes[0], 'pk': props.id }),
      })
      let data = await response.json()
      // console.log(upvotes[0]," Data ",downvotes[0])
      // console.log(data);

    }
    vote()
    alert("Please reload to see the changes")
  }


  const downvoteHandler = () => {
    // remove vote
    const removeVote = (x) => {
      console.log('removing')
      for (let i = 0; i < x.length; i++) {
        if (x[i] === id.user_id) {
          x.splice(i, 1);
        }
        console.log(x, "remote");
      }
    }
    // add vote 
    const addVote = (p) => {
      p.push(id.user_id)
    }

    for (let index = 0; index < downvotes.length; index++) {
      if (downvotes[0].includes(id.user_id)) {
        console.log('TRUE')
        removeVote(downvotes[0])
      }
      else if (downvotes[0].length === 0) {
        console.log('I am here');
        addVote(downvotes[0])
      }
      else {
        //  upvotes.push(id.user_id);
        addVote(downvotes[0])
        console.log("something else");
      }
    }

    // Starting 
    let downVote = async (e) => {
      // e.preventDefault()
      // console.log(e.target.email.value)
      console.log(JSON.stringify({ 'upvotes': upvotes[0], 'downvotes': downvotes[0], 'pk': props.id }));
      let response = await fetch(url, {
        method: "PUT",

        headers: {
          "Content-Type": 'application/json',

        },
        body: JSON.stringify({ 'upvotes': upvotes[0], 'downvotes': downvotes[0], 'pk': props.id }),
      })
      let data = await response.json()


    }
    downVote()

    alert("Please reload to see the changes")
  }
  // console.log(url);
  // useEffect(()=>{

  //   console.log(url);


  // },[])






  return (
    <div className="pcontainer w-11/12 min-h-full text-gray-700  cmd1:flex shadow-lg ">
      <div className="content p-3 lg:w-9/12 rounded-lg cmd1:w-full bg-white">
        {/* Topbar design */}
        <div className="tpanel flex shadow p-1 rounded-lg">
          <div className="leftitems flex items-center w-1/2 ">
            <img className="h-10 w-10 rounded-full" src={dp} alt="" />
            
            <button onClick={handleNavigate}><p className="ml-3" >{props.name}</p></button>
           
            
            
            <p className='ml-4'>{(time[1].split(".")[0]) + " " + time[0]}</p>
          </div>
          <div className="rightitems flex justify-end w-1/2 mr-3">
            <button className="btn1 mr-4 px-3 h-8 shadow rounded-xl hover:bg-bgnoti">Collab</button>
            <button className="btn2 px-3 h-8 shadow hover:bg-upgreen  rounded-xl ">Follow</button>
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
              {taglist.map((tag, i) => {

                return (
                  <li className="inline ml-2" key={i}>
                    <button>#{tag}</button>
                  </li>
                )
              })}

            </ul>
          </div>
        }
        <div className="downpanel flex w-full flex-col text-cleanwhite text-lg">
          <div className="votecounter flex justify-start p-2 w-full">
            {/* <p className="btn1  px-2 py-1 mr-3 rounded-lg text-green italic"> {props.vote} upvotes</p> */}
            {/* <p className="btn2 bg-downred px-2 py-1 rounded-lg"> {props.downvotes} downvotes</p> */}
          </div>
          <div className="votebuttons flex justify-evenly p-2 w-full">
            <button className="btn1 bg-upgreen px-6 py-1 rounded-lg" onClick={upvoteHandler}> Upvote</button>
            <p className="btn1  px-2 py-1 mr-3 rounded-lg text-green italic"> {props.upvotes} UpVotes</p><br />
            <p className="btn1  px-2 py-1 mr-3 rounded-lg text-green italic"> {props.downvotes} DownVotes</p>
            <button className="btn2 bg-downred px-6 py-1 rounded-lg" onClick={downvoteHandler} > Downvote</button>
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
          <textarea className="self-end w-full h-12 rounded-lg p-2 bg-cleanwhite" name="" id="" placeholder="Write your text and press Enter" />
        </div>
      </div>
    </div>
  )
}

export default Post
