import React from 'react'
import styles from "../style/teacherFeedback.module.scss"

const TeacherFeedback = ({feedback}) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.heading} >Teacher Feedback</h2>
        <p className={styles.feedback}>{feedback} </p>
    </div>
  )
}

export default TeacherFeedback