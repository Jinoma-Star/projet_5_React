import React from "react";
import LogementSheetDisplay from "../Components/LogementSheet/LogementSheetDisplay";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const LogementSheet = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <LogementSheetDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default LogementSheet;

/*YES*/