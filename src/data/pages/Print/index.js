import { createRef, useEffect, useState } from 'react';
import { usePDF } from 'react-to-pdf';
import StudentsInfoBox from '../reports/components/StudentsInfoBox';
import stuData from "../../new.json"
import Reports from '../reports';
import styles from "./print.module.scss"
const Print = ()=>{
      const { toPDF, targetRef } = usePDF({filename: 'report_slips.pdf'});
    const [students, setStudents] = useState(stuData)
    console.log(students);
    

const [isDownloading, setDownloading] = useState(false);

  

    const bulkCreate = students.map((e, i)=>{
     if(e.englishName === "Joester")
    return (
 
          <Reports key={i} student={e} />

      

    );
  });

    

    return (

     

        <div >
            <button onClick={() => toPDF()}>Download PDF</button>
            <div ref={targetRef} className={styles.container} >
                 {bulkCreate}
                          {/* <Reports student={students[0]} />  */}
      {/* <Reports student={students[1]} /> 
          <Reports student={students[2]} />
        <Reports student={students[3]} />
        <Reports student={students[4]} />
        <Reports student={students[5]} />
        <Reports student={students[6]} />
        <Reports student={students[7]} />
        <Reports student={students[8]} />
         <Reports student={students[9]} />
        <Reports student={students[10]} />
        <Reports student={students[11]} />
        <Reports student={students[12]} />
        <Reports student={students[13]} />
        <Reports student={students[14]} /> 
    
        {/* second batch  */}
         {/* <Reports student={students[16]}/> 
                 <Reports student={students[15]} />   
<Reports student={students[17]}/>
<Reports student={students[18]}/>
<Reports student={students[19]}/>
<Reports student={students[20]}/>
<Reports student={students[21]}/>
<Reports student={students[22]}/>
<Reports student={students[23]}/>
<Reports student={students[24]}/>
<Reports student={students[25]}/>
<Reports student={students[26]}/>
<Reports student={students[27]}/>
<Reports student={students[28]}/>
<Reports student={students[29]}/> 

{/* other batch */}

   {/* <Reports student={students[30]}/>
<Reports student={students[31]}/> 
 <Reports student={students[32]}/> 
 <Reports student={students[33]}/>
<Reports student={students[34]}/>
<Reports student={students[35]}/>
<Reports student={students[36]}/>
<Reports student={students[37]}/>
<Reports student={students[38]}/>
<Reports student={students[39]}/>
<Reports student={students[40]}/>  
 <Reports student={students[41]}/> 
<Reports student={students[42]}/>  
  <Reports student={students[43]}/>  
 <Reports student={students[44]}/>   
 <Reports student={students[45]}/>    */}
 {/*
<Reports student={students[46]}/>
<Reports student={students[47]}/>
<Reports student={students[48]}/>
<Reports student={students[49]}/> */}
    
            </div>
           
        </div>
    )
}
export default Print