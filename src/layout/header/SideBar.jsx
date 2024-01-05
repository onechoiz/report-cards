import React from 'react'
import styles  from "./header.module.scss"
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


 const SideBar = ({onClick}) => {
  return (
      <div className={styles.sidenav_links} >
            <button  onClick={onClick}> <RiMenuUnfoldFill /> </button>
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
  )
}

export default SideBar
