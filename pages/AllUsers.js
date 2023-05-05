import { useState } from "react";
function AllUsers({checkUser}){


    return(
        <div>

<div className="container">
        <form >
        <div className="col-md-2">
        <label for="inputEmail4">Email</label>
            <input  type="email" className="form-control col-3" />
            <br></br>
            {/* <input  type="text" className="form-control col-6" /> */}

            
            <button  className="btn btn-light" type="submit">Publish</button>
             

        </div>
         <br/>
         
     
         
        
        </form>
              
    </div>
        </div>
    )
}


export default AllUsers;