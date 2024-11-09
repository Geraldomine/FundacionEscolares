import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ActivitySummary from '../components/ActivitySummary';
import RecentActivities from '../components/RecentActivities';
import ActivityGrid from '../components/ActivityGrid';
import Footer from '../components/Footer';
import { mockActivities } from '../data/activities';
import { User } from '../types';
import { PlusCircle, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/');
      return;
    }
    setUser(JSON.parse(userStr));
  }, [navigate]);

  if (!user) return null;

  const totalHours = mockActivities.reduce((acc, curr) => acc + curr.hours, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-500">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            ¡Bienvenido, {user.name}!
          </h1>
          <p className="text-xl text-white font-medium italic mb-2">
            "Educación para un desarrollo sustentable y responsable"
          </p>
          <p className="text-green-50 text-lg">
            Aquí está el resumen de tus actividades
          </p>
        </div>

        <ActivitySummary activities={mockActivities} totalHours={totalHours} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <RecentActivities activities={mockActivities} />
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <PlusCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Nuevo Avance de Actividad</h3>
                <p className="text-gray-600 mb-6">Registra el progreso de tus actividades en curso</p>
                <button 
                  onClick={() => navigate('/progress-form')} 
                  className="w-full btn btn-primary flex items-center justify-center space-x-2 py-3 text-lg"
                >
                  <span>Registrar Avance</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Actividades en Curso
          </h2>
          <ActivityGrid activities={mockActivities.filter(a => a.status === 'in_progress')} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;