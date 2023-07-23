const sampleLesson = () => {
  const exampleSentences = [
    {
      id: 1,
      japanese: '今日(きょう)はお寿司(すし)を食(た)べました。',
      romaji: 'Kyō wa o-sushi o tabemashita.',
      english: 'Today, I ate sushi.',
    },
    {
      id: 2,
      japanese: '猫(ねこ)は魚(さかな)が好(す)きです。',
      romaji: 'Neko wa sakana ga suki desu.',
      english: 'Cats like fish.',
    },
    {
      id: 3,
      japanese: '私(わたし)は日本(にほん)の漫画(まんが)が大好(だいす)きです。',
      romaji: 'Watashi wa Nihon no manga ga daisuki desu.',
      english: 'I love Japanese manga.',
    },
  ];

  return (
    <div className="bg-indigo-500 text-white p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl">
        Sample JLPT N5 Lesson
      </h2>
      <p className="text-lg mb-6 md:text-xl lg:text-2xl">
        Welcome to our JLPT N5 lesson! In this interactive section, you can experience
        a part of our beginner-level Japanese course, designed to help you prepare for
        the JLPT N5 exam.
      </p>
      <div className="aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-3">
        <div className="p-2 border rounded-lg bg-indigo-400 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Example Sentences:</h3>
          <ul className="list-disc pl-6">
            {exampleSentences.map((sentence) => (
              <li key={sentence.id} className="mb-2">
                <p className="text-base font-medium">{sentence.japanese}</p>
                <p className="text-sm italic">{sentence.romaji}</p>
                <p className="text-sm italic">{sentence.english}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sampleLesson;
