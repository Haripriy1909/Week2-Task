import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.brand}>Week 2 Practice</span>
      <div className={styles.links}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          Home
        </NavLink>
        <NavLink to="/product" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          Product
        </NavLink>
        <NavLink to="/todo" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          To-Do
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
