import React, { Component } from "react";

class Success extends Component {
  render() {
    return (
      <div className="card-container">
       <div className="row">
           <div className="col-md-8 mx-auto mt-5">
               <div className="card">
                   <div className="card-header">
                       <h5 className="title text-center pt-3 pb-3">Thank you!</h5>
                   </div>
                   <div className="card-body">
                   <i class="far fa-check-circle fa-7x d-flex justify-content-center text-muted submit-icon"></i>
                   <p className="mt-5 mb-5 text-center">Your information was submitted successfully.</p>
                   </div>
               </div>
           </div>
       </div>
      </div>
    );
  }
}

export default Success;
