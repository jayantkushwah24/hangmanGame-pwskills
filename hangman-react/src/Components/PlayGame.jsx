import { useEffect, useState } from "react";
import { hangmanWords } from "../Data/Data";

export function PlayGame() {
  const [randomHangmanWord, setRandomHangmanWords] = useState(null);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * hangmanWords.length) + 1; // Ensure the random ID is within the range of hangmanWords
    const filteredWord = hangmanWords.find((item) => item.id === randomId); // Use find instead of filter for a single item
    setRandomHangmanWords(filteredWord); // Set the object directly
  }, []);

  if (!randomHangmanWord) return <p>Loading...</p>; // Handle the initial loading state

  return (
    <>
      <h3>Hint: {randomHangmanWord.hint}</h3>
      <h2> {"_ ".repeat(randomHangmanWord.wordToGuess.length)}</h2>
      
    </>
  );
}
