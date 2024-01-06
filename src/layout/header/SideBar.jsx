import React from 'react'
import styles  from "./header.module.scss"
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


 const SideBar = ({onClick}) => {
  return (
      <div className={styles.sidenav_links} >
            <button  onClick={onClick}>  <RiMenuUnfoldFill /> </button>
           
            <Link className={styles.link} to={"/"} onClick={onClick}>
              Home
            </Link>
            <Link className={styles.link} to={"/individualReports"} onClick={onClick}>
              My Reports
            </Link>
             <Link className={styles.link} to={"/login"} onClick={onClick}>
              Login
            </Link>
            {/* handle the logout logic */}
             <Link className={styles.link} to={"/login"} onClick={onClick}>
              Login out
            </Link>

        
          </div>
  )
}

export default SideBar
