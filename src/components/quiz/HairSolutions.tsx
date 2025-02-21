import React from 'react';
import ProductRecommendation from '../ProductRecommendation';

interface HairSolutionsProps {
  userData: {
    name: string;
    concern?: string;
  };
}

const HairSolutions: React.FC<HairSolutionsProps> = ({ userData }) => {
  // Mapping concerns to product recommendations
  const productRecommendations: Record<string, { image: string; title: string; description: string }[]> = {
    'Hair damage': [
      { image: '/hair-dmg/dmg-shampoo.jpg', title: 'Miracle Damaged Repair Shampoo', description: 'Restores hair strength and reduces breakage.' },
      { image: '/hair-dmg/dmg-conditioner.jpg', title: 'Miracle Damaged Repair Conditioner', description: 'Strengthens and repairs split ends.' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Rebuilds damaged hair and nourishes the scalp.' },
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Adds protection and smoothness.' },
    ],
    'Weak hair': [
      { image: '/hair-fall-oily-weak/hairfall-shampoo.jpg', title: 'Miracle Hydro Boost Shampoo', description: 'Strengthens hair and improves scalp circulation.' },
      { image: '/hair-fall-oily-weak/hairfall-conditioner.jpg', title: 'Miracle Hydro Boost Conditioner', description: 'Enhances elasticity and reduces breakage.' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Strengthens and nourishes weak hair.' },
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Protects hair from breakage.' },
    ],
    'Hair fall': [
      { image: '/hair-fall-oily-weak/hairfall-shampoo.jpg', title: 'Miracle Hydro Boost Shampoo', description: 'Stimulates hair follicles and improves scalp health.' },
      { image: '/hair-fall-oily-weak/hairfall-conditioner.jpg', title: 'Miracle Hydro Boost Conditioner', description: 'Strengthens hair and reduces shedding.' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Promotes scalp circulation and nourishes hair follicles.' },
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Enhances shine and eliminates frizz.' },
    ],
    'Dandruff': [
      { image: '/dandruff/dandruff-shampoo.jpg', title: 'Miracle Anti-Dandruff Shampoo', description: 'Controls dandruff and soothes the scalp.' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Nourishes and eliminates scalp flakiness.' },
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Maintains hair texture appearing healthier and shinier.' },
    ],
    'Frizz': [
      { image: '/frizz/frizz-shampoo.jpg', title: 'Miracle Moisture Plus Shampoo', description: 'Keeps hair hydrated and frizz-free.' },
      { image: '/frizz/frizz-conditioner.jpg', title: 'Miracle Moisture Plus Conditioner', description: 'Tames frizz and improves smoothness.' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Deeply nourishes the hair and scalp.' },
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Eliminates frizz and enhances shine.' },
    ],
    'Oily': [
      { image: '/hair-fall-oily-weak/hairfall-shampoo.jpg', title: 'Miracle Hydro Boost Shampoo', description: 'Stimulates hair follicles and improves scalp health.' },
      { image: '/hair-fall-oily-weak/hairfall-conditioner.jpg', title: 'Miracle Hydro Boost Conditioner', description: 'Strengthens hair and reduces shedding.' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Promotes scalp circulation and nourishes hair follicles.' },
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Enhances shine and eliminates frizz.' },
    ],
  };

  // Get recommendations based on user's concern
  const recommendedProducts = productRecommendations[userData.concern || ''] || [];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-primary">Your Personalized Haircare Routine</h2>
      <p className="text-lg text-primary/70 mt-4">Based on your data, here are our top recommendations:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
        {recommendedProducts.map((product, index) => (
          <ProductRecommendation 
            key={index} 
            image={product.image} 
            title={product.title} 
            description={product.description} 
          />
        ))}
      </div>
      <div className="mt-20 w-full max-w-2xl p-6 bg-primary text-white rounded-2xl shadow-lg text-center">
        <h3 className="text-2xl font-bold">Grab your new haircare essentials now and enjoy an exclusive discount at checkout.</h3>
      </div>
      <button 
        className="mt-10 px-10 py-4 text-2xl text-bold bg-white text-primary rounded-xl shadow-md hover:bg-primary/80 hover:text-white transition" 
        onClick={() => window.location.reload()}
      >
        Return home
      </button>
    </div>
  );
};

export default HairSolutions;
