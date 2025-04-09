import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Contáctame</h2>
          <p className="text-gray-600 mb-8 text-2xl">
            ¡Sígueme o envíame un mensaje directo a través de mis redes sociales!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.facebook.com/share/14EhZksLzjn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <Facebook size={50} />
            </a>
            <a
              href="https://www.instagram.com/_s0liz_?igsh=NGJqY2NjMDYwcnBo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={50} />
            </a>
            <a
              href="http://www.linkedin.com/in/%C3%A1ngel-daniel-sol%C3%ADs-p%C3%A9rez-b02b65296"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={50} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm bg-gray-100">
        <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los Derechos Reservados. A.D.S.P.</p>
      </footer>
    </>
  );
}
