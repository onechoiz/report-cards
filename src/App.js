import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Reports from "./components/pages/reports";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { createContext, useState } from "react";


export const StudentContext = createContext({});

function App() {
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
  });


  return (
    <div className="App">
      <StudentContext.Provider value={{student, setStudent}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/individualReports" element={<Reports />} />
        </Routes>

        {/* <Footer/> */}
      </StudentContext.Provider>
    </div>
  );
}

export default App;
