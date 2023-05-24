import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ShowVideoIndex } from "./components/ShowVideoIndex";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Container } from "@mui/material";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ display: "flex" }}>
        {/* TODO: サイドバーはログイン時のみ表示させる */}
        <Sidebar />
        <Container maxWidth="lg" sx={{ marginTop: 12 }}>
          <ShowVideoIndex />
        </Container>
      </div>
    </BrowserRouter>
  );
}
