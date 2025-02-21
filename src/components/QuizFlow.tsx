import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UserForm from './quiz/UserForm';
import Greeting from './quiz/Greeting';
import HairType from './quiz/HairType';
import HairDescription from './quiz/HairDescription';
import HairConcerns from './quiz/HairConcerns';
import HairGoals from './quiz/HairGoals';
import AgeGroup from './quiz/AgeGroup';
import LoadingScreen from './quiz/LoadingScreen';

export type UserData = {
  name: string;
  phone: string;
  hairType?: string;
  hairDescription?: string;
  concerns?: string[];
  goal?: string;
  ageGroup?: string;
};

const QuizFlow: React.FC = () => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    phone: '',
  });

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const components = [
    <UserForm key="form" userData={userData} onSubmit={(data) => {
      updateUserData(data);
      nextStep();
    }} />,
    <Greeting key="greeting" name={userData.name} onContinue={nextStep} />,
    <HairType key="hairType" onSelect={(type) => {
      updateUserData({ hairType: type });
      nextStep();
    }} />,
    <HairDescription key="hairDesc" onSelect={(desc) => {
      updateUserData({ hairDescription: desc });
      nextStep();
    }} />,
    <HairConcerns key="concerns" onSelect={(concerns) => {
      updateUserData({ concerns });
      nextStep();
    }} />,
    <HairGoals key="goals" onSelect={(goal) => {
      updateUserData({ goal });
      nextStep();
    }} />,
    <AgeGroup key="age" onSelect={(age) => {
      updateUserData({ ageGroup: age });
      nextStep();
    }} />,
    <LoadingScreen key="loading" />,
  ];

  return (
    <div className="h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {components[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizFlow;