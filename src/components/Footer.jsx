import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white py-6 px-4 sm:px-8 border-t border-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="footer-column">
          <p className="text-lg font-semibold">About Us</p>
          <p className="mt-2">A website that helps you get through your struggles in learning new languages.</p>
        </div>

        <div className="footer-column mt-4 sm:mt-0">
          <p className="text-lg font-semibold">Contact Info</p>
          <p className="mt-2">Email: japanlanguagegakko@gmail.com</p>
          <p>Phone: +81 3 1234 5678</p>
        </div>

        <div className="footer-column mt-4 sm:mt-0">
          <p className="text-lg font-semibold">Privacy Policy</p>
          <a href="Privacy" target="_blank" className="mt-2">Read our privacy policy here.</a>
        </div>

        <div className="footer-column mt-4 sm:mt-0">
          <p className="text-lg font-semibold">Social Media</p>
          <div className="flex mt-2 justify-center sm:justify-start">
            <a href="#" className="text-white mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white mr-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
