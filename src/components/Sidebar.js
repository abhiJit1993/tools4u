import React from "react";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar">
        Functional Components (stateless) We’ve just covered the bare basics of
        React Component creation process. But there are multiple ways of
        creating components in React. In this section we will explore functional
        components. They are React components created using JavaScript
        functions. While their idea and function (pardon the pun) are similar to
        React Components created using class and extend keywords, they lack one
        little detail. These types of components in React are also called
        stateless functional components. We will get to states elsewhere on this
        site, for now just think of Functional Components as limited in that
        they cannot (or don’t need to) have state.
      </div>
    );
  }
}

export default Sidebar;
