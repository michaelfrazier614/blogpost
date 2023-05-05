import { useState } from "react";
import AllUsers from "./AllUsers";

function Users(){
    const [users,setUsers]=useState([]);

    const createUsers=(username)=>{

        setUsers('The new user is : ', username)
    }
   

   
   return(<div>
    /...
        <AllUsers checkUser={createUsers}/>
    </div>)
}

export default Users;