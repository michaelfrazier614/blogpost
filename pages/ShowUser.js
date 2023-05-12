import { useState } from "react";
import EditUser from "./EditUser";
function ShowUser({user,onDelete,onEdit}){
  console.log(user);

  const handleDelete=(id)=>{
    onDelete(user.id);
  }

    const [userEdit, setUserEdit]=useState(false);

    const handleEdit=(id)=>{
      setUserEdit(!userEdit);
    }

    const handleUpdate =(id,newEmail)=>{
      setUserEdit(false);
    onEdit(id, newEmail);


    }
  


    // const handleSubmit=(id,newEmail)=>{
    //   setUserEdit(false);
    //   onEdit(id,newEmail)
    // }
    
    let usercontent=<p>{user.email}</p>
    if(userEdit){
      usercontent=<EditUser user={user} onUpdate={handleUpdate} />
    }

    return (
        
             <tr>
      <th scope="row">{user.id}</th>
      <td>{usercontent}</td>
      <td>
        <button type="button" className="btn btn-secondary" onClick={handleEdit}>
          Edit
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>

        
    )
}

export default ShowUser;