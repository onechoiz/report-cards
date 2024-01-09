import React from 'react'
import styles from '../style/singleexamResults.module.scss'

 const SingleExamsResultsBox = ({score, examType, max}) => {
  return (
    <div className={styles.container}>
        {/* ExamsResultsBox header*/}
         <div className={styles.header_descrip}>{examType}</div>
         <div className={styles.header_info}>
         <div className={styles.header_infobox}>  {score}{" "}/{max} </div>
         <div className={styles.header_infobox}> </div>

         </div>
      
      
        

    </div>
  )
}

export default SingleExamsResultsBox
