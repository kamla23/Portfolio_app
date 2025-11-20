import React from "react";

const Contact = () => {

  const darkIndigo = "#341C8C"; 
  const lavender = "#9475BF";  
  const white = "#FFFFFF";     


  return (
    <section 
      id="contact" 
      className="w-full py-20 px-6 md:px-20"
 
      style={{ backgroundColor: darkIndigo }} 
    >
      <div className="max-w-5xl mx-auto">

 
        <h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-center"

          style={{ color: white }} 
        >
          Contact Me
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div 
            className="p-8 rounded-xl shadow-2xl"
            style={{ backgroundColor: white, border: `2px solid ${lavender}` }} 
          >
            <h3 
              className="text-xl font-semibold mb-5"
              style={{ color: darkIndigo }} 
            >
              Get in Touch
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Feel free to reach out for collaborations, project inquiries, or just a friendly chat!
            </p>

            <div className="space-y-4">
  
              <p className="flex items-center gap-3 text-gray-700">
                📍 <span style={{ color: darkIndigo }}>India</span>
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                📧 <a 
                      href="mailto:kittu@example.com" 
                      className="underline transition-colors duration-200"
                      style={{ color: darkIndigo }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = lavender; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = darkIndigo; }}
                    >
                      kittu@example.com
                    </a>
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                📞 <a 
                      href="tel:+910000000000" 
                      className="underline transition-colors duration-200"
                      style={{ color: darkIndigo }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = lavender; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = darkIndigo; }}
                    >
                      +91 0000000000
                    </a>
              </p>
            </div>
          </div>
          <div 
            className="p-8 rounded-xl shadow-2xl"
            style={{ backgroundColor: white, border: `2px solid ${lavender}` }} 
          >
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: lavender, outlineColor: lavender }}
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: lavender, outlineColor: lavender }}
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: lavender, outlineColor: lavender }}
              ></textarea>

              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: darkIndigo }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = lavender; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = darkIndigo; }}
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;