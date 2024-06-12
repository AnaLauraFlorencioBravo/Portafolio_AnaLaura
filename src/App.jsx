import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Contacto from './components/Contacto';
import Programas from './components/Programas';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const resetSelectedLanguage = () => {
    setSelectedLanguage(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header resetSelectedLanguage={resetSelectedLanguage} />
      <div className="container mx-auto p-2 sm:p-4">
        <Menu setSelectedLanguage={setSelectedLanguage} />
        {selectedLanguage ? (
          <Programas language={selectedLanguage} />
        ) : (
          <Profile />
        )}
      </div>
      <footer id="footer"></footer>
      <Contacto isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
