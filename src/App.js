import { Routes, Route , useNavigate} from "react-router-dom";
import "./App.css";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { createContext, useEffect, useState } from "react";
import Reports from './data/pages/reports/index';
import Print from "./data/pages/Print";


export const StudentContext = createContext({});
export const LoggedContext = createContext(false)


function App() {
 const [isLogged, setIsLogget] = useState(false)
 const [student, setStudent] = useState(
  {
    "id": 1,
    "specialKey": "abc123",
    "chineseName": "张三",
    "pinyinName": "Zhāng Sān",
    "englishName": "John Smith",
    "teacherFeedback": "Josie, you're undoubtedly capable, and I've noticed some level of activity from you. Keep up the good work, and consider participating more actively in class discussions. Your contributions will enhance the overall learning environment.Good job!",
    "exams": 
       { "term1": [
      { "type": "total score", "score": 1, "max": 100 },
      { "type": "listening", "score": 20, "max": 20 },
      { "type": "writing", "score": 20, "max": 20 },
      { "type": "general paper", "score": 1, "max": 20 }
      
    ], 
      "term2": [  
      ]
    }
    ,
    "behaviour":
      {
       "term1": [
      {"attendance": 7},
      {"participation": 6},
      {"behavior": 3},
      {"conduct": 7}
       ]
  
      ,
      "term2" : [{}]}
    
  },
  
  );

const navigate = useNavigate()
useEffect(() => {
    // Check if the student is not logged in, then navigate to the login page
    if (!student) {
      navigate("/login");
    }
  }, [student, navigate]);

  return (
    <div className="App">
      <StudentContext.Provider value={{student, setStudent}}>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Print/>} />
         
          <Route path="/individualReports" element={<Reports/>} />
       
        </Routes>

        {/* <Footer/> */}
      </StudentContext.Provider>
    </div>
  );
}

export default App;
