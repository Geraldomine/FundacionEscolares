import React from 'react';
import { Clock, Calendar, BookOpen } from 'lucide-react';
import { Activity } from '../types';

interface ProgressEntry {
  id: number;
  activityId: number;
  date: string;
  hoursCompleted: number;
  description: string;
  achievements: string;
}

// Mock progress entries - In a real app, this would come from an API
const mockProgressEntries: ProgressEntry[] = [
  {
    id: 1,
    activityId: 1,
    date: '2024-03-15',
    hoursCompleted: 4,
    description: 'Implementación de nuevas técnicas de ordeñe mecánico',
    achievements: 'Mejora en la eficiencia del proceso de ordeñe'
  },
  {
    id: 2,
    activityId: 2,
    date: '2024-03-14',
    hoursCompleted: 3,
    description: 'Control de malezas y monitoreo del desarrollo del cultivo',
    achievements: 'Identificación temprana de plagas potenciales'
  },
  {
    id: 3,
    activityId: 3,
    date: '2024-03-13',
    hoursCompleted: 2,
    description: 'Revisión del estado de las colmenas y extracción de miel',
    achievements: 'Producción de 20kg de miel de alta calidad'
  }
];

interface RecentActivitiesProps {
  activities: Activity[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Avances Recientes</h2>
      <div className="space-y-4">
        {mockProgressEntries.map((progress) => {
          const activity = activities.find(a => a.id === progress.activityId);
          if (!activity) return null;

          return (
            <div
              key={progress.id}
              className="border-l-4 border-green-500 pl-4 py-2"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-gray-800">{activity.title}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(progress.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{progress.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{progress.hoursCompleted}h completadas</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{progress.achievements}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivities;