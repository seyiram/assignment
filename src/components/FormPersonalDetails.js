import React, { Component } from "react";
import TrainerHelper from "../services/TrainerHelper";
import CryptoJSHelper from "../services/CryptoJSHelper";
import "./FormPersonalDetails.css";

class FormPersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
    };
    this.fetchAllGenders = this.fetchAllGenders.bind(this);
  }

  componentDidMount() {
    this.fetchAllGenders();
  }

  async fetchAllGenders() {
    try {
      await TrainerHelper.getAllGender().then((res) => {
        this.setState({
          genders: res,
        });
        CryptoJSHelper.encrypt(res);
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="card-container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-5">
            <div className="card">
              <div className="card-header">
                <h5 className="title pt-3 pb-3 text-center">Personal Details</h5>
               
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="pr-1 col-md-6">
                      <div className="form-group">
                        <label htmlFor="trainer_name">Name</label>
                        <input
                          type="trainer_name"
                          className="form-control"
                          id="trainer_name"
                          placeholder="Full name"
                          value={values.trainer_name}
                          onChange={inputChange("trainer_name")}
                          required
                        />
                      </div>
                    </div>
                    <div className="pr-1 col-md-5">
                      <div className="form-group">
                        <label htmlFor="telephone">Contact Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="telephone"
                          placeholder="Telephone number"
                          onChange={inputChange("telephone")}
                          value={values.telephone}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="pr-1 col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email address"
                        onChange={inputChange("email")}
                        value={values.email}
                        required
                      />
                    </div>
                    <div className="pr-1 col-md-5">
                      <label htmlFor="digital_address">Digital address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="digital_address"
                        onChange={inputChange("digital_address")}
                        value={values.digital_address}
                        required
                        placeholder="Digital address"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="pr-1 col-md-5">
                      <label htmlFor="gender">Gender</label>
                      <select
                        id="gender"
                        className="form-control"
                        value={values.gender}
                        onChange={inputChange("gender")}
                      >
                        <option>Select your gender</option>
                        {this.state.genders.map((gender) => (
                          <option key={gender.id} value={gender.name}>
                            {gender.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="col-md-12 text-center pt-4 pb-2">
                    <button
                      className="btn btn-rounded skew-forward"
                      onClick={this.continue}
                    >
                      Next <i className="fa fa-long-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPersonalDetails;
