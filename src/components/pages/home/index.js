import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../../App";
import SingleExamCard from "./components/SingleExamCard";
import styles from "./home.module.scss";
import Devider from "../../../layout/devider/Devider";
import TeacherFeedback from "./components/TeacherFeedback";
import studentData from "../../../data/studentData.json";
import IndividualRankingInClass from "./components/IndividualRankingInClass";

const Home = () => {
  const { student } = useContext(StudentContext);
  const [allStudents, setAllStudents] = useState([]);
  const [listeningRanking, setListeningRanking] = useState([]);
  const [writingRanking, setWritnigRanking] = useState([]);
  const [gpRanking, setGpRanking] = useState([]);
  const [studentIndividualRanking, setStudentIndividualRanking] = useState({});

 
 useEffect(()=>{
    setAllStudents(studentData)
 },[])
 useEffect(() => {
    generateRankings();
  }, [allStudents, student]); // Call generateRankings only once when the component mounts

  useEffect(() => {
    compileRanking();
  }, [listeningRanking, writingRanking, gpRanking, student]);

  useEffect(() => {
    console.log(studentIndividualRanking);
  }, [studentIndividualRanking]);


console.log(allStudents);


  const {
    id,
    specialKey,
    chineseName,
    pinyinName,
    englishName,
    teacherFeedback,
    exams,
    behaviour,
  } = student || {} ;

 if (!student || !exams) {
    return <div>Loading...</div>;
  }

  const totalExamsScore =
    student &&
    exams.reduce((acc, exam) => {
      return acc + exam.score;
    }, 0);
  const totalExamsMax =
    student &&
    exams.reduce((acc, exam) => {
      return exam.max + acc;
    }, 0);

  const singleExamCardsList =
    exams &&
    exams.map((e, i) => {
    let  examTypeSelector = e.type === "general paper" ? "gp" : e.type

      return (
        <SingleExamCard
          examType={e.type}
          examTypeScore={e.score}
          examTypeScoreMax={e.max}
          rank = {studentIndividualRanking[examTypeSelector]}
          showRank = {studentIndividualRanking}
        />
      );
    });
//sorting 
function sortByExamTypeScore (users, examType) {
  let sortedUsers = users ? users.slice() : [];

  sortedUsers.sort((a, b) => {
    const examA = a.exams.find((exam) => exam.type === examType);
    const examB = b.exams.find((exam) => exam.type === examType);

    return examB.score - examA.score;
  });

  return sortedUsers;
};

//  rendering 
  function generateRankings(){
    if (!allStudents || allStudents.length <= 1) return null;


    let rankingListening = sortByExamTypeScore(allStudents, "listening");
    let rankingGP = sortByExamTypeScore(allStudents, "general paper");
    let rankingWriting = sortByExamTypeScore(allStudents, "writing");
     console.log(88,rankingListening);
    setGpRanking(rankingGP);
    setListeningRanking(rankingListening);
    setWritnigRanking(rankingWriting);
  };

  function compileRanking () {
    if (!student) return null;
    let listening = listeningRanking?.findIndex((st) => st.id === student.id);
    let GP = gpRanking?.findIndex((st) => st.id === student.id);
    let writing = writingRanking?.findIndex((st) => st.id === student.id);
    let studnetIndRanking = {
      listening: +listening + 1,
      gp: +GP + 1,
      writing: +writing + 1,
    };

    if (listening !== -1 && writing !== -1 && GP !== -1) {
      setStudentIndividualRanking((prevRanking) => ({
        ...prevRanking,
        listening: +listening + 1,
        gp: +GP + 1,
        writing: +writing + 1,
      }));
    } else {
      console.log("Error fetching rankings lists ");
    }
  };

  

  return (
    <div className={styles.container}>
      {student ? (
        <>
          <h1 className={styles.heading}>Hello dear {student.englishName} </h1>

          {totalExamsScore && (
            <div className={styles.score_info}>
              Your total score is: <span>{totalExamsScore} </span> out of{" "}
              <span>{totalExamsMax}</span>.
            </div>
          )}
          {singleExamCardsList && (
            <div className={styles.examCard_list}>{singleExamCardsList}</div>
          )}

          <Devider deverdierClassName={styles.devider} />

          {teacherFeedback && (
            <div>
              <TeacherFeedback feedback={teacherFeedback} />
              <Devider deverdierClassName={styles.devider} />
            </div>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );

};


export default Home;
