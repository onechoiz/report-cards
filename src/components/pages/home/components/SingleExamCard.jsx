import React from 'react'
import styles from "../style/singleExamCard.module.scss"
import Devider from '../../../../layout/devider/Devider'

 const SingleExamCard = ({examType= "listening", examTypeScore, examTypeScoreMax}) => {
  return (
    <div className={styles.container}>
       
     <h2>{examType.toUpperCase()}</h2>
     <Devider deverdierClassName={styles.devider}/>
     <p>score:  <span>{examTypeScore}</span> </p>
     <p className={styles.max_score}>total: {examTypeScoreMax}</p>

    </div>
  )
}

export default SingleExamCard