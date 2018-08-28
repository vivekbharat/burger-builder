import React from "react";
import classes from "./Toolbar.css";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />

    <Logo height="80%" marginBottom="32px" />
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
