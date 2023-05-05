import { useState } from "react";
function BookCreate({onCreate}){
    const [title,setTitle]=useState('');

    const handleChange=(event)=>{
        setTitle(event.target.value);
        
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return(<div>
            <form onSubmit={handleSubmit}>
                <div class="form-row container">
                    <div class="col-md-4 mb-3">
                    <label for="validationDefault01">Enter Book Name</label>
                    <input type="text" class="form-control" value={title} onChange={handleChange}  />
                    </div>
                    <button class="btn btn-primary" type="submit">Submit form</button>
                 </div>

  
</form>

    </div>)
}
export default BookCreate;