import React from "react";

const Education = () => {
  const darkIndigo = "#341C8C";
  const lavender = "#9475BF";   
  const white = "#FFFFFF";      
  const lightGray = "#F9FAFB";

  const educationList = [
    {
      degree: "B.Sc (Mathematics)",
      institution: "Vijay Bhushan Singh Deo Girls College, Jashpur Nagar (Surguja University)",
      years: "2022 - Present",
      details: "Studied core mathematical concepts including Algebra, Calculus, Geometry, Statistics, and Applied Mathematics.",
    },
    {
      degree: "12th Grade (Higher Secondary)",
      institution: "Government Higher Secondary School, Charaidand",
      years: "2019 - 2021",
      details: "Completed Higher Secondary with strong focus on Mathematics and Science subjects.",
    },
    {
      degree: "Certificate in Version Control - Git & GitHub",
      institution: "My Bharat Quiz – Ministry of Youth Affairs and Sports",
      years: "2024",
      details: "Learned Git basics, repositories, commits, branching, GitHub collaboration, and version control workflows.",
    },
    {
      degree: "10th Grade (High School)",
      institution: "Government High School, Patratoli",
      years: "2019",
      details: "Completed Secondary Education with good academic performance and strong interest in Mathematics.",
    },
  ];

  return (
    <section 
      id="education" 
      className="w-full py-20 px-6 md:px-20"
      style={{ backgroundColor: darkIndigo }}
    >
      <div className="max-w-6xl mx-auto">

        <h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          style={{ color: white }}
        >
          My Education
        </h2>

        <div className="relative">
          <div 
            className="hidden md:block absolute h-full left-1/2 transform -translate-x-1/2 w-1"
            style={{ backgroundColor: lavender }}
          ></div>
          {educationList.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="mb-8 flex justify-between items-center w-full"
                style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}
              >
                <div className={`hidden md:block w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}></div>

                <div 
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10"
                  style={{ borderColor: white, backgroundColor: lavender }}
                ></div>

                <div 
                  className={`w-full md:w-1/2 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.03]`}
                  style={{ 
                    backgroundColor: lightGray, 
                    borderLeft: `5px solid ${lavender}`,
                  }}
                >
                  <p 
                    className="text-sm font-medium mb-1"
                    style={{ color: darkIndigo }}
                  >
                    {item.years}
                  </p>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: darkIndigo }}
                  >
                    {item.degree}
                  </h3>
                  <p className="text-gray-700 font-semibold mb-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-600">
                    {item.details}
                  </p>
                </div>

                <div className={`hidden md:block w-1/2 ${isLeft ? 'pl-8' : 'pr-8'}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Education;
