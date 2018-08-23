import React from "react";
import classes from "./SideDrawer.css";

import BackDrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const SideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <Logo height="11%" />
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
