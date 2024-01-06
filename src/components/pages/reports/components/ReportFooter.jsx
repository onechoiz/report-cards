import React from 'react'
import styles from "../style/reportFooter.module.scss"

 const ReportFooter = () => {
  return (
    <div className={styles.conatiner}>
        <div className={styles.box}>The INTERNATIONAL ENGLISH PROGRAMME is a programme of </div>
        
        <div className={styles.box} style={{display: "flex"}}>
        <a href="https://www.cwincorp.com/" target="_blank" rel="noopener noreferrer"> C Win Corporation</a>
        <img src={"/assets/footerLogo.png"} alt="" />
        </div>
        
    </div>
  )
}

export default ReportFooter
