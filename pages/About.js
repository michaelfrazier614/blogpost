import about from "./about.jpg";

 function About() {
  
 return(
  
  <div className="container">
  <div className="row margin-bottom:10px;">
    <div className="col-6">
    <img src={about} alt="About"/>
    </div>
    <div className="col-4 float-left">
      <h3>About Us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ultricies nulla. 
      <br></br> <br></br>Pellentesque ultrices posuere sapien id auctor. Etiam at vehicula ex, sit amet malesuada leo. Duis nec efficitur augue. Aliquam sagittis faucibus est vel blandit.<br></br><br></br> Maecenas sit amet dictum justo, et lobortis nulla. Suspendisse pretium sapien justo, ut lacinia massa volutpat eget.<br></br><br></br> Cras laoreet laoreet metus et placerat.
        In ultrices nunc metus, quis tincidunt arcu mattis quis. 
      </p>
      <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
    </div>
  </div>
</div>

  )
}

export default About;
