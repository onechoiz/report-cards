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
import GradingScale from "./components/GradingScale";
import StudentsBox from "./components/StudentsBox";
import ExamsResultsBox from "./components/ExamsResultsBox";
import SingleExamsResultsBox from "./components/SingleExamResults";
import AdviceBox from "./components/AdviceBox";
import TeacherFeedback from '../home/components/TeacherFeedback';
import TeacherSignature from "./components/TeacherSignature";


const Reports = () => {
  const { student } = useContext(StudentContext);
  const name = student.chineseName;
  const { toPDF, targetRef } = usePDF({ filename: `${name}_report.pdf` });

  const [maxScores, setMaxScores] = useState({})
const [canDownload, setCanDownload] = useState(false);

console.log("st",student.exams.term1);

const generalAdviceTerm1 = { type: "General Advice", content: "This is your second year, and you are expected to progress more in the Four Skills of the English Language.  As you have experienced, learning a new language is not easy, because you have to maintain the standard. If you don’t keep practising, you will lose it very quickly. Read more English books, interesting articles from the library, internet,  watch English films (without subtitles), and listen to English songs and speeches, so that you will not lose your acquired knowledge of the language."}

  // console.log(student.exams);


  // useEffect(() => {
  //   if (student) {
  //     let totalScore = student.exams.reduce((acc, e) => {
  //       return acc + e.score;
  //     }, 0);

  //     let totalScoreMax = student.exams.reduce((acc, e) => {
  //       return acc + e.max;
  //     }, 0);

  //     let totalPercMax = student.exams.reduce((acc, e) => {
  //       const percentNum  = Number(e.percent.slice(0, -1))
  //       // console.log(typeof (percentNum));
          
  //         return percentNum + acc
        
  //     }, 0);

  //     let studentTotalCalculation = {
  //       totalScore,
  //       totalScoreMax,
  //       totalPercMax: `${totalPercMax}% `
  //     };

  //     setMaxScores(studentTotalCalculation);
  //     setCanDownload(window.innerWidth >= 890);
  //   }
  // }, [student]);

  // console.log("studnet", student);

const capitalise = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//   const examsReportList = student.exams && student.exams.map((e,i)=>{
//       return <SingleReportBox key={e.id} exam={capitalise(e.type)} 
//          score={e.score}  max = {e.max} percentage={e.percent}/>
//   })

  
//   const options  = {
//       format: 'A4',
//       method: 'open',
//   }
 

//  for print pdf 

const score = 12
const examType= "Total"
const max = "/40"
const examsTermOne = student.exams.term1

const printExamList = student.exams && examsTermOne.map((exam,i)=>{
  
    return <SingleExamsResultsBox  examType={capitalise(exam.type)} score={exam.score} max={exam.max} />
})





  return (
    <div className={styles.container}>
      {!canDownload && <p className={styles.info} >to download the report use a computer with Chrome browser</p>}
      {/* {canDownload  &&   <Btn onClick={() => toPDF(options)} btnText={'download'} />
      }
     */}
    
          {/* Content to be generated to PDF */}
      {/* <div ref={targetRef}>
    
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
     
      </div> */}

      <div className={styles.print_container} ref={targetRef}>
        
         <ReportHeader/>
         
        <StudentsBox studentName={name}  pinyinName={student.pinyinName}  studentEnglishName={student.englishName}/>
       <ExamsResultsBox/>
        
        {/* <SingleExamsResultsBox score={score} examType={examType} max={max}/> */}

         {printExamList}
          <GradingScale/>
      <AdviceBox desc_title={generalAdviceTerm1.type} desc= {generalAdviceTerm1.content} />
      <AdviceBox desc_title={"Teacher advice"} desc= {student.teacherFeedback} />
    <TeacherSignature/>
     <ReportFooter/>
      </div>
    </div>
  );
};

export default Reports;
