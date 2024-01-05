import React from 'react'
import styles from "../style/singleExamCard.module.scss"
import Devider from '../../../../layout/devider/Devider'

 const SingleExamCard = ({examType= "listening", examTypeScore, examTypeScoreMax, rank, showRank}) => {
  return (
    <div className={styles.container}>
       
     <h2>{examType.toUpperCase()}</h2>
     <Devider deverdierClassName={styles.devider}/>
     <p>score:  <span className={styles.score}>{examTypeScore}</span> </p>
     {showRank && 
     <p className={styles.ranking}>Ranking N: <span>{rank}</span>  in class</p>

      }
     <p className={styles.max_score}>out of : {examTypeScoreMax}</p>

    </div>
  )
}

export default SingleExamCard