import axios from 'axios';
import { Component } from 'react/cjs/react.development';
import Navbar from "../components/Navbar";
import Post from '../components/TrendingPost';
import Sidebar from '../components/TrendingSidebar';




class Trending extends Component {

  state = {
    ideas: [],
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_BASE_URL + 'token/ideas/')
      .then(response => {
        this.setState({ ideas: response.data })

      })
      .catch(error => {
        console.log("Error in AppJs")
      })
  }
  render() {

    const trendingIdeas = (
      <div>
        {this.state.ideas.map(idea => {

          return <div className="flex justify-center mt-5" key={idea.id}>
            <Post name={idea.first_name + idea.last_name} description={idea.ideaDesc} title={idea.ideaTitle} tags={idea.ideaTags} upvotes={idea.upvotes.length} downvotes={idea.downvotes.length} suggestions={idea.suggestions} id={idea.ideaId} />
          </div>
        })
        }
      </div>
    )

  




  return(
    <main className = "" >
      
      <div className='sticky top-0'>
      <Navbar/>
      </div>
      
      <div className="content flex w-full">
        <div className="sidebar md:block hidden">
          <Sidebar/>
        </div>
        <div className="w-full shadow">
        <p className = "text-center tracking-widest text-lg mt-2 ">Showing results for  <span className = "text-downred tracking-widest">#overall </span> posts</p>
      
        <div className="posts w-full flex flex-col overflow-y-auto">
          {trendingIdeas}
        </div>
        </div>
      </div>
      

    </main>

  
  );
}
}

export default Trending
