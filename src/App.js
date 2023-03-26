import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Housing from "./Pages/housing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

// SASS
import "./main.css";


function App() {
  const [showFooter, setShowFooter] = useState(true);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error setShowFooter={setShowFooter} />} />
        <Route
          path="housing/:id"
          element={<Housing setShowFooter={setShowFooter} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooter && <Footer />}
    </BrowserRouter>
  );
}

export default App;
