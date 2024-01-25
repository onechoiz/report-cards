import React from 'react'
import styles from '../style/examResults.module.scss'

 const ExamsResultsBox = () => {
  return (
    <div className={styles.container}>
        {/* ExamsResultsBox header*/}
         <div className={styles.header_empty}> </div>
         <div className={styles.header_info}>
         <div className={styles.header_infobox}>End of Term 1 Exam Results  </div>
        <div className={styles.header_infobox}>End of Term 2 Exam Results  </div>

         </div>
      
       

    </div>
  )
}

export default ExamsResultsBox
