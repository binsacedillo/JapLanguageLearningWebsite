const ForumIntro = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-8"> {/* Added px-4 and sm:px-8 */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Community Page</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Forum Introduction</h2>
          <p>
            Brief description of the community and guidelines. Welcome to our Japanese Language
            community where you can learn, practice, and discuss everything related to the Japanese
            language.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Community Guidelines</h2>
          <ul>
            <li>Be respectful and kind to each other.</li>
            <li>Avoid using offensive language or engaging in personal attacks.</li>
            <li>Stay on-topic and relevant to the Japanese language and culture.</li>
            <li>Do not spam or promote unrelated content.</li>
            <li>Share helpful resources and learning materials.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">How to Get Started</h2>
          <p>
            If you&apos;re new to our community, here are some steps to help you get started:
          </p>
          <ol>
            <li>Introduce yourself in the &ldquo;New Members&rdquo; section.</li>
            <li>Explore the various language learning resources provided.</li>
            <li>Join ongoing discussions or start your own threads.</li>
            <li>Participate in language exchange programs to practice speaking Japanese.</li>
            <li>Ask questions and seek help from experienced community members.</li>
          </ol>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Connect with Us</h2>
          <p>
            Stay updated with the latest community news, language tips, and events by following us
            on our social media channels:
          </p>
          <ul>
            <li>Facebook: www.facebook.com/japaneselanguagecommunity</li>
            <li>Twitter: www.twitter.com/japaneselang</li>
            <li>Instagram: www.instagram.com/japaneselanguage</li>
          </ul>
        </div>
        
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default ForumIntro;
