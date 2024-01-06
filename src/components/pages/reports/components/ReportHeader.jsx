import React from 'react'
import styles  from "../style/reportHeader.module.scss"

 const ReportHeader = ({semester = "1", academicYear= "2023-2034"}) => {
  return (
    <div className={styles.pdf_header}>
            <div  className={styles.logo} >
               <img src={"assets/logoIEP.png"} />
            </div>
           
            <div className={styles.title}>
              <h2>Student Report Card</h2>
              <h3>
                INTERNATIONAL ENGLISH PROGRAMME 
  
              </h3>
              <p>Be Bilingual For Your Future
                Success</p>
                <p>Academic Year : {academicYear}</p>
                <p>Semester:  {semester}</p>
            </div>
          </div>
  )
}

export default ReportHeader