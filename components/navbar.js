import React from 'react';
import { useState,useEffect } from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AddPost from '../pages/AddPost';
import Users from '../pages/Users';
import PostList from '../pages/PostList';
import AllPosts from '../pages/AllPosts';
import Userslist from '../pages/UsersList';
import axios from 'axios';
import AllContacts from '../pages/AllContacts';
export default function Navbar() {

  const [posts,setPosts]=useState([]);
  //show data from database

  const fetchPosts=async ()=>{
     const response= await axios.get('http://localhost:3002/posts');
        setPosts (response.data);
      
  }
  useEffect(()=>{
    fetchPosts();  
  },[]);

  const deletePostById=async(id)=>{
      await axios.delete(`http://localhost:3002/posts/${id}`)
    const updatedPost=posts.filter((post)=>{
      return post.id!==id;

    });
    setPosts(updatedPost);
  }

  const editPostById=async (id,newTitle)=>{
    const response=await axios.put(`http://localhost:3002/posts/${id}`,{
      title:newTitle
    });
    console.log(response)


    const updatedPost=posts.map((post)=>{
      if(post.id===id){
        return {...post,...response.data}
        // return {...post,title:newTitle}
      }
      return post;
    })
    setPosts(updatedPost);
  }

  const createPost=async(title,category,description)=>{

       const response= await  axios.post('http://localhost:3002/posts',{
      title,
      category,
      description
    });
   
   const updatedPost=[...posts,response.data]
   setPosts(updatedPost);
    // posts.push({id:123,title:title,category:category});
   // console.log(posts);
    // setPosts(posts);
  }
 
//Contact

  const [contacts,setContacts]=useState([]);
//create Contact
  const createContact=(name,email,message)=>{
        const updatedContact=[...contacts,{id:Math.floor(Math.random()*1000),name:name,email:email,message:message}]
        setContacts(updatedContact);  

      }

  const deleteConatctbyId=(id)=>{
    const updatedContact=contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContacts(updatedContact);
  }

  const editContactById=(id,newName,newEmail,NewMessage)=>{
    const updatedContact=contacts.map((contact)=>{
      if(contact.id==id){
        return{...contact,name:newName,email:newEmail,message:NewMessage}
      }
      return contact
    })
    setContacts (updatedContact);
  }


  return (
  
    
    <Router>
      {/* <PostList posts={posts}/> */}


<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link  class="block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" to="/">Home</Link>
        </li>
        <li>
          <Link to="/about"   class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to="addpost"  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Post</Link>
        </li>
        <li>
          <Link to="allposts"  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">All Posts</Link>
        </li>
        <li>
          <Link href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
        </li>
        <li>
          <Link to="/contact" href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>

        <li>
          <Link to="/allcontacts" href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">All Contact</Link>
        </li>
        <li>
          <Link to="/users" href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</Link>
        </li>
        <li>
          <Link to="/userslist" href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users Lists</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addpost" element={<AddPost onCreate={createPost}/> } />
          <Route path="/contact" element={<Contact  onContact={createContact} /> } />
          <Route path="/users" element={<Users />} />
          <Route path="/allposts" element={<AllPosts posts={posts} onEdit={editPostById} onDelete={deletePostById}/>} />          
          <Route path="/allcontacts" element={<AllContacts contacts={contacts} onDelete={deleteConatctbyId} onEdit={editContactById} />} />
                

          
          
        </Routes>
        </Router>
        
        
  );
}





