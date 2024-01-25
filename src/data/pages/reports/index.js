import React, { useContext, useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import styles from "./reports.module.scss";
import ReportHeader from "./components/ReportHeader";
import ReportFooter from "./components/ReportFooter";
import GradingScale from "./components/GradingScale";
import StudentsBox from "./components/StudentsBox";
import ExamsResultsBox from "./components/ExamsResultsBox";
import SingleExamsResultsBox from "./components/SingleExamResults";
import AdviceBox from "./components/AdviceBox";
import TeacherSignature from "./components/TeacherSignature";

const Reports = ({student}) => {
  // const { student } = useContext(StudentContext);
  
  const name = student.chineseName;
  console.log(name);
  // const { toPDF, targetRef } = usePDF({ filename: `${name}_report.pdf` });

  // const [maxScores, setMaxScores] = useState({});
  // const [canDownload, setCanDownload] = useState(true);

  console.log("st", student.exams.term1);

  const generalAdviceTerm1 = {
    type: "General Advice",
    content:
      "This is your second year, and you are expected to progress more in the Four Skills of the English Language.  As you have experienced, learning a new language is not easy, because you have to maintain the standard. If you don’t keep practising, you will lose it very quickly. Read more English books, interesting articles from the library, internet,  watch English films (without subtitles), and listen to English songs and speeches, so that you will not lose your acquired knowledge of the language.",
  };

  // console.log(student.exams);

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // const options  = {
  //     format: 'A4',
  //     method: 'open',
  // }

  //  for print pdf

  
  const examsTermOne = student.exams.term1;

  const printExamList =
    student.exams &&
    examsTermOne.map((exam, i) => {
      return (
        <SingleExamsResultsBox
        key = {i}
          examType={capitalise(exam.type)}
          score={exam.score}
          sign= {exam.type === "total score" ?  "%" : "/"}
          max={exam.max}
        />
      );
    });

   

  return (

    

      <div className={styles.print_container} >
        
        <ReportHeader classN={student.class}/>

        <StudentsBox
          studentName={name}
          pinyinName={student.pinyinName}
          studentEnglishName={student.englishName}
        />
        <ExamsResultsBox />

  

        {printExamList}
        <GradingScale />
        <AdviceBox
          desc_title={generalAdviceTerm1.type}
          desc={generalAdviceTerm1.content}
        />
        <AdviceBox
          desc_title={"Teacher's Advice"}
          desc={student.teacherFeedback}
        />
        <TeacherSignature />
        <ReportFooter />
        </div>
     
    

  );
};

export default Reports;
