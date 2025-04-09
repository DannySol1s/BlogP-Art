import React from 'react';
import { Target, TrendingUp, Award } from 'lucide-react';

const Goals = () => {
  return (
    <section id="metas" className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Metas y Seguimiento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4 flex justify-center">
              <Target className="w-14 h-14" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Objetivos Actuales</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Desarrollar un estilo único (Obligatorio).
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Completar y Finalizar la Carrera (Opcional).
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Poner un Puesto de Tacos (Obligatorio).
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4 flex justify-center">
              <TrendingUp className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Progreso</h3>
            <div className="space-y-4">
              <div>
                <p className="mb-2">Técnica Digital</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <p className="mb-2">Dibujo Tradicional</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <p className="mb-2">Anatomía</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4 flex justify-center">
              <Award className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Logros</h3>
            <ul className="space-y-4">
              <li className="flex items-justify">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Finalizado el Diplomado en Administración de Proyectos y Emprendimiento por IESPE.
              </li>
              <li className="flex items-justify">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Segundo Lugar en la Categoría de Innovación en Rally Latinoamericano de Innovación, 2023.
              </li>
              <li className="flex items-justify">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Finalizado el Programa de Cisco Security Technical Masters.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;