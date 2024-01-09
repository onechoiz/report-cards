import React from 'react'
import  styles from "../style/studentBox.module.scss"

const StudentBox = ({studentName,studentEnglishName, pinyinName}) => {
  return (
    <div className={styles.container}>
        
        <div className={styles.infobox}> <p>Name (Chinese): </p><span> {studentName} {" "}  {pinyinName}</span> </div>
        <div className={styles.infobox}><p>Name (English) :</p>  <span>{studentEnglishName}</span> </div>
        {/* <div className={styles.infobox}><p>Teacher : {" "} </p>  <span>{teacherName}</span></div> */}



    </div>
  )
}

export default StudentBox
