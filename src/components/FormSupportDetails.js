import React, { Component } from "react";

class FormSupportDetails extends Component {
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
        <h1 className="mb-5 mt-5">Support Details</h1>
        <form>
          <div className="form-group">
            <legend className="col-form-label col-sm-8 pt-0">
              Are you a member of a trade association in your locality?
            </legend>
            <div className="col-sm-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="association_member"
                  id="association_member"
                  value={values.association_member}
                  onChange={inputChange("association_member")}
                />
                <label
                  className="form-check-label"
                  htmlFor="association_member"
                >
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="association_member"
                  id="association_member"
                  value={values.association_member}
                  onChange={inputChange("association_member")}
                />
                <label
                  className="form-check-label"
                  htmlFor="association_member"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <legend className="col-form-label col-sm-8 pt-0">
              Do you have NVTI Certification?
            </legend>
            <div className="col-sm-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="nvti_cert"
                  id="nvti_cert"
                  value={values.nvti_cert}
                  onChange={inputChange("nvti_cert")}
                />
                <label className="form-check-label" htmlFor="nvti_cert">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="nvti_cert"
                  id="nvti_cert"
                  value={values.nvti_cert}
                  onChange={inputChange("nvti_cert")}
                />
                <label className="form-check-label" htmlFor="nvti_cert">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <legend className="col-form-label col-sm-8 pt-0">
              Have you received any support from NBSSI?
            </legend>
            <div className="col-sm-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rcvd_nbssi_support"
                  id="rcvd_nbssi_support"
                  value={values.rcvd_nbssi_support}
                  onChange={inputChange("rcvd_nbssi_support")}
                />
                <label
                  className="form-check-label"
                  htmlFor="rcvd_nbssi_support"
                >
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rcvd_nbssi_support"
                  id="rcvd_nbssi_support"
                  value={values.rcvd_nbssi_support}
                  onChange={inputChange("rcvd_nbssi_support")}
                />
                <label
                  className="form-check-label"
                  htmlFor="rcvd_nbssi_support"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <legend className="col-form-label col-sm-8 pt-0">
              If no, would you want to receive support from NBSSI?
            </legend>
            <div className="col-sm-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="want_nbssi_support"
                  id="want_nbssi_support"
                  value={values.want_nbssi_support}
                  onChange={inputChange("want_nbssi_support")}
                />
                <label
                  className="form-check-label"
                  htmlFor="want_nbssi_support"
                >
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="want_nbssi_support"
                  id="want_nbssi_support"
                  value={values.want_nbssi_support}
                  onChange={inputChange("want_nbssi_support")}
                />
                <label
                  className="form-check-label"
                  htmlFor="want_nbssi_support"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="support_description">
              If yes, what kind of support would you need from NBSSI?
            </label>
            <textarea
              class="form-control"
              id="support_description"
              rows="3"
              value={values.support_description}
              onChange={inputChange("support_description")}
            />
          </div>
          <div className="form-group">
            <label for="business_name">
              How many years have you been a skilled craftsman?
            </label>
            <input
              type="text"
              className="form-control"
              id="years_practicing"
              placeholder="How many years?"
              value={values.years_practicing}
              onChange={inputChange("years_practicing")}
            />
          </div>
          <div className="form-group">
            <legend className="col-form-label col-sm-8 pt-0">
              Have you trained apprentices before?
            </legend>
            <div className="col-sm-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="trained_apprentice"
                  id="trained_apprentice"
                  value={values.trained_apprentice}
                  onChange={inputChange("trained_apprentice")}
                />
                <label
                  className="form-check-label"
                  htmlFor="trained_apprentice"
                >
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="trained_apprentice"
                  id="trained_apprentice"
                  value={values.trained_apprentice}
                  onChange={inputChange("trained_apprentice")}
                />
                <label
                  className="form-check-label"
                  htmlFor="trained_apprentice"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <legend className="col-form-label col-sm-8 pt-0">
              If no, would you like to train apprentices?
            </legend>
            <div className="col-sm-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="no_apprentices"
                  id="no_apprentices"
                  value={values.no_apprentices}
                  onChange={inputChange("no_apprentices")}
                />
                <label className="form-check-label" htmlFor="no_apprentices">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="no_apprentices"
                  id="no_apprentices"
                  value={values.no_apprentices}
                  onChange={inputChange("no_apprentices")}
                />
                <label className="form-check-label" htmlFor="no_apprentices">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="business_name">
              How many apprentices can you take on at a time?
            </label>
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="How many apprentices?"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="additional_support">
              What additional support would would you need from NBSSI to be able
              to train apprentices?
            </label>
            <textarea
              class="form-control"
              id="additional_support"
              rows="3"
              value={values.additional_support}
              onChange={inputChange("additional_support")}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-sm-6">
              <button className="btn btn-primary" onClick={this.back}>
                Previous
              </button>
            </div>
            <div className="col-sm-6">
              <button
                className="btn btn-primary text-right"
                onClick={this.continue}
              >
                Continue
              </button>
            </div>
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default FormSupportDetails;
