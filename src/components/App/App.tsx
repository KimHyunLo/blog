import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import EmptyPage from "../../EmptyPage";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
