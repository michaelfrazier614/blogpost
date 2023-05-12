import { useState } from "react";
import AllPosts from "./AllPosts";
 
function AddPost({onCreate}){

    const [title,setTitle]=useState('');
    const [category, setCategory]=useState('');
    const [description, setDescription]=useState('');
   
    const handleChange=(event)=>{
        setTitle(event.target.value);
    }

    const categoryChange=(event)=>{
        setCategory(event.target.value);

    }       
    const descriptionChange=(event)=>{
        setDescription(event.target.value);
   }


    const handleSubmit=(event)=>{
        event.preventDefault();  
        onCreate(title,category,description);      
        setTitle('');
        setCategory('');
        setDescription('');

    

    }
   
    return(
    <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="col-md-6">
        <label for="inputEmail4">Title</label>
            <input  type="text" className="form-control col-6" value={title} onChange={handleChange}/>
            <br></br>
            <label for="inputEmail4">Category</label>
            {/* <input  type="text" className="form-control col-6" value={category} onChange={categoryChange}/> */}
            <select class="form-select" aria-label="Default select example" value={category} onChange={categoryChange}> 
                <option selected>Select Category</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Technology">Technology</option>
            </select>
            
            <br></br>
            <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={descriptionChange} ></textarea>
        </div>
        <br></br>
            <button  className="btn btn-light" type="submit">Publish</button>
             

        </div>
         <br/>
         
     
         
        
        </form>
              
    </div>
    )
}

export default AddPost;