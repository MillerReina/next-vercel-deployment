import React from "react";
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

/* Los componentes no requieren exportacion por defecto */

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavbarComponent = () => {
  return (
    <nav className={styles["nav-bar"]}>
      {menuItems.map((menuOption) => (
        <ActiveLink
          text={menuOption.text}
          route={menuOption.href}
          key={menuOption.text}
        ></ActiveLink>
      ))}
    </nav>
  );
};
