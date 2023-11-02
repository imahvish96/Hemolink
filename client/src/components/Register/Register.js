import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../globcss/App.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

class EnrollUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        setdata: {},
        alerterror: {},
      },
      validated: false,
    };
    this.textInput = React.createRef();
  }

  validAlerts = (e) => {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    let { name, value } = e.target;
    const alertError = {};
    switch (name) {
      case "usertype":
        alertError[name] =
          value === "" || value === undefined || value === null
            ? "select a User Type"
            : "";
        break;
      case "name":
        alertError[name] = value <= 0 ? "Enter Your Full Name" : "";
        break;
      case "bloodgroup":
        alertError[name] = value === "" ? "Select a BloodGroup" : "";
        break;
      case "email":
        alertError[name] = emailRegex.test(value)
          ? ""
          : "Write a Valid Email Address";
        break;
      case "mobile":
        alertError[name] =
          value.length === 10 ? "" : "Enter a Vaild Mobile Number";
        break;
      case "age":
        alertError[name] =
          value > 60 || value < 18 ? "You Are Between 18-60 Years Old" : "";
        break;
      case "report":
        let calDay = this.reportDay(value);
        alertError[name] =
          calDay <= 14
            ? "Donate only 14 days of a COVID-19 positive report if the person is asymptomatic"
            : "";
        break;
      case "area":
        alertError[name] =
          value.length <= 0 ? "Enter Area Name / City Name" : "";
        break;
      case "pincode":
        alertError[name] = value.length <= 0 ? "Enter a valid Pin Code" : "";
        break;
      default:
    }

    this.setState({
      data: {
        setdata: {
          ...this.state.data.setdata,
          [e.target.name]: e.target.value,
        },
        alerterror: {
          ...this.state.data.alerterror,
          [name]: alertError[name],
        },
      },
    });
  };

  reportDay = (reportdate) => {
    const date = new Date();
    let currentDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    const testDate = new Date(reportdate);
    const todayDate = new Date(currentDate);
    let diffrenceInms = todayDate.getTime() - testDate.getTime();
    const diffrenceInDay = Math.round(diffrenceInms / (1000 * 3600 * 24));
    return diffrenceInDay;
  };

  submitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      let { setdata, alerterror } = this.state.data;
      let dataPromise = new Promise((resolve, reject) => {
        for (let validalert of Object.values(alerterror)) {
          console.log(validalert.length);
          if (validalert.length < 1) {
            resolve();
          } else {
            reject();
          }
        }
      });

      dataPromise
        .then(() => {
          axios
            .post("http://localhost:5000/register", setdata)
            .then((res) => {
              let msg = res.data.success;
              alert(msg);
              console.log(msg);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch(() => {
          console.log("Ooops, Somthing wasn't right Please file all fields.");
        });
    }

    this.setState({ validated: true });
  };

  render() {
    let { setdata, alerterror } = this.state.data;
    return (
      <>
        <div className="d-flex">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-12 rounded bg-bright  mb-4 pb-4">
                <div className="mb-4 mt-3">

                
                <h2 className="f-color  text-center text-uppercase">
                  {setdata.usertype === this.props.usertype
                    ? "I want to donate plasma"
                    : setdata.usertype === "request plasma"
                    ? "I am searching for Plasma donor"
                    : "Select User Type"}
                </h2>
                </div>
                <Form
                  action=""
                  noValidate
                  validated={this.state.validated}
                  onSubmit={this.validAlerts}
                >
                <Row>
                  <Form.Group as={Col} md="6">
                    <Form.Label className="f-color fw-600">
                      User Type
                    </Form.Label>
                    <Form.Control
                      as="select"
                      ref={this.textInput}
                      onChange={this.validAlerts}
                      name="usertype"
                      defaultValue=""
                      className={
                        alerterror.usertype
                          ? alerterror.usertype.length > 0
                            ? "brdAlert"
                            : ""
                          : ""
                      }
                      required
                    >
                      <option selected value="">
                        Select User Type
                      </option>
                      <option value="donate plasma">Donate</option>
                      <option value="request plasma">Request</option>
                    </Form.Control>
                    {alerterror.usertype !== undefined ? (
                      alerterror.usertype.length > 0 ? (
                        <small className="f-alert text-capitalize">
                          {alerterror.usertype}
                        </small>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <Form.Label className="f-color fw-600">
                      Full Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Your Full Name"
                      name="name"
                      value={setdata.name || ""}
                      className={
                        alerterror.name !== undefined &&
                        alerterror.name.length > 0
                          ? "brdAlert"
                          : ""
                      }
                      onChange={this.validAlerts}
                      required
                    />

                    {alerterror.name !== undefined ? (
                      alerterror.name.length > 0 ? (
                        <small className="f-alert">{alerterror.name}</small>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Form.Group>


                  <Form.Group as={Col} md="6">
                    <Form.Label className="f-color fw-600">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      className={
                        alerterror.email !== undefined
                          ? alerterror.email.length > 0
                            ? "brdAlert"
                            : ""
                          : ""
                      }
                      onChange={this.validAlerts}
                      required
                    />
                    {alerterror.email !== undefined ? (
                      alerterror.email.length > 0 ? (
                        <small className="f-alert">{alerterror.email}</small>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <Form.Label className="f-color fw-600">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Your Mobile"
                      value={setdata.mobile || ""}
                      className={
                        alerterror.mobile !== undefined
                          ? alerterror.mobile.length > 0
                            ? "brdAlert"
                            : ""
                          : ""
                      }
                      name="mobile"
                      onChange={this.validAlerts}
                      required
                    />

                    {alerterror.mobile !== undefined ? (
                      alerterror.mobile.length > 0 ? (
                        <small className="f-alert">{alerterror.mobile}</small>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  <Form.Group as={Col} md="3">
                    <Form.Label className="f-color fw-600">
                      Blood Group
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="bloodgroup"
                      className={
                        alerterror.bloodgroup !== undefined
                          ? alerterror.bloodgroup.length > 0
                            ? "brdAlert"
                            : ""
                          : ""
                      }
                      onChange={this.validAlerts}
                      defaultValue=""
                      required
                    >
                      <option selected value="">
                        Select Blood Group
                      </option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </Form.Control>
                    {alerterror.bloodgroup !== undefined ? (
                      alerterror.bloodgroup.length > 0 ? (
                        <small className="f-alert">
                          {alerterror.bloodgroup}
                        </small>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  {this.state.usertype === this.props.userType ? (
                    <Form.Group as={Col} md="3">
                      <Form.Label className="f-color fw-600">Age</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your Age"
                        name="age"
                        value={setdata.age || ""}
                        className={
                          alerterror.age !== undefined
                            ? alerterror.age.length > 0
                              ? "brdAlert"
                              : ""
                            : ""
                        }
                        maxlength="2"
                        size="2"
                        onChange={this.validAlerts}
                        required
                      />
                      {alerterror.age !== undefined ? (
                        alerterror.age.length > 0 ? (
                          <small className="f-alert">{alerterror.age}</small>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  ) : (
                    ""
                  )}
                  <Form.Group as={Col} md="3">
                    <Form.Label className="f-color fw-600">
                      City / Area
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your City"
                      name="area"
                      value={setdata.area || ""}
                      className={
                        alerterror.area !== undefined
                          ? alerterror.area.length > 0
                            ? "brdAlert"
                            : ""
                          : ""
                      }
                      onChange={this.validAlerts}
                      required
                    />
                    {alerterror.area !== undefined ? (
                      alerterror.area.length > 0 ? (
                        <small className="f-alert">{alerterror.area}</small>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label className="f-color fw-600">Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Pincode"
                      name="pincode"
                      maxlength="6"
                      size="6"
                      value={setdata.pincode || ""}
                      className={
                        alerterror.pincode !== undefined
                          ? alerterror.pincode.length > 0
                            ? "brdAlert"
                            : ""
                          : ""
                      }
                      onChange={this.validAlerts}
                      required
                    />
                    {alerterror.pincode !== undefined ? (
                      alerterror.pincode.length > 0 ? (
                        <small className="f-alert">{alerterror.pincode}</small>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Button
                    className="bg-frntdark border-0 mt-4"
                    type="submit"
                    onClick={this.submitForm}
                    block
                  >
                    Submit
                  </Button>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EnrollUser;
