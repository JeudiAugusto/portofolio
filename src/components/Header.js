import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="/">Jeudi Augusto</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><a href="#about" className="text-white">Tentang Saya</a></li>
              <li><a href="#projects" className="text-white">Proyek</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;