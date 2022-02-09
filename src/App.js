import {Routes, Route} from 'react-router-dom';

import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import AdminPage from "./components/admin/AdminPage";
import ContactPage from "./components/contact/ContactPage";
import AboutPage from "./components/about/AboutPage";
import LoginPage from "./components/login/LoginPage";
import SignUpPage from "./components/signup/SignUpPage";
import AccountPage from './components/account/AccountPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage />} />
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
