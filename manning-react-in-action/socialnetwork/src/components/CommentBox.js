import { useState } from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import Post from "./Post";

export default function CommentBox({ comments, post }) {
    const [buttonTitle, setButtonTitle] = useState("init title");

    const commentGroup = comments.map(comment => {
        return (
            <Comment content={comment.content} user={comment.user} />
        );
    });

    function handleClick() {
        setButtonTitle("button tapped!");
    }

    return (
        <div className="commentBox">
            <Post content={post.content} user={post.user} />
            {/* <Comment content={"this is a comment"} user={"from @nobody"} /> */}
            {commentGroup}
            <CreateComment />

            <button onClick={handleClick}>
                {buttonTitle}
            </button>
        </div>
    );
}