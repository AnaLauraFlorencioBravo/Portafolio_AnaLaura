import React from 'react';
import javascriptLogo from '../assets/javascript.jpeg';
import pythonLogo from '../assets/python.jpeg';
import javaLogo from '../assets/java.jpeg';
import phpLogo from '../assets/php.jpeg';
import cppLogo from '../assets/c.jpeg'; // Cambia el nombre del archivo según corresponda
import contactIcon from '../assets/contacto.jpeg'; // Asegúrate de tener la imagen del icono de contacto

const username = 'AnaLauraFlorencioBravo';

const languages = [
  { name: 'JavaScript', url: `https://github.com/${username}?tab=repositories&q=&type=&language=javascript`, logo: javascriptLogo },
  { name: 'Python', url: `https://github.com/${username}?tab=repositories&q=&type=&language=python`, logo: pythonLogo },
  { name: 'Java', url: `https://github.com/${username}?tab=repositories&q=&type=&language=java`, logo: javaLogo },
  { name: 'PHP', url: `https://github.com/${username}?tab=repositories&q=&type=&language=php`, logo: phpLogo },
  { name: 'C++', url: `https://github.com/${username}?tab=repositories&q=&type=&language=cpp`, logo: cppLogo }, // Cambio aquí
  // Añade más lenguajes según sea necesario
];

function Menu({ setSelectedLanguage }) {
  return (
    <section className="my-8 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        {languages.map(language => (
          <button
            key={language.name}
            onClick={() => setSelectedLanguage(language)}
            className="flex items-center space-x-2 px-2 sm:px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            <img src={language.logo} alt={`${language.name} logo`} className="w-4 h-4 sm:w-6 sm:h-6" />
            <span>{language.name}</span>
          </button>
        ))}
        <button
          onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center space-x-2 px-2 sm:px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          <img src={contactIcon} alt="Contact Icon" className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Contacto</span>
        </button>
      </div>
    </section>
  );
}

export default Menu;
