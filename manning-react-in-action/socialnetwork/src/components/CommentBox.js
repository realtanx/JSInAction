import Comment from "./Comment";
import CreateComment from "./CreateComment";
import Post from "./Post";

export default function CommentBox({ comments, post }) {

    const commentGroup = comments.map(comment => {
        return (
            <Comment content={comment.content} user={comment.user} />
        );
    });

    return (
        <div className="commentBox">
            <Post content={post.content} user={post.user} />
            {/* <Comment content={"this is a comment"} user={"from @nobody"} /> */}
            {commentGroup}
            <CreateComment />
        </div>
    );
}