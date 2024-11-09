import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

interface ActivityFormData {
  title: string;
  description: string;
  school: string;
  startDate: string;
  endDate: string;
  hours: string;
}

const ActivityFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ActivityFormData>({
    title: '',
    description: '',
    school: '',
    startDate: '',
    endDate: '',
    hours: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log('Form submitted:', formData);
    navigate('/activities');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/activities')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver a Actividades</span>
        </button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Nueva Actividad</h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Título
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full input"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full input"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                Escuela
              </label>
              <input
                type="text"
                id="school"
                name="school"
                required
                className="w-full input"
                value={formData.school}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Inicio
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  className="w-full input"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Fin
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  required
                  className="w-full input"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">
                Horas Estimadas
              </label>
              <input
                type="number"
                id="hours"
                name="hours"
                required
                min="1"
                className="w-full input"
                value={formData.hours}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/activities')}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Guardar Actividad
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ActivityFormPage;