

// import React from "react";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Project from "./components/Project";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";


// function App() {
//   return (
//     <div className="w-full min-h-screen bg-gray-50">
//       <Navbar />
//       <About />
//       <Project/>
//       <Skills />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
// export default App; 

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from './components/Education'; 
import Footer from "./components/Footer";


function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <Home /> 
      <About />
      <Project/>
      <Skills />
      <Education /> 
      <Contact />
      <Footer />
      
    </div>
  );
}
export default App;