import React from 'react';
import { Waves } from 'lucide-react';

interface HairTypeProps {
  onSelect: (type: string) => void;
}

const HairType: React.FC<HairTypeProps> = ({ onSelect }) => {
  const types = [
    { id: 'straight', label: 'Straight', icon: '💇‍♀️' },
    { id: 'wavy', label: 'Wavy', icon: '🌊' },
    { id: 'curly', label: 'Curly', icon: '🌀' },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="text-center w-full max-w-xl mx-auto">
        <Waves className="text-primary w-16 h-16 mb-8 mx-auto" />
        <h2 className="text-4xl font-bold text-primary mb-12 px-4">
          What's your hair type?
        </h2>

        <div className="grid grid-cols-1 gap-6 w-full">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-4 hover:bg-primary-light/30"
            >
              <span className="text-4xl">{type.icon}</span>
              <span className="text-2xl text-primary">{type.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairType