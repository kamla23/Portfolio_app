import React from "react";
import kimg from "../assets/pro.jpg";



const About = () => {


  const darkIndigo = "#341C8C";
  const lightGold = "#F2E1AE";
  const lavender = "#9475BF";

  return (
    <section
      id="about"
      className="w-full text-white py-20 px-6 md:px-16"
      style={{ backgroundColor: darkIndigo }} 
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[260px_1fr] gap-12 items-center">

      
        <div className="flex justify-center">
          <div 
            className="w-60 h-60 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-2xl transition duration-500 hover:scale-[1.02]"
            style={{ border: `4px solid ${lightGold}` }} 
          >
            <img
              src={kimg}
              alt="profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>


        <div>
          <p 
            className="font-semibold uppercase tracking-wide text-sm md:text-base"
            style={{ color: lightGold }} 
          >
            Who am I?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 leading-snug">
            I'm Kamla, a programming student  
            <span style={{ color: lightGold }}> & Problem Solver</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Hello! I’m <span className="font-semibold text-white">Kamla</span>, a dedicated programming student
            passionate about building modern web applications and improving my
            skills every single day.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I’m currently learning React, JavaScript, and Node.js while
            practicing real-time projects to strengthen my problem-solving and
            development fundamentals.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Beyond coding, I love exploring new technologies, reading, and
            working on creative projects that challenge my logic and imagination.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {['React', 'JavaScript', 'Node.js', 'Problem Solver'].map((skill) => (
                <span 
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium transition duration-300 hover:shadow-xl"
                    style={{ 
                        backgroundColor: lavender, 
                        color: darkIndigo, 
                    }}
                >
                    {skill}
                </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;