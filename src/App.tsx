import React, { useState, useEffect } from 'react';
import QuizFlow from './components/QuizFlow';
import WelcomeScreen from './components/WelcomeScreen';

const GAME_URL = ''

function App() {
  const [selectedOption, setSelectedOption] = useState<'quiz' | 'game' | null>(null);

  useEffect(() => {
    if (selectedOption === 'game') {
      window.location.href = `${GAME_URL}`; // Replace with your actual game URL
    }
  }, [selectedOption]);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-background-light to-primary-light/10">
      {!selectedOption ? (
        <WelcomeScreen onSelect={setSelectedOption} />
      ) : selectedOption === 'quiz' ? (
        <QuizFlow />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl text-primary">Redirecting to Haircare game...</p>
        </div>
      )}
    </div>
  );
}

export default App;
