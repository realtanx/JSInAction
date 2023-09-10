import Comment from "./Comment";
import UserHeader from "./UserHeader";

export default function Post({ id, content, user }) {

    function loadPosts() {

    }

    return (
        <div className="post">
            <UserHeader />
            /*
            post content
            image
            link
            post action: show comments?
            comments
            */
            <Comment />
        </div>
    );
}