import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav"
import Main from "../Main/Main";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
