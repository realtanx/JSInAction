
export default function Post({ content, user }) {
    return (
        <div className="post">
            <h2 className="postAuther">
                {user}
                <span className="postBody">{content}</span>
            </h2>
        </div>
    );
}