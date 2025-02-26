import React, { useState, useEffect } from 'react';
import ProductRecommendation from '../ProductRecommendation';

interface HairSolutionsProps {
  userData: {
    name: string;
    concern?: string;
  };
}

const HairSolutions: React.FC<HairSolutionsProps> = ({ userData }) => {
  const [view, setView] = useState<'individual' | 'bundle'>('individual');

  useEffect(() => {
    const interval = setInterval(() => {
      setView(prevView => (prevView === 'individual' ? 'bundle' : 'individual'));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // Mapping concerns to product recommendations
  const productRecommendations: Record<string, { image: string; title: string; description: string; link:string; }[]> = {
    'Hair damage': [
      { image: '/hair-dmg/dmg-shampoo.jpg', title: 'Miracle Damaged Repair Shampoo', description: 'Restores hair strength and reduces breakage.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set' },
      { image: '/hair-dmg/dmg-conditioner.jpg', title: 'Miracle Damaged Repair Conditioner', description: 'Strengthens and repairs split ends.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Rebuilds damaged hair and nourishes the scalp.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set' },
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Adds protection and smoothness.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set' },
    ],
    'Weak hair': [
      { image: '/hair-fall-oily-weak/hairfall-shampoo.jpg', title: 'Miracle Hydro Boost Shampoo', description: 'Strengthens hair and improves scalp circulation.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set' },
      { image: '/hair-fall-oily-weak/hairfall-conditioner.jpg', title: 'Miracle Hydro Boost Conditioner', description: 'Enhances elasticity and reduces breakage.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set'},
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Strengthens and nourishes weak hair.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set'},
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Protects hair from breakage.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set' },
    ],
    'Hair fall': [
      { image: '/hair-fall-oily-weak/hairfall-shampoo.jpg', title: 'Miracle Hydro Boost Shampoo', description: 'Stimulates hair follicles and improves scalp health.',  link: 'https://www.britishcosmetics.com/products/hair-fall-control-set'},
      { image: '/hair-fall-oily-weak/hairfall-conditioner.jpg', title: 'Miracle Hydro Boost Conditioner', description: 'Strengthens hair and reduces shedding.',  link: 'https://www.britishcosmetics.com/products/hair-fall-control-set'},
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Promotes scalp circulation and nourishes hair follicles.',  link: 'https://www.britishcosmetics.com/products/hair-fall-control-set'},
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Enhances shine and eliminates frizz.', link: 'https://www.britishcosmetics.com/products/hair-fall-control-set' },
    ],
    'Dandruff': [
      { image: '/dandruff/dandruff-shampoo.jpg', title: 'Miracle Anti-Dandruff Shampoo', description: 'Controls dandruff and soothes the scalp.',  link: 'https://www.britishcosmetics.com/products/dandruff-control-set'},
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Nourishes and eliminates scalp flakiness.',  link: 'https://www.britishcosmetics.com/products/dandruff-control-set'},
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Maintains hair texture appearing healthier and shinier.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set' },
    ],
    'Frizz': [
      { image: '/frizz/frizz-shampoo.jpg', title: 'Miracle Moisture Plus Shampoo', description: 'Keeps hair hydrated and frizz-free.', link: 'https://www.britishcosmetics.com/products/frizz-free-set' },
      { image: '/frizz/frizz-conditioner.jpg', title: 'Miracle Moisture Plus Conditioner', description: 'Tames frizz and improves smoothness.', link: 'https://www.britishcosmetics.com/products/frizz-free-set' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Deeply nourishes the hair and scalp.', link: 'https://www.britishcosmetics.com/products/frizz-free-set'},
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Eliminates frizz and enhances shine.',  link: 'https://www.britishcosmetics.com/products/frizz-free-set'},
    ],
    'Oily': [
      { image: '/hair-fall-oily-weak/hairfall-shampoo.jpg', title: 'Miracle Hydro Boost Shampoo', description: 'Stimulates hair follicles and improves scalp health.', link: 'https://www.britishcosmetics.com/products/hair-fall-control-set' },
      { image: '/hair-fall-oily-weak/hairfall-conditioner.jpg', title: 'Miracle Hydro Boost Conditioner', description: 'Strengthens hair and reduces shedding.', link: 'https://www.britishcosmetics.com/products/hair-fall-control-set' },
      { image: '/hair-mask.jpg', title: 'Miracle Hair Treatment Mask', description: 'Promotes scalp circulation and nourishes hair follicles.', link: 'https://www.britishcosmetics.com/products/hair-fall-control-set'},
      { image: '/frizz-serum.jpg', title: 'Anti-Frizz Gloss Serum', description: 'Enhances shine and eliminates frizz.', link: 'https://www.britishcosmetics.com/products/hair-fall-control-set'},
    ],
  };

  const bundleRecommendations: Record<string, { image: string; title: string; description: string; link:string; }> = {
    'Hair damage': { image: '/bundles/repair-bundle.png', title: 'Rescue & Repair Set', description: 'Designed to rejuvenate, strengthen, and protect damaged hair.', link: 'https://www.britishcosmetics.com/products/rescue-repair-set' },
    'Hair fall': { image: '/bundles/hairfall-bundle.png', title: 'Hair Fall Control Set', description: 'A complete four-step routine to reduce hair fall, strengthen strands, and hydrate the scalp.', link: 'https://www.britishcosmetics.com/products/hair-fall-control-set' },
    'Weak hair': { image: '/bundles/hairfall-bundle.png', title: 'Hair Fall Control Set', description: 'A complete four-step routine to reduce hair fall, strengthen strands, and hydrate the scalp.', link: 'https://www.britishcosmetics.com/products/hair-fall-control-set' },
    'Oily': { image: '/bundles/hairfall-bundle.png', title: 'Hair Fall Control Set', description: 'A complete four-step routine to reduce hair fall, strengthen strands, and hydrate the scalp.', link: 'https://www.britishcosmetics.com/products/hair-fall-control-set' },
    'Dandruff': { image: '/bundles/dandruff-bundle.png', title: 'Dandruff Control Set', description: 'Designed to effectively combat dandruff and promote a healthy scalp.', link: 'https://www.britishcosmetics.com/products/dandruff-control-set' },
    'Frizz': { image: '/bundles/frizz-bundle.png', title: 'Frizz Free Set', description: 'Designed to deeply hydrate, nourish, and restore your hair’s natural beauty.', link: 'https://www.britishcosmetics.com/products/frizz-free-set' },
  };

  const recommendedProducts = productRecommendations[userData.concern || ''] || [];
  const bundleProduct = bundleRecommendations[userData.concern || ''];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-primary">Your Personalized Haircare Routine</h2>
      <p className="text-lg text-primary/70 mt-4">Based on your data, here are our top recommendations:</p>
      
      <div className="mt-8 flex items-center">
        <span className="text-primary mr-4">Individual Products</span>
        <div className="relative w-16 h-8 bg-gray-300 rounded-full cursor-pointer" onClick={() => setView(view === 'individual' ? 'bundle' : 'individual')}>
          <div className={`absolute w-8 h-8 bg-primary rounded-full transition-transform duration-500 ${view === 'bundle' ? 'translate-x-8' : 'translate-x-0'}`}></div>
        </div>
        <span className="text-primary ml-4">Bundle</span>
      </div>
      
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 transition-opacity duration-500 ${view === 'individual' ? 'opacity-100' : 'opacity-0'}`}>
        {view === 'individual' && recommendedProducts.map((product, index) => (
          <ProductRecommendation key={index} image={product.image} title={product.title} description={product.description} link={product.link} />
        ))}
      </div>
      
      {view === 'bundle' && bundleProduct && (
        <a href={bundleProduct.link} target="_blank" rel="noopener noreferrer" className="mt-8 transition-opacity duration-500 opacity-100 flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg w-3/4 sm:w-1/2">
          <img src={bundleProduct.image} alt={bundleProduct.title} className="w-48 h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-bold text-primary">{bundleProduct.title}</h3>
          <p className="text-lg text-primary/70 mt-2">{bundleProduct.description}</p>
        </a>
      )}
      
      <div className="mt-20 w-full max-w-2xl p-6 bg-primary text-white rounded-2xl shadow-lg text-center">
        <h3 className="text-2xl font-bold">Grab your new haircare essentials now and enjoy an exclusive discount at checkout.</h3>
      </div>
      <button className="mt-10 px-10 py-4 text-2xl font-bold bg-white text-primary rounded-xl shadow-md hover:bg-primary/80 hover:text-white transition" onClick={() => window.location.reload()}>
        Return home
      </button>
    </div>
  );
};

export default HairSolutions;
