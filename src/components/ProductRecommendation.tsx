import React from 'react';

interface ProductProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProductRecommendation: React.FC<ProductProps> = ({ image, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
      <img src={image} alt={title} className="w-32 h-full object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-sm text-primary/70 mt-2">{description}</p>
    </a>
  );
};

export default ProductRecommendation;
