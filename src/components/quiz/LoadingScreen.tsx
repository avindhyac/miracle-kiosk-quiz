import React from "react";
import { motion } from "framer-motion";


interface LoadingScreenProps {
  userData: {
    name: string;
    email: string;
    phone: string;
    hairType?: string;
    hairDescription?: string;
    concern?: string;
    goal?: string;
    ageGroup?: string;
  };
}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-background-light to-primary-light/20">
      <h2 className="text-4xl font-bold text-primary mb-16 text-center flex items-center">
        Building your perfect haircare routine
        <motion.span className="ml-2 inline-block" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }}>.</motion.span>
        <motion.span className="inline-block" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}>.</motion.span>
        <motion.span className="inline-block" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}>.</motion.span>
      </h2>
      <div className="relative w-48 h-48">
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} className="absolute w-48 h-48 rounded-full border-4 border-primary-light"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} />
        ))}
      </div>
      <motion.div className="mt-16 text-2xl text-primary" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
        Please wait while we analyze your responses...
      </motion.div>
    </div>
  );
};

export default LoadingScreen;