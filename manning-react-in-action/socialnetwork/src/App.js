import './styles/styles.css';
import Comment from "./components/Comment";
import CommentBox from "./components/CommentBox";
import CreateComment from "./components/CreateComment";
import MyAds from "./components/MyAds";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Welcome from "./components/Welcome";
import CreatePost from './components/CreatePost';

function App() {
  const mockPosts = [];
  const mockData = {
    post: {
      id: 123,
      content: "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
      user: "tx"
    },
    comments: [
      {
        id: 0,
        user: "David",
        content: 'nice'
      },
      {
        id: 1,
        user: "Haley",
        content: 'nice'
      },
      {
        id: 2,
        user: "Peter",
        content: 'nice'
      },
      {
        id: 3,
        user: "Mitchell",
        content: 'nice'
      },
      {
        id: 4,
        user: "Perter",
        content: '@Mitchell ok'
      }
    ],
  };

  function createNewPost(post) {
    // upload post data to server or save to local storage
    console.log("received post data from child component...");
    console.log(post);
  }

  function getPosts() {
    // get posts data from server or local storage
  }

  const postGroup = mockPosts.map(post => {
    return (
      <Post id={""} />
    );
  });


  return (
    <div className="app">
      <NavBar />
      <Welcome />
      <div className="home">
        <CreatePost onPost={createNewPost} />
        <div className="posts">
          {postGroup}
        </div>
        <div>
          <button className="loadMore">
            Load more posts...
          </button>
        </div>
      </div>
      <div>
        <MyAds />
      </div>
      {/* <CommentBox comments={mockData.comments} post={mockData.post} /> */}
    </div>
  );
}

export default App;
