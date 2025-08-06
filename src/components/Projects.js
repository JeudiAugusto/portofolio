import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Proyek</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/images/cashie.png" alt="Proyek Cashie" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">Cashie</h3>
              <p className="mt-4 text-gray-400">Aplikasi kasir untuk membantu UMKM dalam mengelola transaksi dan inventaris. Dibangun dengan React dan Node.js.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;