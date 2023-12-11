const wordData = {
  totalWords: [
    { word: "water", spanishWord: "agua", level: "A1", index: 0 },
    { word: "house", spanishWord: "casa", level: "A1", index: 1 },
    { word: "bread", spanishWord: "pan", level: "A1", index: 2 },
    { word: "to clean", spanishWord: "limpiar", level: "A1", index: 3 },
    { word: "friend", spanishWord: "amigo", level: "A1", index: 4 },
    { word: "sister", spanishWord: "hermana", level: "A1", index: 5 },
    { word: "brother", spanishWord: "hermano", level: "A1", index: 6 },
    { word: "cake", spanishWord: "pastel", level: "A1", index: 7 },
  ],
  savedWords: [
    {
      word: "water",
      spanishWord: "agua",
      level: "A1",
      index: 0,
      timesKnown: 0,
      timesForgotten: 0,
      lastKnown: null,
      lastForgotten: null,
      inDeck: true,
    },
    {
      word: "bread",
      spanishWord: "pan",
      level: "A1",
      index: 2,
      timesKnown: 0,
      timesForgotten: 0,
      lastKnown: null,
      lastForgotten: null,
      inDeck: true,
    },
    {
      word: "friend",
      spanishWord: "amigo",
      level: "A1",
      index: 4,
      timesKnown: 0,
      timesForgotten: 0,
      lastKnown: null,
      lastForgotten: null,
      inDeck: true,
    },
  ],
};

// steps to build app
// 1. Created "total vocab screen", populate it with the master word object
// 2. Allow it to "save" words to local memory
// 3. populate "my words" screen from local memory
// 4. populate the Cards from local memory, allow it to update
