
import React from 'react';
import { ImageType } from '../types';

interface ImageCardProps {
  image: ImageType;
  onClick: (image: ImageType) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div
      className="group relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gold-500 focus:ring-opacity-75"
      onClick={() => onClick(image)}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(image)}
    >
      <img
        src={image.url}
        alt={`Photograph by ${image.author}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-bold text-lg text-gold-100">{image.author}</p>
      </div>
    </div>
  );
};

export default ImageCard;
