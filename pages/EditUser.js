import { useState } from "react";

function EditUser({user,onUpdate}){
    const [email,setEmail]=useState(user.email);

    const handleChange=(event)=>{
        setEmail(event.target.value);
        }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onUpdate(user.id,email);

    }


    return(
        <div>
        <form onSubmit={handleSubmit} >
        <div className="col-md-3">
        <label for="inputEmail4">Email</label>
            <input  type="email" className="form-control col-3" value={email} onChange={handleChange} />
            <br></br>
            <button  className="btn btn-light" >Update User</button>
            

        </div>
         <br/>   
     
         
        
        </form>
              
    </div>
    )
}

export default EditUser;