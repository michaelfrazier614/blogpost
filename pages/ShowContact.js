import { useState } from "react";
import EditContact from "./EditContact";
function ShowContact({contact,onDelete,onEdit}){

    const [contactedit, setContactEdit]=useState(false);

const handleDelete=(id)=>{
    onDelete(contact.id);
}
const handleEdit=(id)=>{
    setContactEdit(!contactedit);
}

const handleSubmit=(id,name,email,message)=>{
    setContactEdit(false);
    onEdit(id,name,email,message);
}

let content=<p>{contact.name}</p>
if(contactedit){
    content= <EditContact contact={contact} onSubmit={handleSubmit}/>
}

    return (<tr>
        <th scope="row">{contact.id}</th>
        <td>{content}</td>
        <td>{contact.email}</td>
        <td>{contact.message}</td>
        <td style={{ display: 'flex', justifyContent: 'space-around' }}>

        <button class="btn btn-outline-secondary" onClick={handleEdit} >Edit</button> 
        <button class="btn btn-outline-danger"  onClick={handleDelete}>Delete</button></td>
        


      </tr>

     )
}

export default ShowContact;