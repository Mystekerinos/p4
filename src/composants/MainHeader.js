import classes from "./MainHeader.module.css";
import React from "react";
import "./MainHeader.module.css";

import SearchBarItemCity from "./SearchBarItemCity";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <SearchBarItemCity />
    </header>
  );
};

export default MainHeader;
