import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import japaneseLanguageSchoolLogo from '../images/logo.png';

const TopNavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJapanese, setIsJapanese] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageToggle = () => {
    setIsJapanese(!isJapanese);
  };

  const englishTexts = {
    'Japanese Language School': 'Japanese Language School',
    'Home': 'Home',
    'Language Programs': 'Language Programs',
    'Community': 'Community',
    'Resources': 'Resources',
    'Learn Japanese!': 'Learn Japanese!',
  };

  const japaneseTexts = {
    'Japanese Language School': '日本語学校',
    'Home': 'ホーム',
    'Language Programs': '言語プログラム',
    'Community': 'コミュニティ',
    'Resources': 'リソース',
    'Learn Japanese!': '日本語を学んで!',
  };

  const texts = isJapanese ? japaneseTexts : englishTexts;

  return (
    <main>
    <nav className="bg-indigo-500 px-4 py-2 border-b border-indigo-800">
      <div className="flex items-center justify-between">
        <CustomNavLink to="/">
          <img
            src={japaneseLanguageSchoolLogo}
            alt="Japanese Language School Logo"
            className="h-10"
          />
        </CustomNavLink>

        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 transition-transform ${
                isMenuOpen ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          <CustomNavLink to="/">
            {texts['Home']}
          </CustomNavLink>
          <CustomNavLink to="/Language">
            {texts['Language Programs']}
          </CustomNavLink>
          <CustomNavLink to="/Community">
            {texts['Community']}
          </CustomNavLink>
          <CustomNavLink to="/Resources">
            {texts['Resources']}
          </CustomNavLink>
          <button className="button" onClick={handleLanguageToggle}>
            {isJapanese ? 'Switch to English' : '日本語に切り替え'}
          </button>
        </div>
      </div>

      <div className="md:hidden">
        {isMenuOpen && (
          <div className="bg-indigo-700 rounded pt-2 pb-4 flex flex-col items-center space-y-1">
            <CustomNavLink to="/">
              {texts['Home']}
            </CustomNavLink>
            <CustomNavLink to="/Language">
              {texts['Language Programs']}
            </CustomNavLink>
            <CustomNavLink to="/community">
              {texts['Community']}
            </CustomNavLink>
            <CustomNavLink to="/resources">
              {texts['Resources']}
            </CustomNavLink>
            <button className="button" onClick={handleLanguageToggle}>
              {isJapanese ? 'Switch to English' : '日本語に切り替え'}
            </button>
          </div>
        )}
      </div>
    </nav>
    </main>
  );
};

const CustomNavLink = ({ to, children, className }) => {
  return (
    <RouterNavLink to={to} className={`text-white font-medium ${className}`}>
      {children}
    </RouterNavLink>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default TopNavigationBar;
