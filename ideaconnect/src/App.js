
// import CreatePost from './components/CreatePost';
import axios from 'axios';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
// import Login from './pages/Login'

class App extends Component {

  state = {

    idea: [],
    suggestions: [],
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/token/ideas/')
      .then(response => {
        this.setState({ idea: response.data })

      })
      .catch(error => {
        console.log("Error in App Js")
      })
  }

  
  render() {
    // let homepage = null
    // // let createPost = <CreatePost/>
    //   homepage = (
    //     <div className="content flex w-full">
    //       <div className="sidebar md:block hidden">
    //         <Sidebar />
    //       </div>
    //       <div className="posts w-full flex flex-col overflow-y-auto">
    //         {this.state.idea.map(idea => {

    //           return <div className="flex justify-center mt-5">
    //             <Post name={idea.user.firstName + idea.user.lastName} description={idea.ideaDesc} title={idea.ideatitle} tags={idea.ideatags} upvotes={idea.upVotes} downvotes={idea.downVotes} suggestions={idea.user} key={idea.ideaId} />
    //           </div>
    //         })
    //         }
    //       </div>
    //     </div>
    //   )

    // console.log(this.state.idea[0]);

    const homepage = (
      
      <div className="content flex w-full">
      <div className="sidebar md:block hidden">
        <Sidebar/>
      </div>
        <div className="posts w-full flex flex-col overflow-y-auto">
        {this.state.idea.map(idea =>{
        
        return <div className= "flex justify-center mt-5" key={idea.ideaId}>
          <Post name = { idea.first_name + idea.last_name} description = {idea.ideaDesc} title = {idea.ideaTitle} tags = {idea.ideaTags} upvotes = {idea.upvotes.length} downvotes = {idea.downvotes.length} suggestions = {idea.suggestions} id = {idea.ideaId} time = {idea.postingTime} vote = {idea.voteCounter} author = {idea.author} />
        </div>
      })
      }
      </div>
    </div>
  )

    return (
      <main className="flex flex-col">
        <div className="navbar w-full sticky top-0 z-50 ">
          <Navbar page="Home" />
        </div>
          {homepage}
      </main>

    );
  }


}

export default App;
