import React, { Component } from "react";

class FormBusinessDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }
  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="form-container">
        <h1 className="mb-5 mt-5">Business Details</h1>
        <form>
          <div className="form-group">
            <label for="business_name">Name of Business</label>
            <input
              type="business_name"
              className="form-control"
              id="business_name"
              placeholder="Name of Business"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="region">Region</label>
              <select id="region" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="district">District</label>
              <select id="district" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
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
          <div class="form-group row">
            <div class="col-sm-4">Is your business registered?</div>
            <div class="col-sm-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label class="form-check-label" for="gridCheck1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label class="form-check-label" for="gridCheck1">
                  No
                </label>
              </div>
            </div>
          </div>
            <div className="form-group">
              <label for="registration_number">Registration Number</label>
              <input
                type="text"
                className="form-control"
                id="digital_address"
                onChange={inputChange("digital_address")}
                value={values.registration_number}
                placeholder="If you selected Yes, state your registration number"
              />
            </div>
            
            <div class="form-group row">
            <div class="col-sm-4">Do you have a business TIN Number?</div>
            <div class="col-sm-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="has_tin"
                  value={values.has_tin}
                  onChange={inputChange("has_tin")}
                />
                <label class="form-check-label" for="gridCheck1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="has_tin"
                  value={values.has_tin}
                  onChange={inputChange("has_tin")}
                />
                <label class="form-check-label" for="gridCheck1">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
              <label for="registration_number">TIN Number</label>
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
            <button className="btn btn-primary" onClick={this.back}>Previous</button>
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
