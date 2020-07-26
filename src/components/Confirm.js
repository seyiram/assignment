import React, { Component } from "react";

class Confirm extends Component {
  submit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm();
  };

  back = (e) => {
    this.props.prevStep();
  };

  render() {
    const {
        trainer_name,
        gender,
        telephone,
        email,
        digital_address,
        business_name,
        region,
        district,
        town,
        registered,
        registration_number,
        has_tin,
        tin_number,
        association_member,
        nvti_cert,
        rcvd_nbssi_support,
        want_nbssi_support,
        support_description,
        years_practicing,
        trained_apprentice,
        want_train_apprentice,
        no_apprentice,
        additional_support
    } = this.props.values;

    return (
      <div className="form-container">
        <h1 className="mb-5 mt-5">Confirm</h1>
        <ul className="list-group">
          <li className="list-group-item">Full Name: <b>{trainer_name}</b></li>
          <li className="list-group-item">Gender: <b>{gender}</b></li>
          <li className="list-group-item">Contact: <b>{telephone}</b></li>
          <li className="list-group-item">Email:  <b>{email}</b> </li>
          <li className="list-group-item">
            Digital Address: <b>{digital_address}</b>
          </li>
          <li className="list-group-item">Name of Business: <b>{business_name}</b></li>
          <li className="list-group-item">Region: <b>{region}</b></li>
          <li className="list-group-item">District: <b>{district}</b></li>
          <li className="list-group-item">Town: <b>{town}</b></li>
          <li className="list-group-item">
            Is your business registered?    <b>{registered}</b>
          </li>
          <li className="list-group-item">
            Business Registration Number: <b>{registration_number}</b>
          </li>
          <li className="list-group-item">
            Do you have a business TIN: <b>{has_tin}</b>
          </li>
          <li className="list-group-item">Your business TIN: <b>{tin_number}</b></li>
          <li className="list-group-item">
            Are you a Member of a Trade Association? <b>{association_member}</b>
          </li>
          <li className="list-group-item">NVTI Certification? <b>{nvti_cert}</b></li>
          <li className="list-group-item">
            Received Any Support from NBSSI? <b>{rcvd_nbssi_support}</b>
          </li>
          <li className="list-group-item">
            Would you want to receive support? <b>{want_nbssi_support}</b>
          </li>
          <li className="list-group-item">
            What kind of Support? <b>{support_description}</b>
          </li>
          <li className="list-group-item">
            How many years as a skilled craftsman? <b>{years_practicing}</b>
          </li>
          <li className="list-group-item">
            Have you trained apprentices before? <b>{trained_apprentice}</b>
          </li>
          <li className="list-group-item">
            Would you like to train apprentices? <b>{want_train_apprentice}</b>
          </li>
          <li className="list-group-item">
            How many apprentices can you take on? <b>{no_apprentice}</b>
          </li>
          <li className="list-group-item">
            What additional support would you need? <b>{additional_support}</b>
          </li>
        </ul>
        <div className="row mt-3 mb-5">
            <div className="col-6">
                <button type="button" className="btn btn-primary" onClick={this.back}>Back</button>
            </div>
            <div className="col-6">
            <button type="button" className="btn btn-success" onClick={this.submit}>Submit</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
