import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      company: "SkySoft"
    };
  }
  render() {
    return (
      <div className="footer">
        <footer className="footerClass " />

        <i className="footerText">
          <kbd>powered by {this.state.company}</kbd>
        </i>
      </div>
    );
  }
}

export default Footer;
