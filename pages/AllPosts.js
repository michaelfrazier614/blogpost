import PostShow from "./PostShow";

function AllPosts({posts,onDelete,onEdit}){
   
    const myRenderPosts=posts.map((post)=>{
        return <PostShow key={post.id} post={post} onDelete={onDelete} onEdit={onEdit} />
    })

    return(
        <div>{myRenderPosts}</div>
    )
}

export default AllPosts;