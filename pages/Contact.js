import  {Form}  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Contact({onContact}){
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');

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
    onContact(name,email,message);
    setName('');
    setEmail('');
    setMessage('');
    

  }

    
    return(
        <div className="container">
  <div className="row">
    <div className="col-6">
    <form onSubmit={handleSubmit} >
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Name" value={name} onChange={handleChangeName}/>
    </div>
    </div>

    <br></br>
    <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={handleChangeEmail}/>
    </div>
    </div>
    
  <br></br>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={handleMessage}></textarea>
  </div>
  <br></br>
  <button type="submit" className="btn btn-primary">Contact</button>
</form>

    </div>
    <div className="col-6">
      <h3>Talk with our  team
</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ultricies nulla. 
      <br></br> <br></br>Pellentesque ultrices posuere sapien id auctor. Etiam at vehicula ex, sit amet malesuada leo. Duis nec efficitur augue. Aliquam sagittis faucibus est vel blandit.<br></br><br></br> Maecenas sit amet dictum justo, et lobortis nulla. Suspendisse pretium sapien justo, ut lacinia massa volutpat eget.<br></br><br></br> Cras laoreet laoreet metus et placerat.
        In ultrices nunc metus, quis tincidunt arcu mattis quis. 
        ali@gmail.com
      </p>
     
    </div>
  </div>
</div>
        
    )

}

export default Contact;