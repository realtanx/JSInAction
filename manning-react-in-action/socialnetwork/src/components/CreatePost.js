import { useState } from "react";
import PostModel from "../models/PostModel";

export default function CreatePost({ onPost }) {
    const [content, setContent] = useState("");
    const [isValid, setIsValid] = useState(false);

    function handlePostTextChange(event) {
        const text = event.target.value;
        console.log(text);
        setIsValid(text.length > 0 && text.length <= 280);
        setContent(text);
    }

    function handlePostSubmit() {
        console.log("handlePostSubmit");
        if (!isValid) {
            console.log("Your input is invalid.");
            return;
        }

        const post = new PostModel();
        const time = new Date().getTime();
        post.id = time;
        post.date = time;
        post.content = content;

        console.log("A new post created!");
        console.log(post);

        onPost(post);
    }

    return (
        <div className="createPost">
            Create a post
            <textarea name="" id="postArea" value={content} placeholder="What's on your mind?" onChange={handlePostTextChange}></textarea>
            <button onClick={handlePostSubmit}>Post</button>
        </div>
    );
}