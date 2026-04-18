import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 size={30} className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt size={30} className="text-blue-500" />, name: "CSS" },
    { icon: <FaJs size={30} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact size={30} className="text-cyan-400" />, name: "React" },
    { icon: <FaPython size={30} className="text-green-500" />, name: "Python" },
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full shadow hover:scale-110 transition"
          >
            {skill.icon}
            <p className="text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;