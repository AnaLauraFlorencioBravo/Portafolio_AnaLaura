import React from 'react';

function Contacto() {
  return (
    <section id="contact" className="bg-blue-500 text-white p-4 sm:p-6 shadow-lg mt-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Información de Contacto</h2>
      <div className="text-center">
        <p className="mb-2">Teléfono: 5545451449</p>
        <p className="mb-2">
          Correo: <a href="mailto:laura6895dv@gmail.com" className="text-yellow-300 hover:text-yellow-500">laura6895dv@gmail.com</a>
        </p>
        <p className="mb-2">
          Facebook: <a href="https://web.facebook.com/profile.php?id=100040851947059" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">Ana Laura</a>
        </p>
        <p className="mb-2">
          Instagram: <a href="https://www.instagram.com/laura_bravo20/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">laura_bravo20</a>
        </p>
      </div>
    </section>
  );
}

export default Contacto;
