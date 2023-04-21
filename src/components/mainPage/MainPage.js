import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import StartModalWindow from "./StartModalWindow";

let MainPage = () => {
  const [start, setStart] = React.useState(true);

  const closeModalWindow = () => {
    setStart(false);
  };

  return (
    <div className="mainPage">
      <Header />
      <Main />
      <Footer />
      {start && <StartModalWindow closeModalWindow={closeModalWindow} />}
    </div>
  );
};

MainPage = React.memo(MainPage);

export default MainPage;
