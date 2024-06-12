import React from 'react';
import agendaImage from '../assets/agenda.png';
import pokedexImage from '../assets/pokedex.png';
import ImagenesImage from '../assets/imagenes.png';
import AlgoritmoImage from '../assets/algoritmo.png';
import ZapateriaImage from '../assets/zapateria.jpg';
import AnalizadorImage from '../assets/analizador.jpg';
import MelodiaImage from '../assets/melodia.jpg';
import MotorImage from '../assets/motor.png';

const projects = {
  JavaScript: [
    {
      title: 'Agenda',
      description: 'Proyecto desarrollado en Javascript que permite la captura de datos de un nuevo usuario asi como la visualización en lista de todos los que se hayan registrado previamente.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/Agenda',
      previewImage: agendaImage,
    },
    {
      title: 'Pokedex',
      description: 'Proyecto desarrollado con Javascript en el cual ocupamos directamente la API de pokemon para vizualizar en forma de listado la informacion de los pokemones.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/Pokemon_Dex',
      previewImage: pokedexImage,
    },
  ],
  Python: [
    {
      title: 'Transformacion de Imagenes',
      description: 'API desarrollada en Python que permite subir una imagen y aplicar transformaciones que modifican la geometria de una Imagen.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/Transformacion_de_imagenes',
      previewImage: ImagenesImage,
    },
    {
      title: 'Algoritmo Genético',
      description: 'API desarrollada en Python que utiliza técnicas de búsqueda y optimización para encontrar soluciones aproximadas o la mejor opcion.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/Algoritmo_genetico',
      previewImage: AlgoritmoImage,
    },
  ],
  Java: [
    {
      title: 'Analizador Léxico',
      description: 'Analizador desarrollado en lenguaje Java que sirve para descomponer un flujo de caracteres de entrada en una secuencia de tokens. Los tokens son secuencias de caracteres con significado colectivo, como palabras clave, identificadores, números, operadores, y delimitadores.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/Analizador_lexico_java',
      previewImage: AnalizadorImage,
    },
    {
      title: 'Proyecto Java 2',
      description: 'Descripción del proyecto Java 2.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/proyecto-java-2',
      previewImage: 'ruta/a/la/imagen6.jpg',
    },
  ],
  PHP: [
    {
      title: 'Sistema de venta con PHP y MySQL',
      description: 'Desarrollado con PHP y conexion con una base de datos MySQL las funciones principales son realizar compras, actualiza en inventario, la merma y muestra el stock maximo y minimo de productos.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/Sistema_de_venta_con_PHP_y_MySQL',
      previewImage: ZapateriaImage,
    },
    {
      title: 'Proyecto PHP 2',
      description: 'Descripción del proyecto PHP 2.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/proyecto-php-2',
      previewImage: 'ruta/a/la/imagen8.jpg',
    },
  ],
  'C++': [
    {
      title: 'Melodia Navideña programada en Arduino',
      description: 'El proyecto consiste en un arduino con 2 botones, un buzzer y un led. Cada botón tiene asociado un villancico que se emitirá en forma de tonos por el buzzer mientras el LED se enciende al ritmo.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/Melodia_navide-a_arduino',
      previewImage: MelodiaImage,
    },
    {
      title: 'Motor a pasos con Arduino',
      description: 'Proyecto que consiste en el desarrollo de codigo utilizando el IDE de Arduino para la manipulacion de un motor a pasos.',
      repoUrl: 'https://github.com/AnaLauraFlorencioBravo/Motor_a_pasos_Arduino',
      previewImage: MotorImage,
    },
  ],
};

function Programas({ language }) {
  const { name } = language;
  const selectedProjects = projects[name] || [];

  return (
    <section className="my-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">{`Programas de ${name}`}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {selectedProjects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={project.previewImage} alt={`${project.title} preview`} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programas;
