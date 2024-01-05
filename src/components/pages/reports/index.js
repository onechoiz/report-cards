import React, { useContext } from "react";
// import SingleReport from './components/SingleReport'
// import  SingleReport  from './components/SingleReport'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { StudentContext } from "../../../App";

const Reports = () => {
  const {student} = useContext(StudentContext);
  
  console.log(student.behaviour);
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const generatePdf = (student) => {

    const documentDefinition = {
      content: [
        { text: "Student Report", style: "header" },
        { text: `Student Name: ${student.englishName}`, style: "subheader" },
        { text: `Attendance: ${student.behaviour.attendance}%`, margin: [0, 10] },
        {
          text: `Participation: ${student.behaviour.participation}%`,
          margin: [0, 10],
        },
        // Add more information as needed
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        subheader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
      },
    };

    pdfMake
      .createPdf(documentDefinition)
      .open()
      // .download(`${student.chineseName}student_report.pdf`);
  
  };
  //  const student = {
  //     englishName: 'John Doe',
  //     behaviour: {
  //       attendance: 90,
  //       participation: 80,
  //       // Add more behavior information
  //     },
  //     // Add more student information
  //   };

  // console.log(student);
  

  return (
    <div>
      <p>hello</p>
      <h1>Student Report: {student.englishName}</h1>
      <button onClick={() => generatePdf(student)}>Download PDF</button>
    </div>
  );
};

export default Reports;
