import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Activity } from '../types';
import { BarChart3, Download, Filter } from 'lucide-react';

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

const ReportsPage: React.FC = () => {
  const [filters, setFilters] = useState({
    activity: '',
    startDate: '',
    endDate: '',
    status: 'all'
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredActivities = mockActivities.filter(activity => {
    const matchesActivity = !filters.activity || activity.title.toLowerCase().includes(filters.activity.toLowerCase());
    const matchesStartDate = !filters.startDate || new Date(activity.startDate) >= new Date(filters.startDate);
    const matchesEndDate = !filters.endDate || new Date(activity.endDate) <= new Date(filters.endDate);
    const matchesStatus = filters.status === 'all' || activity.status === filters.status;
    
    return matchesActivity && matchesStartDate && matchesEndDate && matchesStatus;
  });

  const totalHours = filteredActivities.reduce((acc, curr) => acc + curr.hours, 0);
  const completedActivities = filteredActivities.filter(a => a.status === 'completed').length;
  const inProgressActivities = filteredActivities.filter(a => a.status === 'in_progress').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Reportes</h1>
          <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            <Download className="h-5 w-5" />
            <span>Exportar</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Horas</p>
                <p className="text-2xl font-bold text-gray-800">{totalHours}h</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Actividades Completadas</p>
                <p className="text-2xl font-bold text-gray-800">{completedActivities}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold">{Math.round((completedActivities / filteredActivities.length) * 100)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">En Progreso</p>
                <p className="text-2xl font-bold text-gray-800">{inProgressActivities}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold">{Math.round((inProgressActivities / filteredActivities.length) * 100)}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-800">Filtros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
                Actividad
              </label>
              <input
                type="text"
                id="activity"
                name="activity"
                className="w-full input"
                value={filters.activity}
                onChange={handleFilterChange}
              />
            </div>

            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                Fecha Inicio
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="w-full input"
                value={filters.startDate}
                onChange={handleFilterChange}
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                Fecha Fin
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="w-full input"
                value={filters.endDate}
                onChange={handleFilterChange}
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <select
                id="status"
                name="status"
                className="w-full input"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="all">Todos</option>
                <option value="in_progress">En Progreso</option>
                <option value="completed">Completados</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actividad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Escuela
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Inicio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Fin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Horas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredActivities.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                    <div className="text-sm text-gray-500">{activity.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.school}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(activity.startDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(activity.endDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.hours}h
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      activity.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {activity.status === 'completed' ? 'Completado' : 'En Progreso'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportsPage;