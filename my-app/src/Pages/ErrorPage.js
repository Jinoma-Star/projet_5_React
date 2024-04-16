import React from "react";
import Error from "../Components/Error";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ErrorPage = () => {
  return (
    <>
      <div className="ErrorPage">
        <Header />
        <main>
          <Error />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;

/*YES*/