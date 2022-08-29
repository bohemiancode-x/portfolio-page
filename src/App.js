import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";

//pages
import Home from './pages/Home'
import About from "./pages/About";
import Blog from './pages/Blog'
import Education from './pages/Education'
import Work from './pages/Work'
import Contact from './pages/Contact'

//components
import Sidebar from "./components/sidebar";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />\
          <Route path="/blog" element={<Blog />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
