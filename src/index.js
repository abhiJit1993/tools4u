import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginComponent from "./components/LoginComponent";
import Sidebar from "./components/Sidebar";
import MainScrean from "./components/MainScrean";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      showLoginForm: false
    };
  }

  render() {
    console.log("In index ----", this.state, this.props);

    this.toggleLogin = function(loggedIn) {
      console.log("toggled!!!!!!!", this.state, loggedIn);
      this.setState({
        isLoggedIn: loggedIn ? loggedIn : false,
        showLoginForm: !this.state.showLoginForm
      });
      console.log("togg------", this.state);
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    return (
      <div>
        <div>
          <div className="App">
            <Header
              onLoginClick={this.toggleLogin}
              loggedIn={this.state.isLoggedIn}
              showLoginForm={this.state.showLoginForm}
            />

            <MainScrean
              toggleLoginForm={this.toggleLogin.bind(this)}
              showLoginForm={this.state.showLoginForm}
              isLoggedIn={this.state.isLoggedIn}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
