import PropTypes from 'prop-types';

const SuccessStory = ({ name, story }) => {
  return (
    <div className="bg-indigo-300 text-black p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{name}</h3>
      <p>{story}</p>
    </div>
  );
};

SuccessStory.propTypes = {
  name: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
};

const SuccessStories = () => {
  // Sample data for success stories (you can replace this with dynamic data from API or a database)
  const successStoriesData = [
    {
      name: 'Taro Yamada',
      story: 'I used to struggle with Japanese, but thanks to this community, I can now hold conversations with native speakers!',
    },
    {
      name: 'Sakura Tanaka',
      story: 'Being a part of this community has helped me pass the JLPT N3 with flying colors. Ganbatte, everyone!',
    },
    {
      name: 'Hiroshi Suzuki',
      story: 'I moved to Japan for work, and this website helped me become proficient in Japanese within a year.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Highlighted Success Stories</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {successStoriesData.map((story, index) => (
          <SuccessStory key={index} name={story.name} story={story.story} />
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
