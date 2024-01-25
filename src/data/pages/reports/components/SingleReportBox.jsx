import React from 'react'
import styles from '../style/singleReportBox.module.scss'

 const SingleReportBox = ({exam, score,max, percentage,key}) => {
  return (
    <div >
        
       
 <div className={styles.container}>
      
      
        
        <div className={styles.infobox}  key={key} >
          
          <h2 className={styles.infobox_item_title} >{exam} </h2>
          <p className={styles.infobox_item}>{score}</p>
          <p className={styles.infobox_item}>{max}</p>
          <p className={styles.infobox_item}>{percentage}</p>
        </div>


    </div>


    </div>
  )
}
export default SingleReportBox