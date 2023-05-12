import { useState,useEffect } from "react";
import AllUsers from "./AllUsers";
import Userslist from "./UsersList";
import axios from "axios";
function Users(){
    const [users,setUsers]=useState([]);

    const fetchUsers=async()=>{
        const response=await axios.get('http://localhost:3002/users');
        setUsers(response.data);
    }
    useEffect(()=>  {
        fetchUsers();
    },[])

    const createUsers = async (email) => {    
        const response = await axios.post('http://localhost:3002/users', {
            email
        });
       
        const updatedUsers = [...users,response.data];
        setUsers(updatedUsers);
    };

    const deleteUserById=async(id)=>{

        const response=await axios.delete(`http://localhost:3002/users/${id}`)

        const updateUser=users.filter((user)=>{
            return user.id!==id;
        })
        setUsers(updateUser);
    }

    const editUserById=async (id,newEmail)=>{
        const response=await axios.put(`http://localhost:3002/users/${id}`,{
            email:newEmail
           
        })
        console.log(response);
        const updatedUser=users.map((user)=>{
            if(user.id==id){
                return{...user,...response.data};
            }

            return user;
        })
        setUsers(updatedUser);
    }
    
    return(<div>  
        <AllUsers checkUser={createUsers}/>
        <Userslist users={users} onDelete={deleteUserById} onEdit={editUserById}/>
    </div>)
    
}

export default Users;