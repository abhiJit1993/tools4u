import React from "react";
import constants from "../constants/constants";
import axios from "axios";

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClickEvent(e) {
    e.preventDefault();
    this.validateLogin();

    console.log("handle request ");
  }
  handleChange({ target }) {
    console.log(target);
    this.setState({
      [target.name]: target.value
    });
  }

  // https://lfm2y.sse.codesandbox.io/user/userDetail
  validateLogin = function() {
    console.log(this.state);
    this.setState({
      username: this.state.username,
      password: this.state.password
    });
    const url = constants.BASE_URL + "/user/login";
    axios
      .get(url, {
        params: { username: this.state.username, password: this.state.password }
      })
      .then(response => response.data)
      .then(data => {
        sessionStorage.setItem("jwtToken", data.token);
        this.props.toggleLogin(true);
        console.log("data---", this.props);
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto outerForm">
            <div className="card card-signin my-5 innerForm">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    Email:
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeHolder="email"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-label-group">
                    Password:
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeHolder="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={e => {
                      this.handleClickEvent(e);
                    }}
                  >
                    Sign in
                  </button>
                  <div className="socialMediaLoginbtn">
                    <button className="btn btn-primary loginBtn loginBtn--facebook">
                      Login with Facebook
                    </button>

                    <button className=" btn btn-danger loginBtn loginBtn--google">
                      Login with Google
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

export default LoginComponent;
