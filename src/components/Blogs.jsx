import PropTypes from 'prop-types';
import hello from '../images/konnichiwa.jpg';
import phrases from '../images/phrases.jpg';
import culture from '../images/culture.jpg';

const BlogSection = () => {
  // Sample blog data, you can fetch this data from an API or store
  const blogs = [
    {
      title: 'How to Say Hello in Japanese',
      date: 'July 15, 2023',
      excerpt: 'Learn the different ways to say hello in Japanese and when to use them.',
      image: hello,
      link: '/how-to-say-hello', // Replace this with the actual link
    },
    {
      title: 'Top 10 Must-Know Japanese Phrases for Travelers',
      date: 'August 2, 2023',
      excerpt: 'Essential Japanese phrases to enhance your travel experience in Japan.',
      image: phrases,
      link: '/japanese-phrases', // Replace this with the actual link
    },
    {
      title: 'Japanese Culture: Traditions and Festivals',
      date: 'September 10, 2023',
      excerpt: 'Explore the rich cultural heritage of Japan through its traditions and festivals.',
      image: culture,
      link: '/japanese-culture', // Replace this with the actual link
    },
    // Add more blog data as needed
  ];

  const BlogCard = ({ title, date, excerpt, image, link }) => (
    <div className="card bg-white rounded-lg shadow-md">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content p-4">
        <div className="font-bold text-gray-600 text-xl mb-2">
          <a href={link}>{title}</a> {/* Make the title clickable with the link */}
        </div>
        <p className="text-gray-600 text-sm mb-4">{date}</p>
        <p className="text-gray-700 text-base">{excerpt}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Japanese
        </span>
        {/* Add more tags as needed */}
      </div>
    </div>
  );

  BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  return (
    <div className="container mx-auto px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
      <h2 className="text-3xl font-semibold mb-4">Blog</h2>
      <div className="flex flex-wrap justify-center items-stretch">
        {blogs.map((blog, index) => (
          <div key={index} className="card-wrapper w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <BlogCard title={blog.title} date={blog.date} excerpt={blog.excerpt} image={blog.image} link={blog.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
