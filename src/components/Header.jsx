import React from 'react';

function Header({ resetSelectedLanguage }) {
  const handleTitleClick = () => {
    resetSelectedLanguage();
    const profileSection = document.getElementById('profile');
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-blue-500 text-white p-4 sm:p-6 shadow-lg mt-8 text-center">
      <h1
        onClick={handleTitleClick}
        className="text-2xl sm:text-4xl font-bold text-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-300"
      >
        MI PORTAFOLIO
      </h1>
      <div className="absolute right-4 flex items-center space-x-4">
      </div>
    </header>
  );
}

export default Header;
