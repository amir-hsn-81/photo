
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/50">
      <div className="container mx-auto px-4 py-4 text-center text-gold-700 font-inter">
        <p>&copy; {new Date().getFullYear()} Golden Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
