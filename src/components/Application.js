import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Product from "./Product/Product";
import About from './About/About';

import { Routes, Route } from 'react-router-dom';

export {
  Navbar,
  Main,
  Footer,
  Product,
  About
};

export default function Application(props) {
  return (
    <Routes>
      <Route exact path='/' element={<Main />}></Route>
      <Route exact path='/allProduct' element={<Product />}></Route>
      <Route exact path='/about' element={<About />}></Route>
    </Routes>
  );
};