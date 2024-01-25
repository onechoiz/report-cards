import React from 'react'
import styles  from '../style/teacherRemarks.module.scss';

export const TeacherRmarks = ({teacherRmarks}) => {
  return (
    <div className={styles.container} >
        
   
    <h2 className={styles.title}>Teacher Remarks</h2>
    <div className={styles.remarks}>{teacherRmarks}</div>

     </div>
  )
}
