import React from "react";
import "./Style/App.scss";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import LogementSheet from "./Pages/LogementSheet";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/accueil" />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<LogementSheet />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </HashRouter>
  );
};

export default App;
