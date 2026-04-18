import React from 'react';

const Contacts = () => {
  return (
    <section id="contact" className="my-12 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Contact
      </h2>

      <div className="flex justify-center gap-8 text-lg">

        <p>📧 Email</p>
        <p>💻 GitHub</p>
        <p>💬 Message</p>

      </div>
    </section>
  );
};

export default Contacts;