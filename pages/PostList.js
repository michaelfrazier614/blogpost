import PostShow from "./PostShow";
function PostList({posts}){
    const renderPosts=posts.map((post)=>{
        return <PostShow key={post.id} post={post}/>

    });

    return(<div>
        {renderPosts}
    </div>)
}
export default PostList