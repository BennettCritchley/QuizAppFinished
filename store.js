 const STORE = {
  questions: [
    {
      question: 'What is the mana cost of the Demonic Tutor?',
      answers: [
        '1 Black, 1 Green.',
        '1 Black, 1 Red.',
        '1 Colorless, 1 Black.',
        'All of the above.'
      ],
      correctAnswer: 'All of the above.'
    },
    
    {
      question: 'If a creature has "Haste" what are its capabilitys?',
      answers: [
        'It can only block.',
        'It can only attack.',
        'It comes into play without summoning sickness.',
        'It gets sacrificed on your end step.'
      ],
      correctAnswer: 'It comes into play without summoning sickness.'
    },
    
    {
      question: 'Whats the Standard goblin color?',
      answers: [
        'Black.',
        'Red.',
        'Blue.',
        'Green.'
      ],
      correctAnswer: 'Red.'
    },
    
    {
      question: 'Whats the limit of cards in a Modern Deck?',
      answers: [
        '40.',
        '60.',
        '50.',
        'As many as you can shuffle in your hands unassisted.'
        ],
      correctAnswer: 'As many as you can shuffle in your hands unassisted.'
    },
    
    {
      question: 'Whats the name of this creature?',
      answers: [
        'Chittering witch.',
        'Shivan dragon.',
        'Hellkite tyrant.',
        'Scion of the ur dragon.'
      ],
      correctAnswer: 'Shivan dragon.'
    }
  ],

  questionImages: [
    'Pictures/Q1.jpg',
    'Pictures/Q2.jpg',
    'Pictures/Q3.jpg',
    'Pictures/Q4.jpg',
    'Pictures/Q5.jpg'
  ],

  questionImgAlts: [
    'Picture of a Demonic Tutor.',
    'Picture of a MTG card with haste.',
    'Picture of a goblin from MTG.', 
    'Picture of 1000 MTG cards in a stack.',
    'Picture of the legendary Shivan dragon.'
  ],
  
  quizStarted: false,
  currentQuestion: 0,
  score: 0
};