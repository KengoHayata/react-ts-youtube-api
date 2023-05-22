import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ShowVideoIndex } from "./components/ShowVideoIndex";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ display: "flex" }}>
        {/* TODO: サイドバーはログイン時のみ表示させる */}
        <Sidebar />
        <ShowVideoIndex />
      </div>
    </BrowserRouter>
  );
}
