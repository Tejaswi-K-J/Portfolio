import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">

      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <CursorGlow />
          <ScrollProgress />
          
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />

        </>
      )}

    </div>
  );
}

export default App;