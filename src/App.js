import {Routes, Route} from 'react-router-dom';

import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import AdminPage from "./components/admin/AdminPage";
import ContactPage from "./components/contact/ContactPage";
import AboutPage from "./components/about/AboutPage";
import LoginPage from "./components/login/LoginPage";
import SignUpPage from "./components/signup/SignUpPage";
import AccountPage from './components/account/AccountPage';

function App(props) {
      let clients = [
        {
            id: 1,
            name: "Alex kiborgok",
            residence: "Rimpa",
            mobile: "0706941217",
            email: "alex@gmail.com",
            isTrashPicker: false,
            password: "alex"
        },
        {
            id: 2,
            name: "Sam Kuria",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "sam@gmail.com",
            isTrashPicker: false
        },
               {
            id: 3,
            name: "Joylene Kirui",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "joylene@gmail.com",
            isTrashPicker: false
        },
        {
            id: 4,
            name: "Collins Odinga",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "collins@gmail.com",
            isTrashPicker: false
        },
        {
            id: 5,
            name: "Kipkoech Sang",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "sang@gmail.com",
            isTrashPicker: false
        },
        {
            id: 6,
            name: "Danis Muga",
            residence: "Anonymous",
            mobile: "0712345678",
            email: "alex@gmail.com",
            isTrashPicker: false
        }
    ]

    
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage {...props} clients={clients} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
