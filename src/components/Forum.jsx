import { useState, useEffect, useMemo } from 'react';

const ForumSection = () => {
  // Define conversations for each topic using useMemo
  const learningEnglishConversations = useMemo(() => [
    {
      user: 'User1',
      message: 'Can anyone recommend good online resources to learn English?',
    },
    {
      user: 'User2',
      message: 'Sure! I highly recommend Duolingo and BBC Learning English.',
    },
    // Add more conversations as needed
  ], []);

  const englishLiteratureConversations = useMemo(() => [
    {
      user: 'User3',
      message: 'Has anyone read "Pride and Prejudice"? I need a review before I start reading it.',
    },
    {
      user: 'User4',
      message: 'Yes, I\'ve read it! It\'s a classic romance novel with well-developed characters.',
    },
    // Add more conversations as needed
  ], []);

  const travelConversations = useMemo(() => [
    {
      user: 'User5',
      message: 'Just came back from an amazing trip to Bali! The beaches are breathtaking!',
    },
    {
      user: 'User6',
      message: 'Oh, I\'ve always wanted to visit Bali! Any tips on the best places to stay?',
    },
    // Add more conversations as needed
  ], []);

  // State to hold the conversations for each topic
  const [learningEnglish, setLearningEnglish] = useState([]);
  const [englishLiterature, setEnglishLiterature] = useState([]);
  const [travel, setTravel] = useState([]);

  // On component mount, set the conversations for each topic
  useEffect(() => {
    setLearningEnglish(learningEnglishConversations);
    setEnglishLiterature(englishLiteratureConversations);
    setTravel(travelConversations);
  }, [learningEnglishConversations, englishLiteratureConversations, travelConversations]);

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Forum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Learning English */}
          <div className="bg-indigo-300 text-black p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Learning English</h3>
            <p className="text-black">This thread is about learning the English language.</p>
            {/* Display all the conversations */}
            {learningEnglish.map((conversation, index) => (
              <div key={index} className="border-t border-gray-400 mt-4 pt-4">
                <p className="font-semibold">{conversation.user}:</p>
                <p>{conversation.message}</p>
              </div>
            ))}
          </div>

          {/* English Literature */}
          <div className="bg-indigo-300 p-4 text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-2">English Literature</h3>
            <p className="text-black">Discuss English literature and books in this thread.</p>
            {/* Display all the conversations */}
            {englishLiterature.map((conversation, index) => (
              <div key={index} className="border-t border-gray-400 mt-4 pt-4">
                <p className="font-semibold">{conversation.user}:</p>
                <p>{conversation.message}</p>
              </div>
            ))}
          </div>

          {/* Travel and Tourism */}
          <div className="bg-indigo-300 p-4 text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Travel and Tourism</h3>
            <p className="text-black">Share your travel experiences and tips in this thread.</p>
            {/* Display all the conversations */}
            {travel.map((conversation, index) => (
              <div key={index} className="border-t border-gray-400 mt-4 pt-4">
                <p className="font-semibold">{conversation.user}:</p>
                <p>{conversation.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
