import React from 'react';
import { Scissors } from 'lucide-react';

interface HairDescriptionProps {
  onSelect: (description: string) => void;
}

const HairDescription: React.FC<HairDescriptionProps> = ({ onSelect }) => {
  const descriptions = [
    'Normal hair',
    'Chemically treated hair',
    'Damaged hair',
    'Dry hair',
    'Frizzy hair',
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="text-center w-full max-w-xl mx-auto">
        <Scissors className="text-primary w-16 h-16 mb-8 mx-auto" />
        <h2 className="text-4xl font-bold text-primary mb-12 px-4">
          Which of the following best describes your hair?
        </h2>

        <div className="grid grid-cols-1 gap-4 w-full">
          {descriptions.map((desc) => (
            <button
              key={desc}
              onClick={() => onSelect(desc)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-2xl text-primary hover:bg-primary-light/30"
            >
              {desc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairDescription