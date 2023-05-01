import Navbar from "./Navbar/Navbar";
// import Main from ".Main/Main";
import Footer from "./Footer/Footer";

import { Routes, Route } from 'react-router-dom';

export {
  Navbar,
  // Main,
  Footer
};

export default function Application(props) {
  return (
    <Routes>
      {/* <Route exact path='/' element={<Main />}></Route> */}
    </Routes>
  );
};