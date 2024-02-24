import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import VotePage from "./pages/VotePage";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";
import ListPaslonPage from "./pages/ListPaslonPage";
import AddPaslonPage from "./pages/AddPaslonPage";
import ListPartaiPage from "./pages/ListPartaiPage";
import AddPartaiPage from "./pages/AddPartaiPage";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/vote" Component={VotePage} />
        <Route path="/detail" Component={DetailPage} />
        <Route path="/admin" Component={AdminPage} />
        <Route path="/list-paslon" Component={ListPaslonPage} />
        <Route path="/add-paslon" Component={AddPaslonPage} />
        <Route path="/list-partai" Component={ListPartaiPage} />
        <Route path="/add-partai" Component={AddPartaiPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
