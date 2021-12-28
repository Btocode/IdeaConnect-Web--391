
// import CreatePost from './components/CreatePost';
import axios from 'axios';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import Login from './pages/Login'

class App extends Component {

  state = {
    ideas: [
      // {
      //   ideaId: 1,
      //   ideaUploader:"Afsan vai",
      //   ideaDesc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id odit labore consequuntur, non sapiente, blanditiis suscipit laborum tenetur alias quas. Nemo dolores aperiam architecto iure vel accusamus possimus ut? Quos fuga vitae aperiam dignissimos sit! Accusantium quasi minus quidem, similique blanditiis molestiae assumenda nesciunt sint, quas, deleniti labore suscipit!",
      //   ideaTitle: "Nature walk in the park",
      //   upvotes: 500,
      //   downvotes: 50,
      //   suggestions: [
      //     {
      //       sgName:"Shahriyar Hossain",
      //       sgDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos repudiandae magni magnam dolor expedita!"
      //    }
      //   ],
      //   ideaTags:["machinelearning","AI","robotics"]
      // },
    ],
    idea: [],
    suggestions: [],
    isAuthorized: true
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/token/idea/')
      .then(response => {
        this.setState({ idea: response.data })
        // console.log(response.data[0])
      })
      .catch(error => {
        console.log("error")
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



    return (
      <main className="flex flex-col">
        <div className="navbar w-full sticky top-0 z-50 ">
          <Navbar page="Home" />
        </div>

        <div className="content w-full flex">
          <aside className="sidebar w-72 h-72 bg-blue-bg sticky top-12 md:block hidden">
            <Sidebar />
          </aside>
          <div className="posts w-full flex flex-col overflow-y-auto">
            <div className='post flex justify-center mt-5'>
              {/* Post rendering */}
              {/* {this.state.idea.map(idea => {

               <div className="flex justify-center mt-5">
                  <Post name={idea.user.firstName + idea.user.lastName} description={idea.ideaDesc} title={idea.ideatitle} tags={idea.ideatags} upvotes={idea.upVotes} downvotes={idea.downVotes} suggestions={idea.user} key={idea.ideaId} />
                </div>
              })
              } */}
              {/* Post rendering */}

            </div>
          </div>
        </div>
      </main>

    );
  }


}

export default App;
