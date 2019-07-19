import React from "react";
// import Button from "./Button";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Tools Worth Needed",
      isLoggedIn: false
    };
  }

  render() {
    console.log("in header-", this.state, this.props);
    let SignUpbtnStyle = {
      marginLeft: "330px"
    };
    let SignInbtnStyle = {
      marginLeft: "9px"
    };
    if (this.state.isLoggedIn) {
      SignInbtnStyle.marginLeft = " 1240px";
      SignInbtnStyle.marginTop = " -66px";
      SignInbtnStyle.color = "#fff";
      SignInbtnStyle.backgroundColor = "black";
      SignInbtnStyle.borderColor = "beige";
    }
    if (!this.props.loggedIn) {
      console.log("in heade333333r-", this.state, this.props);
      return (
    
        <div>
          <header className="headerClass " />
          <h2>
            <i className="heading">
              <kbd>{this.state.title} </kbd>
              {!this.props.isLoggedIn ? (
                <button
                  style={SignUpbtnStyle}
                  type="button"
                  className="btn btn-danger"
                >
                  Sign Up
                </button>
              ) : (
                <div> </div>
              )}
              {this.props.loggedIn !== true ? (
                <button
                  style={SignInbtnStyle}
                  type="button"
                  className="btn btn-danger"
                  onClick={this.props.onLoginClick}
                >
                  Sign In
                </button>
              ) : (
               
                 <button
                    style={SignInbtnStyle}
                    type="button"
                    className="btn btn-danger disabled"
                  >
                    Welcome
                  </button>
              )}
            </i>
          </h2>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Header;
