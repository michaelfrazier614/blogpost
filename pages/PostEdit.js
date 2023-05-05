import { useState } from "react";

function PostEdit({post,onEdit,onSubmit}){
    const [title,setTitle]=useState(post.title);

    const handleChange=(event)=>{
        setTitle(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        // onEdit(post.id,title);
        onSubmit(post.id,title);
    }
    return<div>
        <form onSubmit={handleSubmit}>
            <input className="form-control" type="text"  value={title} onChange={handleChange}/>
            <button  className="btn-primary">Update</button>
        </form>
    </div>
}

export default PostEdit;