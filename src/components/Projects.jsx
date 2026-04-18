import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="my-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <div className="h-32 bg-gray-300 rounded mb-4"></div>
          <p className="text-center font-semibold">First Webpage</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <div className="h-32 bg-gray-300 rounded mb-4"></div>
          <p className="text-center font-semibold">Styled Webpage</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <div className="h-32 bg-gray-300 rounded mb-4"></div>
          <p className="text-center font-semibold">Portfolio</p>
        </div>

      </div>
    </section>
  );
};

export default Projects;