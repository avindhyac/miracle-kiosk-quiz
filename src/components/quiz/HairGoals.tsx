import React from 'react';
import { Target } from 'lucide-react';

interface HairGoalsProps {
  onSelect: (goal: string) => void;
}

const HairGoals: React.FC<HairGoalsProps> = ({ onSelect }) => {
  const goals = [
    'Smooth and silky hair',
    'Reduce dandruff',
    'Improve scalp health',
    'Control frizz',
    'Repair damaged hair',
    'Control hair fall',
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="text-center w-full max-w-xl mx-auto">
        <Target className="text-primary w-16 h-16 mb-8 mx-auto" />
        <h2 className="text-4xl font-bold text-primary mb-12 px-4">
          What is your top haircare goal?
        </h2>

        <div className="grid grid-cols-1 gap-4 w-full">
          {goals.map((goal) => (
            <button
              key={goal}
              onClick={() => onSelect(goal)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-2xl text-primary hover:bg-primary-light/30"
            >
              {goal}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairGoals