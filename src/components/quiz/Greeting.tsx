import React from 'react';
import { Sparkles } from 'lucide-react';

interface GreetingProps {
  name: string;
  onContinue: () => void;
}

const Greeting: React.FC<GreetingProps> = ({ name, onContinue }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
      <Sparkles className="text-primary w-20 h-20 mb-8" />
      <h2 className="text-5xl font-bold text-primary mb-8">
        Hello {name}!
      </h2>
      <p className="text-3xl text-primary/70 mb-12">
        Are you ready to transform your hair?
      </p>
      <button
        onClick={onContinue}
        className="bg-primary text-white text-2xl px-12 py-4 rounded-xl hover:bg-primary/90 transition-colors"
      >
        Yes, Let's Begin!
      </button>
    </div>
  );
};

export default Greeting;