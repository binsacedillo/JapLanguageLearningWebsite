const Materials = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Learning materials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg text-gray-600 font-bold mb-2">E-books</h3>
          <p className="text-gray-600">
            Browse our collection of Japanese language learning e-books. From beginner to advanced, we have resources for all levels.
          </p>
          <a
            href="#learn-more"
            className="mt-4 text-blue-500 hover:text-blue-600 font-bold"
          >
            Learn More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg text-gray-600 font-bold mb-2">Podcasts</h3>
          <p className="text-gray-600">
            Listen to our selection of Japanese podcasts that cover a variety of topics, designed to improve your listening and comprehension skills.
          </p>
          <a
            href="#learn-more"
            className="mt-4 text-blue-500 hover:text-blue-600 font-bold"
          >
            Learn More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg text-gray-600 font-bold mb-2">Videos</h3>
          <p className="text-gray-600">
            Watch instructional videos and entertaining content in Japanese to enhance your language learning journey.
          </p>
          <a
            href="#learn-more"
            className="mt-4 text-blue-500 hover:text-blue-600 font-bold"
          >
            Learn More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg text-gray-600 font-bold mb-2">Infographics</h3>
          <p className="text-gray-600">
            Visual learners will love our collection of Japanese language infographics that simplify complex grammar and vocabulary topics.
          </p>
          <a
            href="#learn-more"
            className="mt-4 text-blue-500 hover:text-blue-600 font-bold"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Materials;
