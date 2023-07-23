const ResourcesPage = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Resource Center header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Resource Center
        </h1>
        <p className="text-center mb-8">
          Learn Japanese with our curated collection of resources!
        </p>
        {/* Add your resource content here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resource Card 1 */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            {/* Resource card content */}
            <h2 className="text-xl text-gray-600 font-bold mb-2">Hiragana Chart</h2>
            <p className="text-gray-600">
              A comprehensive chart displaying all hiragana characters used in Japanese writing. Perfect for beginners to practice and memorize.
            </p>
            <a
              href="/hiragana-chart"
              className="block mt-4 text-blue-500 hover:text-blue-700 font-bold"
            >
              Learn More
            </a>
          </div>

          {/* Resource Card 2 */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            {/* Resource card content */}
            <h2 className="text-xl text-gray-600 font-bold mb-2">Kanji Dictionary</h2>
            <p className="text-gray-600">
              An extensive kanji dictionary with meanings, readings, and example sentences. Use it to explore and understand complex kanji characters.
            </p>
            <a
              href="/kanji-dictionary"
              className="block mt-4 text-blue-500 hover:text-blue-700 font-bold"
            >
              Learn More
            </a>
          </div>

          {/* Resource Card 3 */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            {/* Resource card content */}
            <h2 className="text-xl text-gray-600 font-bold mb-2">Japanese Language Blog</h2>
            <p className="text-gray-600">
              Our blog features articles on Japanese grammar, vocabulary, culture, and language learning tips. Stay updated with the latest language trends.
            </p>
            <a
              href="/japanese-language-blog"
              className="block mt-4 text-blue-500 hover:text-blue-700 font-bold"
            >
              Learn More
            </a>
          </div>

          {/* Add more resource cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
