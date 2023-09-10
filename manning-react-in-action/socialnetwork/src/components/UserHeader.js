export default function UserHeader({ user, postEntity }) {
    return (
        <div>
            <h2 className="postAuthor">
                <img src={user.headerUrl} alt="" />
                <span className="authorName">{user.name}</span>
                <span className="postDate">{postEntity.date}</span>
                <div className="postBody">
                    <div className="postText">
                        {postEntity}
                    </div>
                    <div className="postImage">
                        {postEntity.imageUrl}
                    </div>
                    <div className="postLinks">
                        <a href={postEntity.linkUrl}></a>
                    </div>
                </div>
            </h2>
        </div>
    );
}