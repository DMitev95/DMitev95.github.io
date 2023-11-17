import "./App.css";
import Homepage from "./Components/Home/Homepage";
import Portfolio from "./Components/Common/Portfolio/Portfolio";
import Education from "./Components/Common/Education/Education";
import Skills from "./Components/Common/Skills/Skills";
import Header from "./Components/Common/Header/Header";
import Contact from "./Components/Common/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
