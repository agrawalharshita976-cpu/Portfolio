// App.jsx
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./page2/projects";
import About from "./page3/about";
import Contact from "./page4/Contact";
import Footer from "./page5/Footer";

function App() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Hero Section */}
      <div className="snap-start flex flex-col">
        <NavBar />
        <div className="flex-1">
          <Hero />
        </div>
      </div>

      {/* Projects Section */}
      <div className="snap-start">
        <Projects />
      </div>

      {/* About Section */}
      <div className="snap-start">
        <About />
      </div>

      {/* Contact Section */}
      <div className="snap-start">
        <Contact />
      </div>

      {/* Footer Section */}
      <div className=" snap-start">
        <Footer />
      </div>
    </div>
  );
}

export default App;
