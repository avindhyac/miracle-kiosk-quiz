import { AlertCircle } from 'lucide-react';

interface HairConcernsProps {
  onSelect: (concerns: string) => void;
}

const HairConcerns: React.FC<HairConcernsProps> = ({ onSelect }) => {

  const concerns = [
    'Dandruff',
    'Hair fall',
    'Weak hair',
    'Oily',
    'Frizz',
    'Hair damage'
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="text-center w-full max-w-xl mx-auto">
      <AlertCircle className="text-primary w-16 h-16 mb-8 mx-auto" />
        <h2 className="text-4xl font-bold text-primary mb-12 px-4">
          What are your top hair concerns?
        </h2>

        <div className="grid grid-cols-1 gap-4 w-full">
          {concerns.map((conc) => (
            <button
              key={conc}
              onClick={() => onSelect(conc)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-2xl text-primary hover:bg-primary-light/30"
            >
              {conc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairConcerns;