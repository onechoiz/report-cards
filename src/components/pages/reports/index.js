import React, { useContext } from 'react'
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   PDFViewer,
// } from "@react-pdf/renderer";
import { usePDF } from 'react-to-pdf';
import { StudentContext } from '../../../App';

const Reports = () => {
  const {toPDF, targetRef} = usePDF({filename:"report.pdf"})
  const {student} = useContext(StudentContext)
  const name = student.chineseName
  console.log();

  return (
    <div>Reports

  <button type="" onClick={()=>toPDF()}>pdf</button>

         <div ref={targetRef}>
            {/* Content to be generated to PDF */}
            
            <img src={'assets/logoIEP.png'} style={{width: 230}}/>
            <div>
              report - {name}
            </div>
         </div>
    </div>
  )
}


export  default Reports