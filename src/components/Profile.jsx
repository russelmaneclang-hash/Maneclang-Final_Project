import React from 'react';

const Profile = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">

      <img
        src="src\assets\profile.jpg"
        alt="profile"
        className="w-48 h-48 object-cover rounded-full border-4 border-blue-500 shadow-lg"
      />

      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold">
          Hi, I'm Jan Russel Maneclang.
        </h2>

        <p className="mt-4 text-gray-600">
          I'm an IT student from University Of The Cordilleras
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          This is my Work
        </button>
      </div>

    </section>
  );
};

export default Profile;