import React from 'react';
import profileImage from '../assets/profile.jpg'; // Cambia esto al nombre y ruta correctos de tu imagen

function Profile() {
  return (
    <section id="profile" className="my-8 p-4 sm:p-8 bg-secondary text-light rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <img src={profileImage} alt="Profile" className="w-30 h-30 sm:w-40 sm:h-40 border-4 border-accent" />
        <h2 className="text-2xl sm:text-3xl font-bold mt-4">ANA LAURA FLORENCIO BRAVO</h2>
        <p className="mt-4 text-center max-w-md">
          Soy Ana Laura, estudiante de Ingeniería en Sistemas Computacionales y tengo 23 años.
          En este portafolio, se encuentran desarrollos en varios lenguajes de programación, incluyendo Python, Java y C++.
        </p>
      </div>
    </section>
  );
}

export default Profile;
