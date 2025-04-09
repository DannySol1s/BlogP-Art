import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="\imagenes\Perfil.png"
              alt="Angel Solis"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-2xl text-gray-700 leading-relaxed text-justify">
              Soy un artista apasionado por el dibujo y la ilustración. Mi viaje artístico comenzó desde muy temprana edad,
              y desde entonces he estado explorando diferentes técnicas y estilos para expresar mi creatividad.
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mt-4">
              A través de mis obras, busco transmitir emociones y contar historias que conecten con las personas.
              Cada trazo es una parte de mi historia y de mi evolución como artista.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;