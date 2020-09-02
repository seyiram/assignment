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
      <div className="card-container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-5">
            <div className="card">
              <div className="card-header">
                <h5 className="title pt-3 pb-3 text-center">Support Details</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <legend className="col-form-label col-sm-10 pt-0">
                      Are you a member of a trade association in your locality?
                    </legend>
                    <div className="col-sm-4">
                      <div className="row d-flex ml-1">
                        <div className="form-check mr-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="association_member"
                            id="association_member"
                            checked={values.association_member === "yes"}
                            value="yes"
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
                            checked={values.association_member === "no"}
                            value="no"
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
                  </div>
                  <hr />
                  <div className="form-group">
                    <legend className="col-form-label col-md-10 pt-0">
                      Do you have NVTI Certification?
                    </legend>
                    <div className="col-sm-4">
                      <div className="row d-flex ml-1">
                        <div className="form-check mr-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="nvti_cert"
                            id="nvti_cert"
                            checked={values.nvti_cert === "yes"}
                            value="yes"
                            onChange={inputChange("nvti_cert")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="nvti_cert"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="nvti_cert"
                            id="nvti_cert"
                            checked={values.nvti_cert === "no"}
                            value="no"
                            onChange={inputChange("nvti_cert")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="nvti_cert"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <legend className="col-form-label col-sm-8 pt-0">
                      Have you received any support from NBSSI?
                    </legend>
                    <div className="col-sm-4">
                      <div className="row d-flex ml-1">
                        <div className="form-check mr-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="rcvd_nbssi_support"
                            id="rcvd_nbssi_support"
                            checked={values.rcvd_nbssi_support === "yes"}
                            value="yes"
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
                            checked={values.rcvd_nbssi_support === "no"}
                            value="no"
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
                  </div>
                  <hr/>
                  <div className="form-group">
                    <legend className="col-form-label col-md-10 pt-0">
                      If no, would you want to receive support from NBSSI?
                    </legend>
                    <div className="col-sm-4">
                      <div className="row d-flex ml-1">
                      <div className="form-check mr-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="want_nbssi_support"
                          id="want_nbssi_support"
                          checked={values.want_nbssi_support === "yes"}
                          value="yes"
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
                          checked={values.want_nbssi_support === "no"}
                          value="no"
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
                  </div>
                  <hr/>
                  <div className="form-group ml-3">
                    <label htmlFor="support_description">
                      If yes, what kind of support would you need from NBSSI?
                    </label>
                    <textarea
                      className="form-control"
                      id="support_description"
                      rows="3"
                      value={values.support_description}
                      onChange={inputChange("support_description")}
                    />
                  </div>
                  <div className="form-group ml-3">
                    <label htmlFor="business_name">
                      How many years have you been a skilled craftsman?
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="years_practicing"
                      value={values.years_practicing}
                      onChange={inputChange("years_practicing")}
                    />
                  </div>
                  <hr/>
                  <div className="form-group">
                    <legend className="col-form-label col-sm-8 pt-0">
                      Have you trained apprentices before?
                    </legend>
                    <div className="col-sm-4">
                      <div className="row d-flex ml-1">
                      <div className="form-check mr-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="trained_apprentice"
                          id="trained_apprentice"
                          checked={values.trained_apprentice === "yes"}
                          value="yes"
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
                          checked={values.trained_apprentice === "no"}
                          value="no"
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
                  </div>
                  <hr/>
                  <div className="form-group">
                    <legend className="col-form-label col-sm-8 pt-0">
                      If no, would you like to train apprentices?
                    </legend>
                    <div className="col-sm-4">
                      <div className="row d-flex ml-1">
                      <div className="form-check mr-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="want_train_apprentice"
                          id="want_train_apprentice"
                          checked={values.want_train_apprentice === "yes"}
                          value="yes"
                          onChange={inputChange("want_train_apprentice")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="want_train_apprentice"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="want_train_apprentice"
                          id="want_train_apprentice"
                          checked={values.want_train_apprentice === "no"}
                          value="no"
                          onChange={inputChange("want_train_apprentice")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="want_train_apprentice"
                        >
                          No
                        </label>
                      </div>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="form-group ml-3">
                    <label htmlFor="business_name">
                      How many apprentices can you take on at a time?
                    </label>
                    <input
                      type="number"
                      name="no_apprentice"
                      className="form-control"
                      id="no_apprentice"
                      placeholder="How many apprentices?"
                      value={values.no_apprentice}
                      onChange={inputChange("no_apprentice")}
                    />
                  </div>
                  <div className="form-group ml-3">
                    <label htmlFor="additional_support">
                      What additional support would would you need from NBSSI to
                      be able to train apprentices?
                    </label>
                    <textarea
                      className="form-control"
                      id="additional_support"
                      rows="3"
                      value={values.additional_support}
                      onChange={inputChange("additional_support")}
                    />
                  </div>
                  <br />
                  <div className="row text-center mt-2 mb-2">
                    <div className="col-md-6">
                      <button
                        className="btn btn-rounded skew-backward"
                        onClick={this.back}
                      >
                        <i className="fa fa-long-arrow-left"></i> Previous
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        className="btn btn-rounded skew-forward"
                        onClick={this.continue}
                      >
                        Next <i className="fa fa-long-arrow-right"></i>
                      </button>
                    </div>
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

export default FormSupportDetails;
