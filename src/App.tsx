import Home from "./pages/UserPage";
import HomeAdmin from "./pages/AdminPage";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import React, { ChangeEvent } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { IAuth } from "./Interfaces/Auth_Interface";
import Navbar from "./components/NavbarUser";
import Footer from "./components/Footer";
import VotePage from "./pages/VotePage";
import ListPartaiPage from "./pages/ListPartaiPage";
import AddPartaiPage from "./pages/AddPartaiPage";
import AddPaslonPage from "./pages/AddPaslonPage";
import ListPaslonPage from "./pages/ListPaslonPage";
import NavbarAdmin from "./components/NavbarAdmin";
import DetailPage from "./pages/NewsDetailPage";

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginAdmin, setIsLoginAdmin] = React.useState<boolean>(false);
  const [isLoginUser, setIsLoginUser] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<IAuth>({
    username: "",
    password: "",
  });

  function handleSetForm(event: ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.username === "admin" && form.password === "administrator") {
      setIsLoginAdmin(true);
    } else if (
      form.username !== "" &&
      form.password !== "" &&
      form.username !== "admin" ||
      form.password !== "administrator"
    ) {
      setIsLoginUser(true);
    }
  }

  React.useEffect(() => {
    navigate("/");
  }, [isLoginUser]);

  React.useEffect(() => {
    navigate("/admin");
  }, [isLoginAdmin]);

  function PrivateRouteUser() {
    if (isLoginUser) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  }

  function PrivateRouteAdmin() {
    if (isLoginAdmin) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handle={handleSetForm} login={login} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/admin" element={<><NavbarAdmin/><HomeAdmin /><Footer/></>} />
          <Route element={<><NavbarAdmin/><AddPartaiPage /><Footer/></>} path="/add-partai" />
          <Route element={<><NavbarAdmin/><AddPaslonPage /><Footer/></>} path="/add-paslon" />
        </Route>
        <Route element={<PrivateRouteUser />}>
          <Route element={<><Navbar/><Home /><Footer/></>} path="/" />
          <Route element={<><Navbar/><VotePage /><Footer/></>} path="/vote" />
          <Route element={<><Navbar/><ListPartaiPage /><Footer/></>} path="/list-partai" />
          <Route element={<><Navbar/><ListPaslonPage /><Footer/></>} path="/list-paslon" />
          <Route element={<><Navbar/><DetailPage /><Footer/></>} path="/news-detail" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
