import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Activity } from '../types';
import { ArrowLeft, Clock } from 'lucide-react';

const mockActivities: Activity[] = [
  {
    id: 1,
    title: "Proyecto Comunitario",
    description: "Desarrollo de huerta comunitaria",
    status: "in_progress",
    hours: 12,
    startDate: "2024-03-01",
    endDate: "2024-04-01",
    school: "Escuela Técnica N°1"
  },
  {
    id: 2,
    title: "Taller de Reciclaje",
    description: "Concientización ambiental",
    status: "in_progress",
    hours: 8,
    startDate: "2024-02-15",
    endDate: "2024-02-28",
    school: "Escuela N°23"
  }
];

interface ProgressFormData {
  activityId: string;
  hoursCompleted: string;
  description: string;
  date: string;
  temperature: string;
  humidity: string;
  precipitation: string;
  windSpeed: string;
  supplies: string;
  totalCost: string;
}

const ProgressFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProgressFormData>({
    activityId: '',
    hoursCompleted: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    temperature: '',
    humidity: '',
    precipitation: '',
    windSpeed: '',
    supplies: '',
    totalCost: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Progress submitted:', formData);
    navigate('/activities');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const selectedActivity = mockActivities.find(a => a.id.toString() === formData.activityId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-500">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/home')}
          className="flex items-center space-x-2 text-white hover:text-green-100 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al Inicio</span>
        </button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Nuevo Avance de Actividad</h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <label htmlFor="activityId" className="block text-sm font-medium text-gray-700 mb-1">
                Seleccionar Actividad
              </label>
              <select
                id="activityId"
                name="activityId"
                required
                className="w-full input"
                value={formData.activityId}
                onChange={handleChange}
              >
                <option value="">Selecciona una actividad</option>
                {mockActivities
                  .filter(activity => activity.status === 'in_progress')
                  .map(activity => (
                    <option key={activity.id} value={activity.id}>
                      {activity.title} - {activity.school}
                    </option>
                  ))
                }
              </select>
            </div>

            {selectedActivity && (
              <div className="bg-green-50 rounded-md p-4">
                <h3 className="font-medium text-green-800 mb-2">Detalles de la Actividad</h3>
                <p className="text-green-700 text-sm">{selectedActivity.description}</p>
                <div className="mt-2 flex items-center text-sm text-green-700">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Horas totales: {selectedActivity.hours}h</span>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Fecha del Avance
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full input"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="hoursCompleted" className="block text-sm font-medium text-gray-700 mb-1">
                Horas Completadas
              </label>
              <input
                type="number"
                id="hoursCompleted"
                name="hoursCompleted"
                required
                min="1"
                max={selectedActivity ? selectedActivity.hours : undefined}
                className="w-full input"
                value={formData.hoursCompleted}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descripción del Avance
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full input"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe las actividades realizadas en esta sesión..."
              />
            </div>

            <div>
              <label htmlFor="supplies" className="block text-sm font-medium text-gray-700 mb-1">
                Insumos Utilizados
              </label>
              <textarea
                id="supplies"
                name="supplies"
                required
                rows={3}
                className="w-full input"
                value={formData.supplies}
                onChange={handleChange}
                placeholder="Lista de insumos utilizados (semillas, fertilizantes, herramientas, etc.)"
              />
            </div>

            <div>
              <label htmlFor="totalCost" className="block text-sm font-medium text-gray-700 mb-1">
                Costo Total
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  id="totalCost"
                  name="totalCost"
                  required
                  min="0"
                  step="0.01"
                  className="w-full input pl-8"
                  value={formData.totalCost}
                  onChange={handleChange}
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
                  Temperatura (°C)
                </label>
                <input
                  type="number"
                  id="temperature"
                  name="temperature"
                  step="0.1"
                  required
                  className="w-full input"
                  value={formData.temperature}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="humidity" className="block text-sm font-medium text-gray-700 mb-1">
                  Humedad (%)
                </label>
                <input
                  type="number"
                  id="humidity"
                  name="humidity"
                  min="0"
                  max="100"
                  required
                  className="w-full input"
                  value={formData.humidity}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="precipitation" className="block text-sm font-medium text-gray-700 mb-1">
                  Precipitaciones (mm)
                </label>
                <input
                  type="number"
                  id="precipitation"
                  name="precipitation"
                  min="0"
                  step="0.1"
                  required
                  className="w-full input"
                  value={formData.precipitation}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="windSpeed" className="block text-sm font-medium text-gray-700 mb-1">
                  Viento (km/h)
                </label>
                <input
                  type="number"
                  id="windSpeed"
                  name="windSpeed"
                  min="0"
                  step="0.1"
                  required
                  className="w-full input"
                  value={formData.windSpeed}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/home')}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Guardar Avance
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgressFormPage;