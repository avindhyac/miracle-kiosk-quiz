import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface HairConcernsProps {
  onSelect: (concerns: string[]) => void;
}

const HairConcerns: React.FC<HairConcernsProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const concerns = [
    'Dandruff',
    'Hair fall',
    'Split ends',
    'Oily',
    'Frizz',
  ];

  const toggleConcern = (concern: string) => {
    setSelected(prev => 
      prev.includes(concern)
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  return (
    <div className="h-full flex flex-col items-center p-8">
      <div className="text-center w-full max-w-xl mx-auto flex flex-col h-full">
        <div className="flex-shrink-0">
          <AlertCircle className="text-primary w-16 h-16 mb-8 mx-auto" />
          <h2 className="text-4xl font-bold text-primary mb-4 px-4">
            What are your top hair concerns?
          </h2>
          <p className="text-xl text-primary/70 mb-8">Select all that apply</p>
        </div>

        <div className="flex-1 overflow-y-auto mb-8">
          <div className="grid grid-cols-1 gap-4 w-full">
            {concerns.map((concern) => (
              <button
                key={concern}
                onClick={() => toggleConcern(concern)}
                className={`p-6 rounded-xl shadow-lg transition-all text-2xl
                  ${selected.includes(concern)
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-primary-light/30'
                  }`}
              >
                {concern}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <button
            onClick={() => onSelect(selected)}
            disabled={selected.length === 0}
            className="w-full bg-primary text-white text-2xl px-12 py-4 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default HairConcerns;