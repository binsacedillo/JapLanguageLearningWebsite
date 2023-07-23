// LanguageProvider.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
  const [isJapanese, setIsJapanese] = useState(false);

  const handleLanguageToggle = () => {
    setIsJapanese(!isJapanese);
  };

  return (
    <LanguageContext.Provider value={{ isJapanese, handleLanguageToggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
