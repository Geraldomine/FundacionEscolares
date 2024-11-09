import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Activity } from '../types';
import { Filter, Search } from 'lucide-react';

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
    status: "completed",
    hours: 8,
    startDate: "2024-02-15",
    endDate: "2024-02-28",
    school: "Escuela N°23"
  }
];

const ActivitiesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'in_progress' | 'completed'>('all');

  const filteredActivities = mockActivities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || activity.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Actividades</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar actividades..."
              className="pl-10 w-full input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              className="input"
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'all' | 'in_progress' | 'completed')}
            >
              <option value="all">Todas</option>
              <option value="in_progress">En Progreso</option>
              <option value="completed">Completadas</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{activity.title}</h3>
                  <p className="text-gray-600 mt-1">{activity.description}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Escuela: {activity.school}</p>
                    <p>Fecha: {new Date(activity.startDate).toLocaleDateString()} - {new Date(activity.endDate).toLocaleDateString()}</p>
                    <p>Horas: {activity.hours}h</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  activity.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {activity.status === 'completed' ? 'Completada' : 'En Progreso'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ActivitiesPage;