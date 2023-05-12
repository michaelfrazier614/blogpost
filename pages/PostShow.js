import { useState } from "react"
import PostEdit from "./PostEdit"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PostShow({post,onDelete,onEdit}){
  const [show, setShow] = useState(false);

 


  
  const handleDelete=(id)=>{
    onDelete(post.id) 
  }

  const [postEdit,setPostEdit]=useState(false);

  const handleEdit=()=>{
    setPostEdit(!postEdit);
  }

  const handleSubmit=(id,newTitle)=>{
    setPostEdit(false);
    onEdit(id,newTitle);
  }

  let content=<h3>{post.title}</h3>
  if(postEdit){
     content= <PostEdit />
  }

    return <div>
      
        
  <div style={{ margin: 20}}
>
  <div className="container">
  <div className="row">
    <div className="col-4">
    <img  src="https://picsum.photos/seed/picsum/550/300" className="margin-top:10px" alt="Books"/>
    </div>
    <div className="col-8">
      <h3 className="text-primary">{content}</h3>
      <h4 >{post.category}</h4>

      <p>{post.description}</p>
      <button className="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
      {/* <button className="btn btn-outline-danger" onClick={handleEdit}>Edit</button> */}
      <Button  variant="primary" onClick={() => setShow(true)}>Edit</Button>

<Modal show={show} onHide={() => setShow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Pop-up Title</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <PostEdit post={post}  onSubmit={handleSubmit} />
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShow(false)}>
      Close
    </Button>
   
  </Modal.Footer>
</Modal>
  

     


    </div>
  </div>


 


</div>
  </div>
    </div>
}

export default PostShow;