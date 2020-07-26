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
        no_apprentices,
        additional_support
    } = this.props.values;

    return (
      <div className="form-container">
        <h1 className="mb-5 mt-5">Confirm</h1>
        <ul className="list-group">
          <li className="list-group-item">Full Name: {trainer_name}</li>
          <li className="list-group-item">Gender: {gender}</li>
          <li className="list-group-item">Contact: {telephone}</li>
          <li className="list-group-item">Email: {email} </li>
          <li className="list-group-item">
            Digital Address: {digital_address}
          </li>
          <li className="list-group-item">Name of Business: {business_name}</li>
          <li className="list-group-item">Region: {region}</li>
          <li className="list-group-item">District: {district}</li>
          <li className="list-group-item">Town: {town}</li>
          <li className="list-group-item">
            Is your business registered? {registered}
          </li>
          <li className="list-group-item">
            Business Registration Number: {registration_number}
          </li>
          <li className="list-group-item">
            Do you have a business TIN: {has_tin}
          </li>
          <li className="list-group-item">Your business TIN: {tin_number}</li>
          <li className="list-group-item">
            Member of a Trade Association? {association_member}{" "}
          </li>
          <li className="list-group-item">NVTI Certification? {nvti_cert}</li>
          <li className="list-group-item">
            Received Any Support from NBSSI? {rcvd_nbssi_support}
          </li>
          <li className="list-group-item">
            Would you want to receive support? {want_nbssi_support}
          </li>
          <li className="list-group-item">
            What kind of Support? {support_description}
          </li>
          <li className="list-group-item">
            How many years as a skilled craftsman? {years_practicing}
          </li>
          <li className="list-group-item">
            Have you trained apprentices before? {trained_apprentice}
          </li>
          <li className="list-group-item">
            Would you like to train apprentices? {want_train_apprentice}
          </li>
          <li className="list-group-item">
            How many apprentices can you take on? {no_apprentices}
          </li>
          <li className="list-group-item">
            What additional support would you need? {additional_support}
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
