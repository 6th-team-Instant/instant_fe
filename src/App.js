//dcdfdf
//ㅇㅁㅇㅁㅇㅁㅇㅁㅇㅁㅇㅁㅇ

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import Entertainments from "./pages/Entertainments";
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
          <Route path="/" element={<Main />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/entertainments" element={<Entertainments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
