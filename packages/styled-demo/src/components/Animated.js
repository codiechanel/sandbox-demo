import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
class App extends React.Component {
  state = {
    animated: false
  };
  animate() {
    console.log("animate", this.root);
    this.restart(this.root)
  }
  restart(elem) {
    console.log('restart')
    if (!this.animating) {
      this.animating = true
      var me = elem;
      me.className = `animated ${this.props.variant}`;
      me.style.webkitAnimation = "none";
      setTimeout(function() {
        me.style.webkitAnimation = "";
      }, 10);
    }
    

  }
  componentWillUpdate(nextProps, nextState) {
    console.log("update");
  }

  // onAnimationEnd(event) {
  //   console.log("e", event.target);
  //   let div = event.target;
  //   console.log("div.classList", div.style);
  //   div.classList.remove("animated");
  //   div.classList.remove("bounce");
  // }

  render() {
    let onClick = null;
    let onMouseEnter = null;
    const mouseHandler = e => {
      if (!this.mouseInside) {
        this.restart(e.currentTarget)
        this.mouseInside = true;
      }
    };
    const onClickHandler = e => {
      // e.stopPropagation()
      // e.preventDefault()
      /**
       * e.target can refer  to the child..
       * because its clickable as well
       * so we use currenttarget
       */
      // var me = e.target;
      this.restart(e.currentTarget)
    };
    let divClassName = `animated ${this.props.variant}`;

    if (this.props.event === "onClick") {
      divClassName = "";
      onClick = onClickHandler;
    } else if (this.props.event === "onMouseEnter") {
      divClassName = "";
      onMouseEnter = mouseHandler;
    }

    return (
      <div
        ref={c => (this.root = c)}
        onAnimationEnd={() => this.animating = false}
        style={{
          backgroundColor: "orange",
          margin: 20,
          // animationDuration: "3s"
        }}
        className={divClassName}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseOut={() => (this.mouseInside = false)}
      >
        {this.props.children}
      </div>
    );
    // return <Child />;
  }
}

App.propTypes = {
  // variant: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["bounce", "lightSpeedIn", "zoomIn"]).isRequired,
  event: PropTypes.oneOf(["onEnter", "onClick", "onMouseEnter"])
};

export default App;
