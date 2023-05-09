import React from "react";
import Navigation from "./Nav";
import { FaCircle } from "react-icons/fa";
import { Nav } from "react-bootstrap";

const KnownSkills = () => {
  const skills = [
    { name: "React", level: 4 },
    { name: "JavaScript", level: 4 },
    { name: "Hooks", level: 4 },
    { name: "Clean Code", level: 4 },
    { name: "Tailwind css", level: 3 },
    { name: "API/Endpoints", level: 3 },
    { name: "React Router", level: 3 },
    { name: "axios", level: 3 },
    { name: "Git", level: 3 },
    { name: "React query", level: 2 },
    { name: "Redux", level: 2 },
    { name: "SQL", level: 2 },
    { name: "TypeScript", level: 1 },
    { name: "Node js", level: 1 },
  ];
  return (
    <div className="bg-gradient-to-r from-fuchsia-900 to-red-800 min-h-screen ">
      <Navigation />
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center text-white mt-8 mb-8 ">
          Known Skills
        </h2>
        <div className="flex justify-center">
          <div>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <div className="flex items-center">
                  {[...Array(skill.level)].map((_, index) => (
                    <FaCircle key={index} className="mr-2 text-gray-800" />
                  ))}
                  {[...Array(5 - skill.level)].map((_, index) => (
                    <FaCircle key={index} className="mr-2 text-gray-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnownSkills;
