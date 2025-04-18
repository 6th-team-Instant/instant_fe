import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Bookmark from "./pages/Bookmark";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
