import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import SideBar from "./SideBar";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
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
  const toggleSidebar = () =>{
    setShowSideBar(!showSideBar)
  }

  return (
    <div className={styles.container}>
        
    <header className={styles.header}>
      {/* logo */}
      <div className={styles.logo}>
        <img src={"assets/logo.png"} alt="logo" />
      </div>

      {/* addjust for phones and screens */}

      {/* Hamburger menu for smaller screens */}
      {smallScreens ? (
        <div className={styles.sidenav}>
          <button onClick={toggleSidebar}>
            { <RiMenuFoldFill />  }
          </button>
          {/* Additional menu items for smaller screens */}
            {
            showSideBar && (
              <SideBar onClick={toggleSidebar}/>
            )
          }
          
        </div>
      ) : (
        // big screens
        <div className={styles.nav}>
          <Link className={styles.link} to={"/login"}>
            Login
          </Link>
          <Link className={styles.link} to={"/"}>
            Home
          </Link>
          <Link className={styles.link} to={"/individualReports"}>
            My Reports
          </Link>
        </div>
      )}
    </header>
         
      </div>
  );
};
export default Header;
