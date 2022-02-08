import {Routes, Route} from 'react-router-dom';

import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
