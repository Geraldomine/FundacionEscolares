import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            © 2024 Fundación Escolares. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600 mt-4 md:mt-0">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>para la comunidad educativa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;