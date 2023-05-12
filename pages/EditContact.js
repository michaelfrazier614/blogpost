import { useState } from "react";

function EditContact({contact,onSubmit}){
    
    const [name, setName]=useState(contact.name);

    const [email, setEmail]=useState(contact.email);
    
    const [message,setMessage]=useState(contact.message);

    const handleChangeName=(event)=>{    
        setName(event.target.value);        
    }

    const handleChangeEmail=(event)=>{
        setEmail(event.target.value);

    }

    const handleMessage=(event)=>{
        setMessage(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit(contact.id,name,email,message);
        
    }
    


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control"  value={name} onChange={handleChangeName} />
                <input type="text" className="form-control"  value={email} onChange={handleChangeEmail} />
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={handleMessage}></textarea>

                <button  className="btn-primary">Update</button>
                
            </form>
        </div>
    )
}
export default EditContact;