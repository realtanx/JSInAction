export default function Comment({ content, user }) {
    return (
        <div className="comment">
            <h2 className="commentAuthor">
                {user}
                <span className="commentContent">{content}</span>
            </h2>
        </div>
    );
}