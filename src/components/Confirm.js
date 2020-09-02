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
      additional_support,
    } = this.props.values;

    return (
      <div className="card-container">
        <div className="row">
          <div className="col-md-10 mx-auto mt-5">
            <div className="card">
              <div className="card-header">
                <h5 className="title pt-3 pb-3 text-center">
                  Confirm Your Details
                </h5>
              </div>
              <div className="card-body">
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-user mr-2 my-1"></i>
                    <p className="text-muted">Full name: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{trainer_name}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-venus-mars mr-2 my-1"></i>
                    <p className="text-muted">Gender: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{gender}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-phone mr-2 my-1"></i>
                    <p className="text-muted">Contact: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{telephone}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-envelope mr-2 my-1"></i>
                    <p className="text-muted">Email: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{email}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-map-pin mr-2 my-1"></i>
                    <p className="text-muted">Digital address: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{digital_address}</p>
                  </div>
                </div>
                <hr />
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-people-carry mr-2 my-1"></i>
                    <p className="text-muted">Business name: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{business_name}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-city mr-2 my-1"></i>
                    <p className="text-muted">Region: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{region}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted far fa-building mr-2 my-1"></i>
                    <p className="text-muted">District: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{district}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted far fa-building mr-2 my-1"></i>
                    <p className="text-muted">Town: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{town}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-certificate mr-2 my-1"></i>
                    <p className="text-muted">Is your business registered? </p>
                  </div>
                  <div className="col-md-4">
                    <p>{registered}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-certificate mr-2 my-1"></i>
                    <p className="text-muted">Business registration number:</p>
                  </div>
                  <div className="col-md-4">
                    <p>{registration_number}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-spinner   mr-2 my-1"></i>
                    <p className="text-muted">Do you have a business TIN? </p>
                  </div>
                  <div className="col-md-4">
                    <p>{has_tin}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-network-wired   mr-2 my-1"></i>
                    <p className="text-muted">Your business TIN: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{tin_number}</p>
                  </div>
                </div>
                <hr />
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-spinner   mr-2 my-1"></i>
                    <p className="text-muted">
                      Are you a member of a trade association?{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>{association_member}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-certificate mr-2 my-1"></i>
                    <p className="text-muted">
                      Do you have NVTI certification?{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>{nvti_cert}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fa fa-info mr-2"></i>
                    <p className="text-muted">
                      Have you received any support from NBSSI?{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>{rcvd_nbssi_support}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fas fa-hands-helping mr-2 my-1"></i>
                    <p className="text-muted">
                      Would you want to receive support?{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>{want_nbssi_support}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fas fa-hands-helping mr-2 my-1"></i>
                    <p className="text-muted">Support requested:</p>
                  </div>
                  <div className="col-md-4">
                    <p>{support_description}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fas fa-stopwatch mr-2 my-1"></i>
                    <p className="text-muted">Years as a skilled craftsman: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{years_practicing}</p>
                  </div>
                </div>
                <hr />
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fas fa-question mr-2 my-1"></i>
                    <p className="text-muted">
                      Have you trained apprentices before?{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>{trained_apprentice}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fas fa-question mr-2 my-1"></i>
                    <p className="text-muted">
                      Would you like to train apprentices?{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>{want_train_apprentice}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fas fa-user-friends mr-2 my-1"></i>
                    <p className="text-muted">
                      {" "}
                      Number of apprentices you can you take on:{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>{no_apprentice}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto ">
                  <div className="col-md-6 d-flex">
                    <i className="text-muted fas fa-hands-helping mr-2 my-1"></i>
                    <p className="text-muted">Additional support: </p>
                  </div>
                  <div className="col-md-4">
                    <p>{additional_support}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-auto">
                  <p className="text-muted mt-4">*Ensure all the information you are submitting is accurate</p>
                </div>
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
                    <button className="btn submit-button" onClick={this.submit}>
                      Submit <i className="fa fa-long-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
