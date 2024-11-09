import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Activity, Newspaper, Lightbulb, PlusCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/activities', label: 'Actividades', icon: Activity },
    { path: '/blog', label: 'Blog', icon: Newspaper },
    { path: '/entrepreneurship', label: 'Emprendimiento', icon: Lightbulb },
    { path: '/school-registration', label: 'Proponer Actividad', icon: PlusCircle },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/home')}>
            <BookOpen className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">Fundación Escolares</span>
          </div>

          <div className="hidden md:flex space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive(path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-green-600 text-sm font-medium"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;