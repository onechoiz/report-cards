import React from 'react'
import styles from "../style/reportFooter.module.scss"

 const ReportFooter = () => {
  return (
    <div className={styles.conatiner}>
        <div className={styles.box}> <p>The <span>I</span>NTERNATIONAL <span>E</span>NGLISH <span>P</span>ROGRAMME is a programme of</p> </div>
        
        <div className={styles.box} style={{display: "flex"}}>
        <a href="https://www.cwincorp.com/" target="_blank" rel="noopener noreferrer"> C Win Corporation</a>
        <img src={"/assets/footerLogo.png"} alt="" />
        </div>
        
    </div>
  )
}

export default ReportFooter
