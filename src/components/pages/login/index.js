import React, { useContext, useState } from "react";
import { Input } from "./components/Input";
import { Btn } from "./components/Btn";
import studentData from "../../../data/studentData.json";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../../../App";

const Login = () => {
  const [students, setStudents] = useState(studentData);
  const [loggedStudent, setLoggedStudent] = useState({});
  const [loginSecret, setLoginSecret] = useState("");

  const navigate = useNavigate();
  const { student, setStudent } = useContext(StudentContext);

  const handleInput = (e) => {
    let secret = e.target.value;
    setLoginSecret(secret);
  };

  const loginValidation = () => {
    if (!loginSecret) {
      alert("Please enter your Secret Code");
      throw new Error({ msg: "input your secret key" });
    }
    const foundStudent = students.find((st) => st.specialKey === loginSecret);
    if (!foundStudent) {
      alert("Wrong Secret Key");
    } else {
      alert(`Welcome ${foundStudent.chineseName}`);

      setStudent(foundStudent);

      console.log("found:", foundStudent);

      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginValidation();
  };

  return (
    <div>
      <form method="get" onSubmit={handleSubmit}>
        <Input inputPlaceholder={"your secret key..."} onChange={handleInput} />
        <Btn btnText={"login"} onBtnClick={loginValidation} />
      </form>
    </div>
  );
};
export default Login;
