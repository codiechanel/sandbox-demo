import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
class App extends React.Component {
  state = {
    animated: false
  };
  animate() {
    console.log("animate");
    
    this.setState({ animated: true });
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("update");
  }

  onAnimationEnd(event) {
    console.log("e", event.target);
    let div = event.target
    console.log("div.classList",div.style);
    div.classList.remove("animated");
    div.classList.remove("bounce");
  }
  render() {
    // console.log("refs", this.div);
    let child;
    let divClassName = null

    if (this.state.animated) {
      divClassName = "animated bounce"
    }
    

    const count = React.Children.count(this.props.children);
    if (count === 1) {
      child = React.Children.only(this.props.children);
    } else {
      child = this.props.children[0];
    }
    let className = classNames(child.props.className);
    if (this.state.animated) {
      className = classNames(
        child.props.className,
        "animated",
        this.props.variant
      );
    }
    const props = {
      className
    };

    // console.log("this.props", props);
    // const clone = React.cloneElement(child, props);
    return <div className={divClassName} onAnimationEnd={this.onAnimationEnd.bind(this)}>{this.props.children}</div>;
    // return <Child />;
  }
}

App.propTypes = {
  // variant: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["bounce", "Photos"]).isRequired
};

export default App;
