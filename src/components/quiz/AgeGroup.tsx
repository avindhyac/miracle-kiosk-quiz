import React from 'react';
import { Clock } from 'lucide-react';

interface AgeGroupProps {
  onSelect: (age: string) => void;
}

const AgeGroup: React.FC<AgeGroupProps> = ({ onSelect }) => {
  const ageGroups = [
    'Under 19',
    '20\'s',
    '30\'s',
    '40\'s',
    '50\'s',
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="text-center w-full max-w-xl mx-auto">
        <Clock className="text-primary w-16 h-16 mb-8 mx-auto" />
        <h2 className="text-4xl font-bold text-primary mb-12 px-4">
          Choose your age group
        </h2>

        <div className="grid grid-cols-1 gap-4 w-full">
          {ageGroups.map((age) => (
            <button
              key={age}
              onClick={() => onSelect(age)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-2xl text-primary hover:bg-primary-light/30"
            >
              {age}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgeGroup