import React from "react";
import classes from "./SideDrawer.css";

import BackDrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Aux from "../../../hoc/auxl";

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" />
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
