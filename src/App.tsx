
import './App.css';
import Hearder from './components/Hearder';

import Footer from './components/Footer';
import Loading from './components/Loading';
import React,{Suspense} from "react"
import Error from './components/Error';
import {Home,Color,Contact,Font,Logo,Story,Thank} from './views'
import {BrowserRouter,Routes,Route}  from "react-router-dom"
function App() {
  return ( 
  <>
  <BrowserRouter>
  <Hearder/>
    <Suspense fallback={<Loading/>}>
      <Routes>
      <Route path='/*' element={<Error/>} ></Route>

      <Route path='/' element={<Home/>} ></Route>
        <Route path='/color' element={<Color/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/font' element={<Font/>} ></Route>
        <Route path='/logo' element={<Logo/>} ></Route>

        <Route path='/thank' element={<Thank/>} ></Route>
        <Route path='/story' element={<Story/>} ></Route>

      </Routes>
  <Footer/>
    </Suspense>
  </BrowserRouter>
  </>
  
  );
}

export default App;
