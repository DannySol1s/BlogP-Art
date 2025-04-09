import React from 'react';

const Gallery = () => {
  const drawings = [
    {
      url: "/imagenes/D1.png",
      title: "Brindis Bajo las Estrellas",
      description: "En un balcón perfumado de flores, dos copas de vino celebran el romance bajo la mirada silente de la ciudad iluminada."
    },
    {
      url: "/imagenes/D3.png",
      title: "El Descanso del Artista",
      description: "Pies cruzados, alma libre; pinceles en pausa, ideas en vuelo... la calma creativa de un espíritu soñador."
    },
    {
      url: "/imagenes/D12.jpg",
      title: "Palacio entre Lunas y Versos",
      description: "Una ciudad celeste flota entre nubes y estrellas, mientras la luna susurra palabras escritas en el idioma del corazón."
    },
    {
      url: "/imagenes/D4.png",
      title: "Silencio de Barro y Color",
      description: "Jarrones que guardan secretos antiguos, envueltos en un diálogo cromático de luz y sombra."
    },
    {
      url: "/imagenes/D5.png",
      title: "Bodegón de Uvas y Nostalgia",
      description: "Una botella, una copa, y un jarrón: el eco de una sobremesa tranquila donde el vino guarda memorias dulces."
    },
    {
      url: "/imagenes/D6.png",
      title: "Fragmentos de un Rostro Oculto",
      description: "Trazos abstractos revelan un alma escondida entre formas y colores, como si cada línea contara una historia."
    },
    {
      url: "/imagenes/D7.png",
      title: "Amor de Ultratumba",
      description: "Personajes inspirados en “El extraño mundo de Jack”"
    },
    {
      url: "/imagenes/D8.png",
      title: "Susurros Florales",
      description: "Pétalos en acuarela, delicados y etéreos, como un suspiro que se escapa del alma en primavera."
    },
    {
      url: "/imagenes/D9.png",
      title: "Sueños en el Horizonte",
      description: "Árboles danzan al borde del horizonte mientras el sol se funde en colores que solo el sueño podría pintar."
    },
    {
      url: "/imagenes/D10.png",
      title: "La Rosa que Sangra Pasión",
      description: "Una flor escarlata se alza como grito del corazón, entrelazada con curvas que laten con cada trazo."
    },
    {
      url: "/imagenes/D11.png",
      title: "Noches de Arabia",
      description: "Siluetas de camellos atraviesan el desierto eterno, guiadas por la luz fría de las constelaciones y la promesa del oasis."
    },
    {
      url: "/imagenes/D2.png",
      title: "Símbolo del Guerrero Eterno",
      description: "Un emblema dorado resguarda la memoria de un linaje antiguo, donde cada curva habla de honor y poder."
    },
  ];

  return (
    <section id="galeria" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Mi Galería</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drawings.map((drawing, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={drawing.url}
                alt={drawing.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-4 text-center">
                <p className="text-white text-lg font-bold">{drawing.title}</p>
                <p className="text-white text-sm mt-2">{drawing.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
