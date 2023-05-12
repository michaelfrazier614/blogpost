import { useState } from "react";
function AllUsers({checkUser}){

    const [email,setEmail]=useState('');

    const handleChange=(event)=>{
        setEmail(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        checkUser(email);
        setEmail('');
        
    }
    return(
        <div>

<div className="container">
        <form onSubmit={handleSubmit} >
        <div className="col-md-2">
        <label for="inputEmail4">Email</label>
            <input  type="email" className="form-control col-3" value={email} onChange={handleChange}/>
            <br></br>

            <button  className="btn btn-light" type="submit">Register</button>
            

        </div>
         <br/>   
     
         
        
        </form>
              
    </div>
        </div>
    )
}


export default AllUsers;