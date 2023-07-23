const Webinar = () => {
  return (
    <div className="container mx-auto px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8 mt-8 mb-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-4">Webinars/Events</h2>
      </div>
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:max-w-md">
          <h3 className="text-xl text-gray-600 font-semibold mb-4">Japanese Language Webinar</h3>
          <p className="text-gray-600 mb-4">
            Date: July 30, 2023
            <br />
            Time: 3:00 PM - 5:00 PM (JST)
          </p>
          <p className="text-gray-800">
            Join us for an informative webinar on the Japanese language, where we will cover
            essential grammar and useful phrases for everyday communication.
          </p>
          <a
            href="#register-link"
            className="block mt-4 text-blue-600 font-semibold hover:underline"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
