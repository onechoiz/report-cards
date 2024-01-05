import { Routes, Route , useNavigate} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import Login from "./components/pages/login";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { createContext, useEffect, useState } from "react";
import Reports from './components/pages/reports/index';


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
    "teacherFeedback": "Excellent student with a strong work ethic.",
    "exams": [
      { "type": "listening", "score": 20, "max": 20 },
     { "type": "writing", "score": 0, "max": 20 },
      { "type": "general paper", "score": 19, "max": 20 }
    ],
    "behaviour": {
      "attendance": 7,
      "participation": 6,
      "behavior": 3,
      "conduct": 7
    }
  }
  
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
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/individualReports" element={<Reports/>} />
       
        </Routes>

        {/* <Footer/> */}
      </StudentContext.Provider>
    </div>
  );
}

export default App;
