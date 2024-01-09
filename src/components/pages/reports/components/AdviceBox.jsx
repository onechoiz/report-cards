import React from 'react'
import styles from '../style/adviceBox.module.scss'

 const AdviceBox = ({desc_title, desc}) => {
  return (
       <div className={styles.container}>
        {/* ExamsResultsBox header*/}
         <div className={styles.header_descrip}>{desc_title}</div>
         <div className={styles.header_info}>
         {desc} </div>
    
         </div>
      

  )
}

export default AdviceBox