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
          firstName: "kipkoech",
          lastName: "ian",
          phoneNumber: "0797545676",
          location: "machakos",
          password: md5("12345"),
          isTrashPicker: false,
        },

        {
          firstName: "Joylene",
          lastName: "kirui",
          phoneNumber: "0719985678",
          location: "nakuru",
          password: md5("12345"),
          isTrashPicker: false,
        },

        {
          firstName: "collins",
          lastName: "odinga",
          phoneNumber: "0719545678",
          location: "Nairobi",
          password: md5("12345"),
          isTrashPicker: false,
        }
      ]

    let initialstate = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        location: "",
        confirmPassword: ""
    }
    let [user, setApp] = useState({
      isLoggedIn: false,
      client: {}
    })
    let [signUpData, setSignUpData] = useState(initialstate);
    let [loginData, setLoginData] = useState({phoneNumber: "", password: ""});
    let [users, setUsers] = useState(clients);

    let handleLogin = (e) => {
      const {name, value} = e.target;
      setLoginData({
        ...loginData,
        [name]:value
      });
    }

    let handleLoginSubmit = (e) => {
      e.preventDefault()

      if(loginData.phoneNumber === ""){
        alert("Phone number cannot be empty")
        return
      }else if(loginData.phoneNumber.length < 10 && loginData.phoneNumber.length > 10){
        alert("Invalid phone number")
        return
      }else if(loginData.password === ""){
        alert("Password cannot be empty");
        return
      }else if(loginData.password.length < 5){
        alert("Password is too short")
      }

      let foundUser = users.find(user => user.phoneNumber === loginData.phoneNumber);
      if(foundUser){
        if(md5(loginData.password) == foundUser.password){
          alert("Logged in successfully")
          setApp({
            isLoggedIn: true,
            client: foundUser
          })
          return navigate("/");
        }
        alert("Incorrect number/password")
        return
      }
    }

    let handleChange = (e) => {
        const {name, value} = e.target;
        setSignUpData({
            ...signUpData,
            [name]:value
        });
        
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("yyy")
        if(signUpData.firstName === ""){
          alert("First name cannot be empty")
          return
        }else if(signUpData.lastName === ""){
          alert("Last name cannot be empty")
          return
        }else if(signUpData.phoneNumber === ""){
          alert("Phone number cannot be empty")
          return
        }else if(signUpData.phoneNumber.length < 10 && signUpData.phoneNumber.length > 10){
          alert("Invalid phone number")
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
        let findUser = users.find(user => user.phoneNumber === signUpData.phoneNumber)
        if(findUser){
          alert(findUser.phoneNumber + " is already registered")
          return
        }
        let usersLength = users.length;
        let newUser = signUpData;
        newUser.id = usersLength + 1;
        newUser.isAdmin = false;
        if(newUser.lastName === "kiborgok"){
          newUser.isAdmin = true;
        }
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
      <NavBar user={user} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage userData={users} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/account' element={<AccountPage user={user}/>} />
        <Route path='/login' element={<LoginPage handleLoginSubmit={handleLoginSubmit} handleLogin={handleLogin} loginData={loginData} />} />
        <Route path='/register' element={<SignUpPage signUpData={signUpData} handleChange={handleChange} handleSubmit={handleSubmit} />} />
      </Routes>
    </>
  );
}

export default App;
