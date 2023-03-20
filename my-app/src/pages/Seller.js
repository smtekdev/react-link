import React from "react";

function Seller(){
        return(
          <>
            {/*------------------------------- BANNER SECTION STARTS HERE -------------------------------*/}
      {/* Slideshow container */}
      {/* Full-width images with number and caption text */}
      {/* The dots/circles */}
      {/* <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div> */}
      {/* The dots/circles */}
      {/* <div style="text-align:center">
<span class="dot" onclick="currentSlide(1)"></span>
<span class="dot" onclick="currentSlide(2)"></span>
<span class="dot" onclick="currentSlide(3)"></span>
</div> */}
      {/* slider end */}
      {/*------------------------------- BANNER SECTION ENDS HERE -------------------------------*/}
      <div className="container-fluid py-5 mx-auto">
      <button className="check">FOLLOW</button>
      <div className="card py-4 px-4">
        <div className="row justify-content-start px-3">
          <div className="image-bg mr-3">
            <img className="user-img fit-image" src="assets/images/profile2.jpg" style={{width: '12%', height: '24%', position: 'absolute', left: '45%', top: '1%'}} /> 
          </div>
          <div className="text-left">
            <h2 style={{position: 'absolute', left: '41%', top: '25%'}}>Jose Andres G.</h2>
            <h6 style={{position: 'absolute', left: '40%', top: '33%'}}>10 ITEMS - 21 SALE - 8 COMMENTS</h6>
            <span className="fa fa-star active" style={{position: 'absolute', left: '46%', top: '39%'}} />
            <span className="fa fa-star active" style={{position: 'absolute', left: '48%', top: '39%'}} />
            <span className="fa fa-star active" style={{position: 'absolute', left: '50%', top: '39%'}} />
            <span className="fa fa-star active" style={{position: 'absolute', left: '52%', top: '39%'}} />            
            <span className="fa fa-star active" style={{position: 'absolute', left: '54%', top: '39%'}} />            
          </div>            
        </div>
        <div className="line" style={{marginTop: '25%'}} />
        <div className="row d-flex justify-content-between px-3">
          <div className="prod-bg text-center py-1"><img className="prod-pic" src="https://i.imgur.com/6bdzZKE.png" /></div>
          <div className="prod-bg text-center py-1"><img className="prod-pic" src="https://i.imgur.com/CGaJoDY.png" /></div>
          <div className="prod-bg text-center py-1"><img className="prod-pic fat-img" src="https://i.imgur.com/8JVdjVT.png" /></div>
          <div className="prod-bg text-center py-1"><img className="prod-pic" src="https://i.imgur.com/uJGwaIy.png" /></div>
          <div className="more text-center pt-3">
            <h1 className="mb-0 dk-none dk-sm-block"><strong>+6</strong></h1>
            <h5>ITEMS</h5>
          </div>
        </div>
      </div>
    </div>
    {/*------------------------------- FEATURES SECTION START -------------------------------*/}
    {/*------------------------------- FEATURES SECTION END -------------------------------*/}
    </>
        );
    };


export default Seller;