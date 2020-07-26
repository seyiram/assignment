import React, { Component } from "react";
import TrainerHelper from "../services/TrainerHelper";

class FormBusinessDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allRegions: [],
    };
    this.fetchAllRegions = this.fetchAllRegions.bind(this);
  }

  componentDidMount() {
    this.fetchAllRegions();
  }

  async fetchAllRegions() {
    try {
      await TrainerHelper.getAllRegions().then((res) => {
        console.log(res);
        this.setState({
          allRegions: res,
        });
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="form-container">
        <h1 className="mb-5 mt-5">Business Details</h1>
        <form>
          <div className="form-group">
            <label htmlFor="business_name">Name of Business</label>
            <input
              type="business_name"
              className="form-control"
              id="business_name"
              placeholder="Name of Business"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="region">Region</label>
              <select
                id="region"
                className="form-control"
                value={values.region}
                onChange={inputChange("region")}
              >
                <option>Choose your region</option>
                {this.state.allRegions.map((region) => (
                  <option key={region.code} value={region.code}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="district">District</label>
              <select
                id="district"
                className="form-control"
                value={values.district}
                onChange={inputChange("district")}
              >
                <option>Choose...</option>
                {values.currentRegionDistricts.map((district) => (
                  <option key={district.code} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="town">Town</label>
              <input
                type="text"
                className="form-control"
                id="town"
                onChange={inputChange("town")}
                value={values.town}
              />
            </div>
          </div>
          <div className="form-group">
            <legend className="col-form-label col-sm-8 pt-0">
              Is your business registered?
            </legend>
            <div className="col-sm-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="registered"
                  id="registered"
                  value={values.registered}
                />
                <label className="form-check-label" htmlFor="registered">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="registered"
                  id="registered"
                  value={values.registered}
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="registration_number">Registration Number</label>
            <input
              type="text"
              className="form-control"
              id="registration_number"
              onChange={inputChange("registration_number")}
              value={values.registration_number}
              placeholder="If you selected Yes, state your registration number"
            />
          </div>

          <div className="form-group row">
            <div className="col-sm-4">Do you have a business TIN Number?</div>
            <div className="col-sm-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="has_tin"
                  value={values.has_tin}
                  onChange={inputChange("has_tin")}
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="has_tin"
                  value={values.has_tin}
                  onChange={inputChange("has_tin")}
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="registration_number">TIN Number</label>
            <input
              type="text"
              className="form-control"
              id="tin_number"
              onChange={inputChange("tin_number")}
              value={values.tin_number}
              placeholder="If you selected Yes, state your TIN number"
            />
          </div>

          <br />

          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary" onClick={this.back}>
                Previous
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary" onClick={this.continue}>
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormBusinessDetails;
