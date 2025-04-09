import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#59cdcf]">Mi Arte 🎨, Mi Universo 🌠</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-[#fff0f3] font-bold hover:text-[#e9ffb0]">INICIO</a>
            <a href="#sobre-mi" className="text-[#fff0f3] font-bold hover:text-[#e9ffb0]">SOBRE MÍ</a>
            <a href="#lo-que-hago" className="text-[#fff0f3] font-bold hover:text-[#e9ffb0]">LO QUE HAGO</a>
            <a href="#galeria" className="text-[#fff0f3] font-bold hover:text-[#e9ffb0]">MI GALERÍA</a>
            <a href="#metas" className="text-[#fff0f3] font-bold hover:text-[#e9ffb0]">METAS</a>
            <a href="#contacto" className="text-[#fff0f3] font-bold hover:text-[#e9ffb0]">CONTACTO</a>
          </div>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;