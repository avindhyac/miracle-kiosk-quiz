import React from 'react';
import { Sparkles, Brain } from 'lucide-react';

interface WelcomeScreenProps {
  onSelect: (option: 'quiz' | 'game') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelect }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 space-y-12">
      {/* <div className="absolute w-80 top-10 opacity-80">
      <img src="/src/public/miracle-logo.jpg" alt="miracle logo"/>
      </div> */}
      <div className="text-center">
        <div className="flex justify-center top-10 opacity-80 w-full">
          <img src="/miracle-logo.jpg" alt="miracle logo" className="w-64"/>
        </div>
        <h1 className="text-5xl font-bold text-primary mb-4">
          Transform Your Hair Journey
        </h1>
        <p className="text-2xl text-primary/70">Choose your experience</p>
      </div>

      <div className="grid grid-cols-1 gap-8 w-full max-w-2xl">
        <button
          onClick={() => onSelect('quiz')}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <div className="flex items-center space-x-6">
            <div className="bg-primary-light p-4 rounded-full">
              <Sparkles size={40} className="text-primary" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-primary">Haircare Quiz</h2>
              <p className="text-xl text-primary/70">Build your perfect haircare routine</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSelect('game')}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <div className="flex items-center space-x-6">
            <div className="bg-primary-light p-4 rounded-full">
              <Brain size={40} className="text-primary" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-primary">Haircare Game</h2>
              <p className="text-xl text-primary/70">A fun brain teaser game</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen