import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.wrapper}>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.active}
      >
        Main
      </NavLink>
      <NavLink
        to="/lorem"
        className={styles.link}
        activeClassName={styles.active}
      >
        Lorem
      </NavLink>
      <NavLink
        to="/ipsum"
        className={styles.link}
        activeClassName={styles.active}
      >
        Ipsum
      </NavLink>
    </nav>
  );
}
