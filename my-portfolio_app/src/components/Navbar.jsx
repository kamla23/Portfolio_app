
import React, { useState } from "react";
import sidar from '../assets/sidar.jpeg'; 

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const navbarBackground = "#A182BB"; 
  const darkIndigo = "#341C8C";       
  const white = "#FFFFFF";            
  const accentLavender = "#C3A6D6"; 
  return (
    <nav 
      className="w-full fixed top-0 left-0 shadow-lg z-50 "
      style={{ backgroundColor: navbarBackground }} 
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div 
          className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 transition duration-300 hover:scale-[1.05] cursor-pointer"
          style={{ borderColor: darkIndigo }} 
        >
          <a href="#home" title="Kittu Portfolio - Home">
            <img 
              src={sidar} 
              alt="Kittu's Personal Logo" 
              className="w-full h-full object-cover" 
           
              onError={(e) => {
                  e.currentTarget.style.display = 'none'; 
                  const fallbackText = document.createElement('span');
                  fallbackText.innerText = 'K'; 
                  fallbackText.style.color = white; 
                  fallbackText.style.fontSize = '1.5rem';
                 
                  if (e.currentTarget.parentNode) {
                      e.currentTarget.parentNode.appendChild(fallbackText);
                  }
              }}
            />
          </a>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          style={{ color: white }} 
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>

        <ul
          className={`md:flex md:static absolute left-0 w-full md:w-auto transition-all duration-300
          ${open ? "top-[68px] opacity-100 shadow-lg md:shadow-none" : "top-[-400px] opacity-0 md:opacity-100"}`}
          style={{ backgroundColor: navbarBackground }} 
        >
  
 
          {['home', 'about', 'projects', 'education', 'skills', 'contact'].map((item) => (
            <li key={item} className="mx-4 my-4 md:my-0 text-center">
              <a 
   
                href={`#${item}`} 
                className="text-white text-lg font-medium tracking-wider transition-all duration-300 py-2 px-3 rounded-md hover:font-bold"
                style={{ 
                    color: white, 
                    borderBottom: `2px solid transparent`,
                    borderTop: `2px solid transparent`,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderBottom = `2px solid ${accentLavender}`;
                    e.currentTarget.style.color = accentLavender; 
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderBottom = `2px solid transparent`;
                    e.currentTarget.style.color = white; 
                }}
                onClick={() => setOpen(false)} 
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;