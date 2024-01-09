import React, { useContext, useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import { StudentContext } from "../../../App";
import styles from "./reports.module.scss";
import ReportHeader from "./components/ReportHeader";
import StudentsInfoBox from "./components/StudentsInfoBox";
import SingleReportBox from "./components/SingleReportBox";
import { TeacherRmarks } from "./components/TeacherRmarks";
import ReportFooter from "./components/ReportFooter";
import { Btn } from "../login/components/Btn";
import GradingScale from "./components/GradingScale";
import StudentsBox from "./components/StudentsBox";
import ExamsResultsBox from "./components/ExamsResultsBox";
import SingleExamsResultsBox from "./components/SingleExamResults";
import AdviceBox from "./components/AdviceBox";
import TeacherFeedback from "../home/components/TeacherFeedback";
import TeacherSignature from "./components/TeacherSignature";

const Reports = () => {
  const { student } = useContext(StudentContext);
  const name = student.chineseName;
  console.log(name);
  const { toPDF, targetRef } = usePDF({ filename: `${name}_report.pdf` });

  const [maxScores, setMaxScores] = useState({});
  const [canDownload, setCanDownload] = useState(true);

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

  const score = 12;
  const examType = "Total";
  const max = "/40";
  const examsTermOne = student.exams.term1;

  const printExamList =
    student.exams &&
    examsTermOne.map((exam, i) => {
      return (
        <SingleExamsResultsBox
          examType={capitalise(exam.type)}
          score={exam.score}
          max={exam.max}
        />
      );
    });

  return (
    <div className={styles.container}>
      {!canDownload && (
        <p className={styles.info}>
          to download the report use a computer with Chrome browser
        </p>
      )}
      {/* {canDownload && <Btn onClick={() => toPDF()} btnText={"download"} />} */}
     <Btn onClick={() => toPDF()} btnText={"download"}/>
      {/* Content to be generated to PDF */}

      <div className={styles.print_container} ref={targetRef}>
        <div>
             <ReportHeader />

        <StudentsBox
          studentName={name}
          pinyinName={student.pinyinName}
          studentEnglishName={student.englishName}
        />
        <ExamsResultsBox />

        {/* <SingleExamsResultsBox score={score} examType={examType} max={max}/> */}

        {printExamList}
        <GradingScale />
        <AdviceBox
          desc_title={generalAdviceTerm1.type}
          desc={generalAdviceTerm1.content}
        />
        <AdviceBox
          desc_title={"Teacher advice"}
          desc={student.teacherFeedback}
        />
        <TeacherSignature />
        <ReportFooter />
        </div>
     
      </div>
    </div>
  );
};

export default Reports;
