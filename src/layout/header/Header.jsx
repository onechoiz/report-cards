import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const smallScreens = windowWidth <= 768;

  return (
    <header className={styles.container}>
        {/* logo */}
      <div className={styles.logo}>
        <img src={"assets/logo.png"} alt="logo"  />
      </div>

      {/* addjust for phones and screens */}

        {/* Hamburger menu for smaller screens */}
        {smallScreens ? (
          <div className={styles.nav}>
            <button>☰</button>
            {/* Additional menu items for smaller screens */}
            <Link className={styles.link} to={"/login"}>
              Login
            </Link>
            <Link className={styles.link} to={"/"}>
              Home
            </Link>
            <Link className={styles.link} to={"/individualReport"}>
              My Reports
            </Link>
            
          </div>
        ) : (
          <div className={styles.nav}>
            <Link className={styles.link} to={"/login"}>
              Login
            </Link>
            <Link className={styles.link} to={"/"}>
              Home
            </Link>
            <Link className={styles.link} to={"/individualReport"}>
              My Reports
            </Link>
          </div>
        )}

    </header>
  );
};
export default Header;
