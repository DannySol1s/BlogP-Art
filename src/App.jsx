import React from 'react';
import Encabezado from './components/Encabezado';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import QueHago from './components/QueHago';
import Galeria from './components/Galeria';
import Metas from './components/Metas';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="relative">
      <Encabezado />
      <main>
        <Hero />
        <SobreMi />
        <QueHago />
        <Galeria />
        <Metas />
        <Contacto />
      </main>
    </div>
  );
}

export default App;