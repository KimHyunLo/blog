import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import EmptyPage from "../../EmptyPage";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import About from "../About/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:category" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
