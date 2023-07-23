import PropTypes from 'prop-types';

const TranslationButton = ({ isJapanese, handleLanguageToggle }) => {
  return (
    <button className="button" onClick={handleLanguageToggle}>
      {isJapanese ? 'Switch to English' : '日本語に切り替え'}
    </button>
  );
};

TranslationButton.propTypes = {
  isJapanese: PropTypes.bool.isRequired,
  handleLanguageToggle: PropTypes.func.isRequired,
};

export default TranslationButton;
