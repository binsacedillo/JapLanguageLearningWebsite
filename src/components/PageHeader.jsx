import headerimage from '../images/headerimage.jpg';

const PageHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-indigo-500">
      <div className="flex flex-col items-center md:flex-row md:items-center"> {/* Updated flex classes */}
        <img
          src={headerimage}
          alt="Japanese Culture"
          className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 md:mb-0" // Add mb-4 (margin-bottom) to create space between image and h1 on small screens
        />
        <h1 className="mt-4 text-2xl font-semibold text-white md:ml-4">Japanese Language</h1> {/* Add md:ml-4 to create space between h1 and image on larger screens */}
      </div>
    </div>
  );
};

export default PageHeader;
