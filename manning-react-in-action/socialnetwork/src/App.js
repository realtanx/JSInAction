import Comment from "./components/Comment";
import CommentBox from "./components/CommentBox";
import CreateComment from "./components/CreateComment";
import Post from "./components/Post";

function App() {
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



  return (
    <div>
      <CommentBox comments={mockData.comments} post={mockData.post} />
    </div>
  );
}

export default App;
