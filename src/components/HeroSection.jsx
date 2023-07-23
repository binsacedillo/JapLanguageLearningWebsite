import backgroundImg from '../images/hero.jpg';
import '../styles/HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center">
        <h1 className="hero-title">
          Learn Japanese!
        </h1>
        <p className="hero-description">
          Discover the joy of connecting with japanese through their rich culture.
        </p>
        <div className="hero-btn">
          <Link to="/Language" className="cursor-pointer">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
