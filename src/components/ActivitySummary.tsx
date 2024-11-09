import React from 'react';
import { Clock, Activity } from 'lucide-react';
import { Activity as ActivityType } from '../types';

interface ActivitySummaryProps {
  activities: ActivityType[];
  totalHours: number;
}

const ActivitySummary: React.FC<ActivitySummaryProps> = ({ activities, totalHours }) => {
  const inProgressActivities = activities.filter(a => a.status === 'in_progress').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3">
          <Activity className="h-8 w-8 text-blue-500" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Actividades Activas</h3>
            <p className="text-3xl font-bold text-blue-500">{inProgressActivities}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3">
          <Clock className="h-8 w-8 text-purple-500" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Horas Totales</h3>
            <p className="text-3xl font-bold text-purple-500">{totalHours}h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySummary;