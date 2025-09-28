
import React, { useState, useEffect } from 'react';
import { ImageType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import Modal from './components/Modal';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  useEffect(() => {
    const fetchImages = () => {
      setIsLoading(true);
      // Simulate fetching data for a more realistic loading experience
      setTimeout(() => {
        const generatedImages: ImageType[] = Array.from({ length: 20 }, (_, i) => {
          const id = 100 + i;
          return {
            id: id.toString(),
            url: `https://picsum.photos/id/${id}/800/600`,
            download_url: `https://picsum.photos/id/${id}/1920/1080`,
            author: `Author ${i + 1}`,
          };
        });
        setImages(generatedImages);
        setIsLoading(false);
      }, 2000); // 2-second delay
    };

    fetchImages();
  }, []);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gold-100 font-inter flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-center text-gold-300 mb-8 tracking-wider">
          Golden Gallery
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} onClick={handleImageClick} />
            ))}
          </div>
        )}
      </main>
      <Footer />

      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
