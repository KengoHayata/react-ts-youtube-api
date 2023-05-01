import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* TODO: サイドバーはログイン時のみ表示させる */}
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
