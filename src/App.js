import {Routes, Route, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import md5 from 'md5';

import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import AdminPage from "./components/admin/AdminPage";
import ContactPage from "./components/contact/ContactPage";
import AboutPage from "./components/about/AboutPage";
import LoginPage from "./components/login/LoginPage";
import SignUpPage from "./components/signup/SignUpPage";
import AccountPage from './components/account/AccountPage';

function App() {
  let navigate = useNavigate()
      let clients = [
        {
          firstName: "Alex k",
          lastName: "kiborgok",
          phoneNumber: "0703443334",
          location: "Nairobi",
          password: 12345,
          isTrashPicker: false,
          isAdmin: true
        }
      ]

    let initialstate = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        location: "",
        confirmPassword: ""
    }

    let [signUpData, setSignUpData] = useState(initialstate);
    let [users, setUsers] = useState(clients);

    let handleChange = (e) => {
        const {name, value} = e.target;
        setSignUpData({
            ...signUpData,
            [name]:value
        });
        
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if(signUpData.firstName === ""){
          alert("First name cannot be empty")
          return
        }else if(signUpData.lastName === ""){
          alert("Last name cannot be empty")
          return
        }else if(signUpData.phoneNumber === ""){
          alert("Phone number cannot be empty")
          return
        }else if(signUpData.location === ""){
          alert("Location cannot be empty")
          return
        }
        else if(signUpData.password === ""){
          alert("Password cannot empty")
          return
        }else if(signUpData.password.length < 5){
          alert("Password too short")
          return
        }
        else if(signUpData.password !== signUpData.confirmPassword){
          alert("Passwords don't match")
          return
        }
        let usersLength = users.length;
        let newUser = signUpData;
        newUser.id = usersLength + 1;
        let hash = md5(newUser.password)
        newUser.password = hash
        setUsers([...users, newUser]);
        setSignUpData(initialstate);
        alert("You successfully registered")
        return navigate("/login")
    }

 

    useEffect(() => {

    },[users])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage userData={users} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignUpPage signUpData={signUpData} handleChange={handleChange} handleSubmit={handleSubmit} />} />
      </Routes>
    </>
  );
}

export default App;
