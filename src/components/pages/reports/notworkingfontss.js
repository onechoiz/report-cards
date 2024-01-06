import React, { useContext } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts"
import { StudentContext } from "../../../App";

const Reports = () => {
  const { student } = useContext(StudentContext);

  console.log(student.chineseName);
  // capitalise first letters 
  const capitalizeFirstLetter =(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



const vsdFonts = {
  
 NotoSansSC: {
    normal: 'NotoSansSC-Regular.ttf',
    bold: 'NotoSansSC-Bold.ttf',
    italics: 'NotoSansSC-Italic.ttf',
    bolditalics: 'NotoSansSC-BoldItalic.ttf',
  },
   Roboto: {
    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
  },
};


pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  
 NotoSansSC: {
    normal: 'NotoSansSC-Regular.ttf',
    bold: 'NotoSansSC-Bold.ttf',
    italics: 'NotoSansSC-Italic.ttf',
    bolditalics: 'NotoSansSC-BoldItalic.ttf',
  },
   Roboto: {
    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
  },
};
   




  // colours for PDF
  const colors = {
    prim: "#343F64",
    headFill: "#465073",
    head: "#768fe3",
    sec: "#d2d6df",
    alt: "#e8eaef",
    acc: "#03FB09",
    text: "#FFFFFF",
    imp: "rgba(189, 5, 5, 0.795)",
    warn: "rgb(255, 145, 0)",
  };

  const headStyle = {
  color: colors.text, // Set text color to white
};
 // Alternate row background color  in tables 
  const layout= 
    {
          fillColor: function (i, node) {
            if (i === 0) {
              return colors.headFill;
            } else if (i > 0 && i % 2 === 0) {
              return colors.alt;
            }
            return null
        },

  paddingLeft: function (i) { return 15; }, // Add padding to the left side of the cell
  paddingRight: function (i) { return 10; }, // Add padding to the right side of the cell
  paddingTop: function (i) { return 20; }, // Add padding to the top of the cell
  paddingBottom: function (i) { return 2; }, // Add padding to the bottom of the cell
  hLineColor: function (i, node) {
    return colors.prim ;
  },
  vLineColor: function (i, node) {
    return colors.prim
  },
  hLineWidth: function (i, node) {
    return i === 0 || i === node.table.body.length ? 2 : 1;
  },
  vLineWidth: function (i, node) {
    return i === 0 || i === node.table.widths.length ? 2 : 1;
  },
  // Add the following lines for border radius and text alignment
 
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: function (i, node) {
    return i === node.table.body.length ? 10 : 20;
  },
      
  }



  // generating thr pdf 

  const generatePdf = (student) => {
    
    const content = [
      // header with logo
      // {
      //   image: "/logo.png",
      //   width: 100,
      //   alignment: "center",
      //   margin: [0, 10],
      // },
      { text: "Student Report", style: "header" },
      {
        text: `Student Name: ${student.chineseName} , pinyin: ${student.pinyinName}`,
        style: "subheader",
      },
      { text: `English  Name: ${student.englishName}`, },
      // exam table
 {
  table: {
    
     heights: [30, 20,20,20 ],
    widths: [75, 75, 75, 75],
   body: [
      [{ text: "Exam", style: headStyle }, { text: "Score", style: headStyle }, { text: "Max Score", style: headStyle }, { text: "Percent", style: headStyle }],
      ...student.exams.map((exam) => [ capitalizeFirstLetter(exam.type), exam.score, exam.max, exam.percent]),
    ],
  },
  // margin: [0, 40],
   layout: layout,    
    margin: [0,40]
},

      {
        table: {
          heights: [30, 20 ],
          widths: [75, 75, 75, 75],
          body: [
      [{ text: "Attentiveness", style: headStyle }, { text: "Effort", style: headStyle }, { text: "Participation", style: headStyle }, { text: "Conduct", style: headStyle }],
         student.behaviour.map((e) => [e.attentiveness, e.effort, e.participation, e.conduct]),
    ],
        },
        layout: layout,
      },
      {
        table: {
          widths: [379],
          body: [[ { text: "Teacher's remarks", style: headStyle} ], [student.teacherFeedback]],
        },
        layout:  layout,
        margin: [0, 10],
        // fontSize: 12,
      },
    ];



    const documentDefinition = {
      
      content,
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10],alignment:'center' },
        subheader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] ,font:"Roboto"},
      },
    };

    pdfMake.createPdf(documentDefinition).open();
    // .download(`${student.chineseName}student_report.pdf`);
  };

  return (
    <div>
      <p>hello</p>
      <h1>Student Report: {student.englishName}</h1>
      <button onClick={() => generatePdf(student)}>Download PDF</button>
    </div>
  );
};

export default Reports;
