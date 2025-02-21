import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion';
import UserForm from './quiz/UserForm';
import Greeting from './quiz/Greeting';
import HairType from './quiz/HairType';
import HairDescription from './quiz/HairDescription';
import HairConcerns from './quiz/HairConcerns';
import HairGoals from './quiz/HairGoals';
import AgeGroup from './quiz/AgeGroup';
import LoadingScreen from './quiz/LoadingScreen';
import HairSolutions from './quiz/HairSolutions.tsx'; // Import the new final step

// const SERVER_DOMAIN = "http://localhost:3000";
const SERVER_DOMAIN = "https://miracle-kiosk-server.onrender.com"


export type UserData = {
  name: string;
  email: string;
  phone: string;
  hairType?: string;
  hairDescription?: string;
  concern?: string;
  goal?: string;
  ageGroup?: string;
};

const QuizFlow: React.FC = () => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  useEffect(() => {
    if (step === 7 && !isSubmitted) {  // Prevent multiple submissions
      const submitData = async () => {
        try {
          console.log("Submitting user data:", userData);
          await axios.post(`${SERVER_DOMAIN}/submit`, userData, {
            headers: { "Content-Type": "application/json" },
          });
          setIsSubmitted(true);
          console.log("User data successfully submitted!");
        } catch (error) {
          console.error("Error submitting user data:", error);
        }
      };
  
      submitData();
    }
  }, [step, userData, isSubmitted]);
  

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
    <HairConcerns key="concerns" onSelect={(conc) => {
      updateUserData({ concern: conc });
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
    <LoadingScreen key="loading" userData={userData} />,
  ];

  // Once submission is complete, transition to HairSolutions
  if (isSubmitted) {
    return <HairSolutions userData={userData} />;
  }

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
