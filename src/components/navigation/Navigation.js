import React from "react";
import NavigationItem from "./navigationItem/NavigationItem";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.nav}>
      <NavigationItem link="/" exact>
        TITULINIS
      </NavigationItem>
      <NavigationItem link="/media-posts">GALERIJA</NavigationItem>
      <NavigationItem link="/articles">STRAIPSNIAI</NavigationItem>
    </ul>
  );
};

export default Navigation;
