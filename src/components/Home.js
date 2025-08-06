import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-20 text-center">
      <div className="container mx-auto px-6">
        <img src="/images/profile.jpg" alt="Jeudi Augusto Asadullah" className="w-48 h-48 mx-auto rounded-full mb-4" />
        <h1 className="text-4xl font-bold text-white">Jeudi Augusto Asadullah</h1>
        <p className="text-xl mt-4 text-gray-400">Mahasiswa Ilmu Komputer dari SMA Kanisius Jakarta.</p>
      </div>
    </section>
  );
};

export default Home;