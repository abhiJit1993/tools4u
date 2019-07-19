import React from "react";
import LoginComponent from "./LoginComponent";

class MainScrean extends React.Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: true
    };
    this.toggleLoginForm = this.toggleLoginForm.bind(this);
  }
  toggleLoginForm(loggedIn) {
    console.log("this.state.showLoginForm", this.state.showLoginForm, loggedIn);
    this.setState({ showLoginForm: false });
    this.props.toggleLoginForm(loggedIn);
  }
  render() {
    console.log("this.prop====", this.props);
    return (
      <div className="mainscrean">
        {this.props.showLoginForm ? (
          <LoginComponent toggleLogin={this.toggleLoginForm.bind(this)} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default MainScrean;
