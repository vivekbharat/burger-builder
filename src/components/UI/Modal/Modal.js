import React, { Component } from "react";
import classes from "./Modal.css";

import Aux from "../../../hoc/auxl/auxl";
import BackDrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log("Modal Will Update");
  }

  render() {
    return (
      <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          <div>Burger Checkout</div>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
