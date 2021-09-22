import React from "react";
import "./App.css";
import FifthSec from "./components/fifthSection/FifthSec";
import FirstSection from "./components/firstSection/FirstSection.jsx";
import Footer from "./components/Footer/Footer";
import FourthSec from "./components/fourthSection/FourthSec";
import Navbar from "./components/navbar/Navbar.jsx";
import SecondSection from "./components/secondSection/SecondSection.jsx";
import SeventhSec from "./components/seventhSection/SeventhSec";
import SixthSection from "./components/sixthSection/SixthSection";
import ThirdSection from "./components/thirdSection/ThirdSection";

function App() {
  return (
    <>
      <FirstSection />
      <Navbar />
      <SecondSection />
      <ThirdSection />
      <FourthSec />
      <FifthSec />
      <SixthSection />
      <SeventhSec />
      <Footer />
    </>
  );
}

export default App;
