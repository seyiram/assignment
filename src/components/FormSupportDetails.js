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
        <form action="">
          <div class="form-group row">
            <div class="col-sm-4">
              Are you a member of of a trade Association in your locality?
            </div>
            <div class="col-sm-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="nvti_cert"
                  value={values.association_member}
                  onChange={inputChange("association_member")}
                />
                <label class="form-check-label" for="gridCheck1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="association_member"
                  value={values.association_member}
                  onChange={inputChange("association_member")}
                />
                <label class="form-check-label" for="gridCheck1">
                  No
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4">Do you have NVTI certification?</div>
            <div class="col-sm-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="nvti_cert"
                  value={values.nvti_cert}
                  onChange={inputChange("nvti_cert")}
                />
                <label class="form-check-label" for="nvti_cert">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="nvti_cert"
                  value={values.nvti_cert}
                  onChange={inputChange("nvti_cert")}
                />
                <label class="form-check-label" for="nvti_cert">
                  No
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4">
              Have you received any support from NBSSI?
            </div>
            <div class="col-sm-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="rcvd_nbssi_support"
                  value={values.rcvd_nbssi_support}
                  onChange={inputChange("rcvd_nbssi_support")}
                />
                <label class="form-check-label" for="rcvd_nbssi_support">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="rcvd_nbssi_support"
                  value={values.rcvd_nbssi_support}
                  onChange={inputChange("rcvd_nbssi_support")}
                />
                <label class="form-check-label" for="rcvd_nbssi_support">
                  No
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4">
              If no, would you want to receive support from NBSSI?
            </div>
            <div class="col-sm-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="want_nbssi_support"
                  value={values.want_nbssi_support}
                  onChange={inputChange("want_nbssi_support")}
                />
                <label class="form-check-label" for="want_nbssi_support">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="want_nbssi_support"
                  value={values.want_nbssi_support}
                  onChange={inputChange("want_nbssi_support")}
                />
                <label class="form-check-label" for="want_nbssi_support">
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
            <label for="business_name">How many years have you been a skilled craftsman?</label>
            <input
              type="text"
              className="form-control"
              id="years_practicing"
              placeholder="How many years?"
              value={values.years_practicing}
              onChange={inputChange("years_practicing")}
            />
            </div>
            <div class="form-group row">
            <div class="col-sm-4">
              Have you trained apprentices before?
            </div>
            <div class="col-sm-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="trained_apprentice"
                  value={values.trained_apprentice}
                  onChange={inputChange("trained_apprentice")}
                />
                <label class="form-check-label" for="trained_apprentice">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="trained_apprentice"
                  value={values.trained_apprentice}
                  onChange={inputChange("trained_apprentice")}
                />
                <label class="form-check-label" for="trained_apprentice">
                  No
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4">
              If no, would you like to train an apprentice?
            </div>
            <div class="col-sm-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="no_apprentices"
                  value={values.no_apprentices}
                  onChange={inputChange("no_apprentices")}
                />
                <label class="form-check-label" for="no_apprentices">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="no_apprentices"
                  value={values.no_apprentices}
                  onChange={inputChange("no_apprentices")}
                />
                <label class="form-check-label" for="no_apprentices">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="business_name">How many apprentices can you take on at a time?</label>
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
              What additional support would would you need from NBSSI to be able to train apprentices?
            </label>
            <textarea
              class="form-control"
              id="additional_support"
              rows="3"
              value={values.additional_support}
              onChange={inputChange("additional_support")}
            />
          </div>
          <br/>
          <div className="row">
              <div className="col-sm-6">
                <button className="btn btn-primary" onClick={this.back}>
                    Previous
                </button>
              </div>
              <div className="col-sm-6">
                <button className="btn btn-primary text-right" onClick={this.continue}>Continue</button>
              </div>
          </div>
        </form>
        <br/>
      </div>
    );
  }
}

export default FormSupportDetails;
