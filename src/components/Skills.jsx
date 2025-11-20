import React from "react";

const Skills = () => {

  const darkIndigo = "#341C8C";
  const lavender = "#9475BF";
  const white = "#FFFFFF";   
  const lightLavender = lavender + '20'; 

  const skills = [
    { name: "HTML", icon: "🔥" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌿" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Git & GitHub", icon: "🛠️" },
    { name: "Tailwind CSS", icon: "💠" },
  ];

  return (
    <section 
      id="skills" 
      className="w-full py-20 px-6 md:px-20"
      style={{ backgroundColor: darkIndigo }} 
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          style={{ color: white }} 
        >
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-xl p-6 flex flex-col items-center text-center 
              shadow-lg transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: white, 
                border: `2px solid ${lavender}`, 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = lightLavender; 
                e.currentTarget.style.boxShadow = `0 10px 15px -3px rgba(148, 117, 191, 0.4), 0 4px 6px -2px rgba(148, 117, 191, 0.2)`; 
                e.currentTarget.style.transform = `translateY(-3px)`; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = white;
                e.currentTarget.style.boxShadow = `0 4px 8px -2px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.1)`; 
                e.currentTarget.style.transform = `translateY(0)`; 
              }}
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <h3 
                className="text-lg font-semibold"
                style={{ color: darkIndigo }} 
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;