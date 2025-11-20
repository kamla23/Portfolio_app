
import React from 'react';
import Next from "../assets/sidar.jpeg";

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen text-white flex items-center px-4 md:px-16 overflow-hidden"
      style={{ backgroundColor: "#341C8C" }} 
    >

      <div className="flex w-full h-[85vh] pt-20 md:pt-24 items-start md:items-center"> 
        
        <div className="flex-1 max-w-xl pr-8 z-10 mt-12 md:mt-0"> 
          <p className="text-xl font-light mb-2 text-gray-200">Hi There!</p>
          
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
            I am Developer
            <span 
              className="animate-pulse" 
              style={{ color: "#F2E1AE" }}
            >
              |
            </span>
          </h1>
          
          <p className="text-2xl font-light mb-12 text-gray-300">I make the complex simple.</p>
          
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 text-gray-900 font-semibold rounded-lg shadow-xl transition duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: "#9475BF", 
              border: "2px solid #F2E1AE",
            }}
          >
            Contact Me
          </a>
        </div>

        <div className="hidden lg:flex relative h-full -mr-16 justify-end items-center min-w-[400px]">
          <div 
            className="absolute top-0 left-0 w-full max-w-lg h-full max-h-[900px] border-4 z-0 rounded-lg"
            style={{ 
              borderColor: '#657EBE', 
              transform: 'translate(1rem, 1rem)' 
            }}
          ></div>

          <div className="relative w-full max-w-lg h-full max-h-[900px] overflow-hidden rounded-lg shadow-2xl z-10"> 
            <img 
              src={Next}
              alt="Developer Profile" 
              className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-500" // Added hover effect
            />
          </div>
        
          <div 
            className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full z-20 animate-ping"
            style={{ backgroundColor: "#F2E1AE" }} 
          ></div>
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 w-full py-4 px-4 md:px-16 flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-16 text-sm z-20 shadow-inner"
        style={{ backgroundColor: "#9475BF" }} 
      >
        
        <div className="detail-item">
          <p className="font-light uppercase" style={{ color: "#F2E1AE80" }}>Email</p> 
          <p className="font-medium" style={{ color: "#F2E1AE" }}>contact@example.com</p>
        </div>
        
        <div className="detail-item">
          <p className="font-light uppercase" style={{ color: "#F2E1AE80" }}>Phone</p>
          <p className="font-medium" style={{ color: "#F2E1AE" }}>+1-222-300-4000</p>
        </div>
        
        <div className="detail-item">
          <p className="font-light uppercase" style={{ color: "#F2E1AE80" }}>Location</p>
          <p className="font-medium" style={{ color: "#F2E1AE" }}>Jashpur, chhattishgarh, india</p>
        </div>
      </div>
    </section>
  );
};
export default Home
