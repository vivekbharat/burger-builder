import React from "react";
import classes from "./Logo.css";

import BurgerLogo from "./burger-logo.png";

const Logo = props => {
  return (
    <div
      className={classes.Logo}
      style={{ height: props.height, marginBottom: props.marginBottom }}
    >
      <img src={BurgerLogo} alt="Burger Logo" />
    </div>
  );
};

export default Logo;
