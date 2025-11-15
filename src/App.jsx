import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

// pages
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Orionis from "./pages/Orionis";
import Etheron from "./pages/Etheron";
import Lumenara from "./pages/Lumenara";
import Theronix from "./pages/Theronix";

// globals css
import "./styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* planets */}
        <Route path="/orionis" element={<Orionis />} />
        <Route path="/etheron" element={<Etheron />} />
        <Route path="/lumenara" element={<Lumenara />} />
        <Route path="/theronix" element={<Theronix />} />
      </Routes>
    </BrowserRouter>
  );
}
