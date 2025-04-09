import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="h-screen relative flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Mi Mundo Artístico</h1>
        <p className="text-xl">La diferencia entre los que aprenden y los que abandonan no es el talento...</p>
        <p className="text-xl">es la capacidad de aguantar los golpes y seguir adelante.</p>
        <p className="text-xl font-bold italic">Ángel Daniel Solís Pérez</p>
      </div>
    </section>
  );
};

export default Hero;