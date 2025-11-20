import React from "react";
import studentImg from "../assets/students.png";
import portfolioImg from "../assets/expence.png";
import todoImg from "../assets/todo.png";

const Projects = () => {
  const darkIndigo = "#341C8C";
  const lavender = "#9475BF";
  const white = "#FFFFFF";

  const projectList = [
    {
      title: "Student Management System",
      description:
        "A web application to add, update, delete and search student details using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      image: studentImg,
      link: "https://management-frontend-omega.vercel.app/",
    },
    {
      title: "Expence Tracker",
      description:
        "A personal portfolio created using React and Tailwind CSS showcasing skills, projects, and contact details.",
      tech: ["React", "Tailwind CSS"],
      image: portfolioImg,
      link: "https://kamla23.github.io/expence/",
    },
    {
      title: "Todo App",
      description:
        "A simple and clean Todo app with add, delete, and filter functionalities. Data stored using LocalStorage.",
      tech: ["React", "LocalStorage"],
      image: todoImg,
      link: "https://kamla23.github.io/Goal_set/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-20"
      style={{ backgroundColor: darkIndigo }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          style={{ color: white }}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl p-6 transition-all duration-300"
              style={{ backgroundColor: white, border: `1px solid ${lavender}` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 15px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)";
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: darkIndigo }}
              >
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full font-medium"
                    style={{
                      backgroundColor: lavender + "30",
                      color: darkIndigo,
                      border: `1px solid ${lavender}`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: lavender,
                  color: white,
                }}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;