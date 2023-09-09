import { useState } from "react";

export default function CreateComment() {
    const [username, setUsername] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setUsername(event.target.value);
        console.log("test");
    }

    return (
        <form action="" className="createComment" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" value={username} />
            <input type="text" placeholder="Thoughts?" />
            <input type="submit" value="POST" />
        </form>
    );
}