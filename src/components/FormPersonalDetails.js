import React, { Component } from "react";
import TrainerHelper from "../services/TrainerHelper";

class FormPersonalDetails extends Component {
  constructor(props) {
    super(props)
    this.state= {
      genders: []
    }
    this.fetchAllGenders = this.fetchAllGenders.bind(this);
  }
  
  componentDidMount(){
    this.fetchAllGenders();
  }

  async fetchAllGenders(){
    try{
      await TrainerHelper.getAllGender()
      .then(res=>{
        console.log(res);
      })
    }catch{

    }
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="form-container">
        <h1 className="mb-5 mt-5">Personal Details</h1>
        <form>
          <div className="form-group">
            <label for="trainer_name">Name</label>
            <input
              type="trainer_name"
              className="form-control"
              id="trainer_name"
              placeholder="Full Name"
              required/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="telephone">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="telephone"
                placeholder="Telephone Number"
                onChange={inputChange("telephone")}
                value={values.telephone}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label for="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email Address"
                onChange={inputChange("email")}
                value={values.email}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label for="digital_address">Digital Address</label>
              <input
                type="text"
                className="form-control"
                id="digital_address"
                onChange={inputChange("digital_address")}
                value={values.digital_address}
                required
              />
            </div>
            <div className="form-group col-md-4">
              <label for="gender">Gender</label>
              <select id="gender" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <br />
          <div className="text-right">
            <button className="btn btn-primary" onClick={this.continue}>
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormPersonalDetails;
