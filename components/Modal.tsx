
import React, { useEffect } from 'react';
import { ImageType } from '../types';

interface ModalProps {
  image: ImageType;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-800 rounded-lg shadow-2xl shadow-gold-950/50 max-w-4xl w-11/12 max-h-[90vh] flex flex-col p-4 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 h-10 w-10 bg-gold-600 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold hover:bg-gold-500 transition-colors duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gold-300"
          aria-label="Close image view"
        >
          &times;
        </button>
        <div className="flex-grow overflow-hidden rounded-md">
           <img
            src={image.download_url}
            alt={`Photograph by ${image.author}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="pt-4 text-center">
          <p className="text-xl text-gold-200">
            By <span className="font-bold">{image.author}</span>
          </p>
        </div>
      </div>
       <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          @keyframes scaleUp {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Modal;
