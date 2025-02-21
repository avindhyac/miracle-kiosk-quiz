import React, { useState } from 'react';
import { Waves, Scissors, ChevronRight, Sparkles } from 'lucide-react';
import QuizFlow from './components/QuizFlow';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [selectedOption, setSelectedOption] = useState<'quiz' | 'game' | null>(null);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-background-light to-primary-light/10">
      {!selectedOption ? (
        <WelcomeScreen onSelect={setSelectedOption} />
      ) : selectedOption === 'quiz' ? (
        <QuizFlow />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl text-primary">Game coming soon!</p>
        </div>
      )}
    </div>
  );
}

export default App