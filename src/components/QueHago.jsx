import React from 'react';
import { SquareCode, PenTool, Image, BookOpen } from 'lucide-react';

const WhatIDo = () => {
  const services = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Lectura",
      description: "Fomento de la comprensión lectora y análisis de textos informativos y literarios."
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Dibujo Tradicional",
      description: "Dominio de técnicas tradicionales como lápiz, carboncillo y acuarela."
    },
    {
      icon: <Image className="w-12 h-12" />,
      title: "Diseño de Personajes",
      description: "Desarrollo de personajes únicos y expresivos para diferentes proyectos."
    },
    {
      icon: <SquareCode  className="w-12 h-12" />,
      title: "Programación",
      description: "Desarrollo de habilidades en lenguajes de programación para resolver problemas y crear software."
    }
  ];

  return (
    <section id="lo-que-hago" className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Lo que Hago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;