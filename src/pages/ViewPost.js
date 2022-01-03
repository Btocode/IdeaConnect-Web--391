import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';


const ViewPost = () => {

  const { state } = useLocation()
  // console.log(state.ideaId);
  // const [data, setData] = useState()
  const [tags, setTags] = useState()
  // console.log(state.ideaId)
  const id = state.ideaId
  console.log(id);
  const data = []


  // const { id } = useContext(AuthContext)
  let url = process.env.REACT_APP_BASE_URL + 'token/idea/' + id + "/"
  // console.log(url);
  useEffect(() => {
    axios.get(url)
      .then(response => {
        // console.log(response.data)
        return response.data

      }).then(json => {
        // setData(json)
        data = json
        // console.log(json,"Json here");

      })

      .catch(error => {
        console.log(error)
      })

  }, [])

console.log(data.ideaTags, "Test");


  return (
    <main className='flex flex-col '>
      <Navbar />
      <div className='justify-center items-center flex mt-10'>
        <div className="pcontainer w-9/12 min-h-full text-gray-700  cmd1:flex shadow-lg ">
        {/* <Post name = { data.first_name + data.last_name} description = {data.ideaDesc} title = {data.ideaTitle} tags = {data.ideaTags} upvotes = {data.upvotes && data.upvotes.length} downvotes = {data.downvotes && data.downvotes.length} suggestions = {data.suggestions} id = {data.ideaId} time = {data.postingTime} vote = {data.voteCounter} /> */}
        </div>
      </div>
    </main>
  )
}

export default ViewPost;
