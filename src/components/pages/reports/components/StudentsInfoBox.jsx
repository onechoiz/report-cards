import React from 'react'
import  styles from "../style/studentInfoBox.module.scss"

const StudentsInfoBox = ({studentName,studentEnglishName,teacherName, pinyinName}) => {
  return (
    <div className={styles.container}>
        
        <div className={styles.infobox}>Name : <span> {studentName}</span> {" "} <span>{pinyinName}</span></div>
        <div className={styles.infobox}>English Name : <span>{studentEnglishName}</span> </div>
        <div className={styles.infobox}>Teacher : {" "}  <span>{teacherName}</span></div>



    </div>
  )
}

export default StudentsInfoBox
