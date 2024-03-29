import React, { useContext, useEffect, useState } from "react";

import { usePDF } from "react-to-pdf";
import { StudentContext } from "../../../App";
import styles from "./reports.module.scss";
import ReportHeader from "./components/ReportHeader";
import StudentsInfoBox from './components/StudentsInfoBox';
import SingleReportBox from "./components/SingleReportBox";
import { TeacherRmarks } from "./components/TeacherRmarks";
import ReportFooter from "./components/ReportFooter";
import { Btn } from "../login/components/Btn";





const Reports = () => {
  const { student } = useContext(StudentContext);
  const name = student.chineseName;
  const { toPDF, targetRef } = usePDF({ filename: `${name}_report.pdf` });

  const [maxScores, setMaxScores] = useState({})
const [canDownload, setCanDownload] = useState(false);
  
  useEffect(() => {
    if (student) {
      let totalScore = student.exams.reduce((acc, e) => {
        return acc + e.score;
      }, 0);

      let totalScoreMax = student.exams.reduce((acc, e) => {
        return acc + e.max;
      }, 0);

      let totalPercMax = student.exams.reduce((acc, e) => {
        const percentNum  = Number(e.percent.slice(0, -1))
        // console.log(typeof (percentNum));
          
          return percentNum + acc
        
      }, 0);

      let studentTotalCalculation = {
        totalScore,
        totalScoreMax,
        totalPercMax: `${totalPercMax}% `
      };

      setMaxScores(studentTotalCalculation);
      setCanDownload(window.innerWidth >= 890);
    }
  }, [student]);

const capitalise = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  const examsReportList = student.exams && student.exams.map((e,i)=>{
      return <SingleReportBox key={e.id} exam={capitalise(e.type)} 
         score={e.score}  max = {e.max} percentage={e.percent}/>
  })

  
  const options  = {
      format: 'A4',
      method: 'open',
  }
 

  return (
    <div className={styles.container}>
      {!canDownload && <p className={styles.info} >to download the report use a computer with Chrome browser</p>}
      {canDownload  &&   <Btn onClick={() => toPDF(options)} btnText={'download'} />
      }
    
    
      
      <div ref={targetRef}>
        {/* Content to be generated to PDF */}
        <div className={styles.pdf_container}>
         <ReportHeader/>
         <StudentsInfoBox studentName={name}  pinyinName={student.pinyinName}  studentEnglishName={student.englishName} teacherName={student.englishTeacher}/>
         {student.exams &&  
           <div  className={styles.exams_box}>
            <h2 className={styles.title}>Grades</h2>
           <SingleReportBox exam={"Exam"} max={"Max"} percentage={"%"} score={"Your Score"} />

             {examsReportList}

         </div>}
       
        
         { student.exams && <SingleReportBox exam={"Total"} score={maxScores.totalScore} max={maxScores.totalScoreMax} percentage={maxScores.totalPercMax}/>}
         <TeacherRmarks teacherRmarks={student.teacherFeedback}/>
         <ReportFooter/>
        </div>
     
      </div>
    </div>
  );
};

export default Reports;
